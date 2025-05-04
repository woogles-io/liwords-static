---
title: The Mathematics and Algorithms behind BestBot
date: 2025-05-04T14:54:00.000Z
authors:
  - cesar
description: Read more about how BestBot works and how it achieves its great performance!
tags:
  - BestBot
cover: /images/uploads/bestbot-thinking.png
---
We recently released BestBot on Woogles.io - the best crossword board game engine on the planet (that we know of). A crossword board game is one in which players take turns placing words on a board, such as SCRABBLE Brand Crossword Game, Words With Friends, Yahoo Literati, or, in the case of Woogles, OMGWords.

In this article I want to dive a bit into the technical side of our AI, and explain what makes it so good. Finally, I have some ideas for suggested improvements, including various things that we have tried.

## Macondo
BestBot’s underlying engine is the open-source Macondo engine - you can read more about it and download the code at [https://domino14.github.io/macondo](https://domino14.github.io/macondo). 

## The four phases of OMGWords
There are roughly four phases in any OMGWords game - the beginning, the midgame, the pre-endgame, and the endgame. We have endeavored to build a bot that can play these phases as well as it can.

For most of the game, OMGWords is a game of imperfect information. Luck plays a fairly significant part in the game, and the very best players win 65-75% of their games max. Nigel Richards, the world’s best human SCRABBLE player, wins around 75% of his games. Unlike in games like chess, where computers have now surpassed humans so that it is virtually impossible for the best human players to beat the hardest Stockfish, a great player can still beat Nigel almost half the time. We estimate that the best engines in the world are not far off of 50% vs the best human players in the world. Indeed, Mack Meller, 2024 North American Champion, is hovering around 40-42% vs BestBot in a long running series on YouTube.

### The beginning and mid-game
For the beginning to middle of the game, BestBot uses Monte Carlo simulations to generate the best moves. We look ahead at least 5 plies for every move - through a lot of testing we’ve concluded that 5 plies performs the best. This Monte Carlo method was pioneered by Brian Sheppard for his Maven program in the 1980s, and we haven’t really come up with anything new since then, as it tends to perform great. We added a cutoff algorithm that periodically allows us to trim away plays that can’t win, using a statistical test known as Welch’s T-Test. This has the effect of evaluating fewer plays for longer times. We also spent a long time coming up with leave values for every single possible leave from 1 to 6 letters long. This involved self-play of fast games - to the tune of hundreds of millions of games. 

Additionally, we used these many millions of games to come up with an accurate model for predicting the win percentage of any game, given the current score differential and the number of tiles in the bag.

BestBot also utilizes all a computer’s cores when doing these Monte Carlo sims, as the algorithm lends itself well to parallelization. The move generator has had a lot of optimizations added to it, so it can simulate many thousands of iterations quickly.

The combination of accurate leave values, statistical tests, win percentage metrics, and speed for evaluating thousands of iterations of deep-ply Monte Carlo sims results in a formidable opponent in the early and mid-game.

### The pre-endgame (2 to 6 tiles in the bag)
As we approach the end of the game, it is desirable to look ahead a few more turns. When the bag has fewer than 7 tiles in the bag, it is no longer possible to exchange, and many people believe the pre-endgame starts here. For pre-endgames with 2 to 6 tiles in the bag, we look ahead more plies when doing the Monte Carlo simulation, as it is now possible to actually play to the end of the game and thus get the actual (and not predicted) win percentage. 

We will talk about the 1-in-the-bag preendgame later, as this is a special type of preendgame.

### The endgame

We spent a long time creating and optimizing the endgame algorithm. As the endgame approaches we know with more and more certainty what tiles remain on our opponent’s rack, and when the bag is empty the endgame begins - we know all of their racks. This is nothing new - In tournament play, players track tiles so that they know what is remaining. BestBot plays a **fully exhaustive, perfect endgame**, using techniques from chess such as full width minimax search with alpha-beta pruning. See [this blog post](https://cesardelsolar.com/posts/2023-06-14-scrabble-endgames-chess-techniques/) for more details.

BestBot can see ahead many plies during this endgame search and is mathematically guaranteed to find the best sequence. Since we are running it on AWS Lambda, which is relatively lightweight, there are situations in which the endgame is too complex to evaluate fully in the 3 minutes we give it to make its move. In these cases, it will play the best endgame it has found so far - typically, after three minutes, the large majority of the time we’ve already solved the endgame, and the rest of the time we’re rarely more than a point or two off of the best sequence.


### 1-in-bag preendgame (1-PEG)

This type of preendgame is special because it is possible to exhaustively solve. It is actually possible to exhaustively solve up to a 6-in-the-bag preendgame, but the time taken for this would truly be prohibitive without massive leaps in move generation speed (which we are actually working on, more later). With a 1-PEG, we can solve up to 8 separate endgames for each possible preendgame play, and using clever pruning algorithms as well as a faster but slightly less precise version of the endgame algorithm, we can accurately determine the win/loss/tie metric for every possible preendgame play, including passing. Often BestBot can solve the preendgame several plies deeply for all possible plays in 3 minutes and make astonishing plays that would be difficult for a human to replicate.

## State of the Art

The current state of the art AI is Quackle’s Championship Player. We have not set up a match directly against it as we have not yet finished building the tools that would allow for such a match - namely, a bot API, and an adapter for connecting Quackle to one. But we’ve done a lot of self play with algorithms and parameters that are equivalent to what Quackle’s championship player is doing, and we have an approximately 56 to 57 percent win rate against it, which was way outside of the margin of error for the hundreds of games we did this for. We will do more and longer testing in the future.



## Future improvements

BestBot is a work in progress and we hope to only continue to improve it from here. I’ll highlight a few categories that we are actively working on:

#### Leave values

Gilles of Ortograf recently surprised us with a set of leave values that beat ours around 50.3% of the time. This is a fairly significant edge, and we are exploring modifying our leave generation algorithms to take advantage of these better leave values. He was kind enough to share his methodology and we very recently replicated similar leaves that are basically tied with his. We will be deploying these leaves to BestBot soon.

I believe Monte Carlo simulation will decrease the effect of these improved leaves a bit, since its whole purpose is to improve over a purely equity-based approach — equity being just a combination of score and leave, used by the Monte Carlo algorithm for move evaluation. However, most improvements should be fairly incremental now, so this is an avenue to explore.  

#### Move generation speed

Macondo is written in Go, which is a very fast language, but a Woogles team member (Josh Castellano) started an open-source rewrite of it in C -- called [MAGPIE](https://github.com/jvc56/MAGPIE). John O'Laughlin of Quackle, Andy Kurnia, and I have contributed code and methodology to make it much faster than Macondo -- potentially between 5 to 10 times faster! It's still missing a multi-threaded endgame engine and a pre-endgame engine but we hope to add those soon. We hope that at some point this year we can change the BestBot backend to MAGPIE and really reap some speed and cost benefits. This should especially benefit us in pre-endgames with more tiles in the bag.

#### Inferences

I have created a decent inference engine in Macondo. It's actually fairly accurate for many cases - it can detect setups and other tricky situations. In the Macondo command line, you can use `help infer` to read more about it. However, it's not totally mathematically sound and when matching it against BestBot, I can never get an edge one way or the other. We hope to translate these algorithms to MAGPIE and thus be able to run much faster experiments to determine how good we can make the inference engine.

#### Other machine learning

We believe that we can potentially get some great results using ML algorithms to evaluate moves; at least replacing the static evaluator and continuing to do Monte Carlo simulation. Early experiments with ML are somewhat promising in rough prediction of win %, but there's still a lot of work to be done on this.

---

Stay tuned! BestBot is only going to improve from here on out!
