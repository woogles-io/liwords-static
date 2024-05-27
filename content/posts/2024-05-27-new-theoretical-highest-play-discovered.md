---
title: New theoretical highest play discovered!
date: 2024-05-26T22:45:00.000Z
authors:
  - cesar
description: A new play has been discovered that theoretically scores the most
  points in a standard board - 1786 points using the NWL23 lexicon. Read on for
  more!
cover: /images/uploads/screenshot_20240512-141108.png
---
The OMGWords world was set abuzz two weeks ago when Woogles Discord user @bob (Bob Lucassen) found a new theoretically highest-scoring play of 1786 points with the NWL23 lexicon. For many years, the record has inched upwards; the last documented record was 1784 points as shown here: 
[http://www.scrabbleplayers.org/w/SCRABBLE_Trivia#:~:text=The%20highest%20scoring%20legal%20play,and%20Eric%20—%20Highest%20Play%20Board.](http://www.scrabbleplayers.org/w/SCRABBLE_Trivia#:~:text=The%20highest%20scoring%20legal%20play,and%20Eric%20—%20Highest%20Play%20Board) Scrabbler Alec Sjoholm (@jellomochas) mentioned that the record was actually 1785 points and showed us the construction for it. I don’t know where he obtained it from. 

But for this new record, Lucassen used something called a "Boolean Satisfiability Solver" (BSAT Solver). A BSAT Solver is a tool that helps solve problems where you need to determine if there exists an arrangement of variables that satisfies a set of logical constraints. Essentially, it answers the question: "Can these conditions be met?" In the context of OMGWords, the solver checks all possible board configurations to find the one that maximizes the score while adhering to the game's rules.

Here’s a simplified breakdown of how it works: imagine each tile and its position on the board as variables in a giant logical puzzle. The constraints are the rules of OMGWords – like placing words only horizontally or vertically, connecting to existing tiles, and ensuring valid words. Mathematically, the problem is expressed using Boolean logic, where each variable can be true (the tile is placed) or false (the tile is not placed). 

The BSAT Solver processes these variables and constraints through an algorithm designed to handle such logic puzzles efficiently. What makes a BSAT Solver particularly powerful is its ability to systematically explore vast numbers of possibilities. It does this by breaking down the problem into smaller, manageable parts and using advanced techniques to prune paths that won’t lead to a solution, thereby saving time.

When the solver finds a valid configuration that yields the highest score, it provides proof that no other configuration can produce a better result under the given constraints. In essence, Lucassen’s use of the BSAT Solver allowed him to rigorously explore all potential OMGWords board setups to confirm that his 1786-point configuration is indeed the best solution discovered so far. 

Of course, the solution does involve OXYPHENBUTAZONE, but as seen in the image below, there are some new words we haven’t seen used yet. The rack is also slightly different - BENOPXZ in this new construction vs ABEOXPZ. 

![](/images/uploads/screenshot_20240512-141108.png "Construction of new 1786-pt OXYPHENBUTAZONE play. Thanks to Discord user ddrkanine for providing the above image (using the Woogles board editor) and verifying it can be played with no phonies.")

Here you can see LADDERLIKE with the B hook, ARROWING with the N hook, STABLISHMENTS with the E hook. And of course, OPACIFICATIONS$+ — new in NWL23, this word made this new 1-pt higher construction possible. Can you find something that scores more in NWL23? B-SAT proves you can’t, but let us know!
