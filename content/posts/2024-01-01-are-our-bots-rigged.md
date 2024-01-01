---
title: Are our bots rigged?
date: 2024-01-01T22:42:51.060Z
authors:
  - cesar
description: Let’s attempt to dispel some common notions about our bots, and
  about luck in general
tags:
  - luck
  - codecorner
cover: /images/uploads/img_0107.jpeg
---
In American grandmaster Mack Meller’s YouTube best-of-100 series between himself and our newest bot, BestBot (currently still in testing), there are invariably many unbelieving commenters. Mack didn’t have a great start, and the bot has been getting lucky, but many people comment something along the lines of “the bot’s code needs to be audited”.

Privately, I have received multiple messages from different people about how the Woogles randomizer is broken. Some of the messages are very angry! We’ve had a few people quit repeatedly and come back, citing their unreal luck. One player even insisted that they drew the rack WOOGLES and then something close to their own username within a few games of each other, and used this as evidence that our randomizer was broken. When I asked them if it was conceivable that I would write code to scan our players’ usernames and draw those racks slightly more often, rather than write code to do literally anything else (we have a lot of planned feature requests!) they didn’t really have an answer for this.

We human beings are notoriously bad at evaluating randomness. In general we tend to exaggerate our perception of bad luck and forget about streaks of good luck. Which poker player doesn’t have multiple bad beat stories and not so many stories about getting lucky? A few years ago I was convinced that ISC tile drawing code was rigged. Since their tile draws are client-side, I was able to, with Josh C, decompile the front-end JavaScript for drawing tiles and step through the algorithm to conclude that no, it is not rigged. 

Let’s take an experiment as an example. You don’t have to do this, but imagine writing down 100 coin flips on a piece of paper (H for heads and T for tails). If you were to ask a few people to do this, you’d see what at first glance looks like a pretty random distribution of Hs and Ts. You can then have a computer simulate 100 coin flips (or better yet, actually flip a coin 100 times), and write these down on another piece of paper. Then ask a statistician which one was human-generated and which one was actual coin flips; they should be able to quickly tell you. How? The real coin flips will be more “streaky”. It is unlikely for a person to write down 6 heads or tails in a row, but in a set of 100 coin flips, the chances of getting at least 6 heads or tails in a row somewhere is 80.6%! This may sound shocking (it is to me) but it is hopefully illuminating.

### The code behind tile drawing

As I have reminded people a few times, all of our Woogles code is open-source and available at <https://github.com/domino14/liwords>. For the purposes of this topic, another code base is more relevant - the rules of OMGWords are implemented in <https://github.com/domino14/macondo>. Macondo is also used as the AI for our bots - we believe it to be the strongest crossword board game AI yet built. 

The bag code and tile drawing routine can be found here:

[https://github.com/domino14/macondo/blob/master/tilemapping/bag.go](https://github.com/domino14/macondo/blob/master/tilemapping/bag.go)

In particular, the following function:

```go

func (b *Bag) Draw(n int, ml []MachineLetter) error {
	if n == 0 {
		return nil
	}
	if n > len(b.tiles) {
		return fmt.Errorf("tried to draw %v tiles, tile bag has %v",
			n, len(b.tiles))
	}
	l := len(b.tiles)
	k := l - n


	if !b.fixedOrder {
		for i := l; i > k; i-- {
			xi := frand.Intn(i)
			// move the selected tile to the end
			b.tiles[i-1], b.tiles[xi] = b.tiles[xi], b.tiles[i-1]
		}
	}

	copy(ml, b.tiles[k:l])

	// now update tileMap
	for _, v := range ml[:n] {
		b.tileMap[v]--
	}
	b.tiles = b.tiles[:k]
	// log.Debug().Int("numtiles", len(b.tiles)).Int("drew", n).Msg("drew from bag")
	return nil
}
```

I will try to provide a simple explanation of the above code:

First of all, the bag is a linear array of letters. It doesn’t matter whether the letters are shuffled or not. 

1) The `Draw` routine takes in two parameters: the number of tiles to draw (`n`), and a “slice” or array to put these tiles into.
2) The variable `k` is set to the number of tiles in the bag minus the number of tiles to draw.
3) Set the variable `i` to the number of tiles in the bag, and start counting down to `k` (So, we will count `n` times).
   - Select a pseudorandom number between 0 and `
i`, not including `i`. Call this `xi`.
   - Swap the tile that’s in this position (`xi`) with the tile that’s in position `i-1`. This has the effect of moving “drawn tiles” to the end of the bag, as `i` counts down.
4) Copy all the tiles that were “drawn”, i.e. those that are now at the end of the bag, to the passed-in array `ml`, and then update some internal tallies. Resize the bag to the new size, excluding the tiles that were drawn.

The code is purposely as simple as possible for what it has to do. There are a few variables, like `fixedOrder`, that don’t matter here. For transparency, the `fixedOrder` variable is used for the pre-endgame solver and in other AI-related places; it is not used by Woogles.

Note an important point. The bag drawing function **does not take the player as one of its parameters**. The only thing it cares about are how many tiles to draw. Whenever the calling code needs to draw tiles, it calls this function. This calling code can be a bot, a Monte Carlo simulation, a pre-endgame solver, or just the regular game logic as called by Woogles. This calling code says “give me X tiles” and the bag returns X random tiles to it. That’s it, no magic.

 Because this code is open source, any one can audit it. And as a matter of fact, an earlier version of this randomizer did have a bug in it. Fellow programmer John Chew (and president of NASPA) noticed that the randomizer did not have enough “states”. It was theoretically possible to only have 4 billion unique tile bag orders. This was found a couple years ago, when Woogles was very new, and quickly fixed (thank you!) Our new randomizer (`frand`) is cryptographically secure; its cipher is one of the ones used by SSL (ie, https URLs) to protect secure communications. If it’s good enough to form the underpinning of our banking networks, it is good enough for drawing tiles for a board game. Furthermore, this randomizer has almost as many states as there are atoms in the universe (roughly within a couple orders of magnitude). So please, take a look at the code. Even if there is some flaw in the randomizer, it does not seem possible for it to favor one player over another. Remember that it does not know which player it is dealing tiles to.

I’ve been asked how people can be sure that the Macondo codebase is the same code that is actually deployed to the server. The deployment process is semi-manual for the server code. I can make a video of myself deploying it, but at some point you’ll have to take my word for it. In the future, deploys will be more automated, and you’ll be able to audit the deployment scripts as well. But yes, it’s the same code. I don’t have the time to make a separate rigged version of Macondo, keep it secret from everyone, and deploy it secretly. Why would I do this? How would I even write the code to rig it?

### Grandmaster vs AI

As of the time of writing this, Mack has evened out the results a bit more. There are also many fewer comments about the bot being rigged; many seem to have been added during the first 10-20 matches or so. He went on a winning streak, but has lost a bunch of the last few. I expect him to have a few more win streaks before the series is over. Although it seems somewhat unlikely that he will win the whole series, I still think it’ll be a fairly close match as long as he can keep his composure, and he is one of the top players in North America at keeping his composure. Equanimity is an essential part of the game, especially at the top levels.