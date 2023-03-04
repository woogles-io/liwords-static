+++
title = "Tournament tips and troubleshooting"
date = "2022-11-10"
author = "César Del Solar"
description = "Some tips to maximize success when running a tournament using Woogles' tournament mode."
tags = ["tournaments"]
+++

## How to best use our tournament mode to minimize issues

First, please read our guide on how to use tournament mode on this site:

[How to run tournaments](/guides/how-to-run-tourneys/)

### Can I use clubhouse mode?

It's very important that you understand the basics of tournament mode if you want to run a successful tournament! If this is too complex for you, you can still run a small tournament using our "clubhouse" mode. A "clubhouse" tournament is run in a tournament room but you do the pairings yourself using whatever system you want, and then announce the pairings in the chat after every round. You can collect people's scores from the "RECENT GAMES" tab, and then continue with your pairings. It involves a bunch more manual work, though.

### It's ok, I want to use tournament mode

Make sure you understand the above document! Then, set up your tournament as you see fit. Here are some recommended settings:

- Set your "Suspended game result" to a Forfeit Loss (-50). You can do this with the `Set tournament controls` button. Other settings may make more sense for events such as club sessions.
- Your first round should probably be paired randomly. Or, you can use "Fontes" pairings for your first 3 or 5 rounds if you have some big divisions. For the latter, it would be good if the ratings you enter for your players are correlated to their skill levels, though.
- Every other round except for the last couple could be paired Swiss, with `1 1 1` for the three numbers that it asks you for. These numbers should be good enough for most cases.
- Enter all your players with whatever ratings you want to give them. These numbers don't really matter, except for Fontes pairings seeding. 

- Contact all of your players via whatever mechanism you want (email, Whatsapp, etc). Make sure to tell them to be in your tournament room 15 minutes ahead of time. As you see them come in make a note of who's still not there (we will add a check-in button at some point).
- With a few minutes to go tell them you will start without them if they don't show up. Start removing players who didn't show. You can always re-add them if they get back in time, or maybe after the first round.
- Start the tournament. Everyone should start their games. If players don't start their games, and it turns out some people just didn't show up or left the room, and they don't get back in time (give them a few minutes), assign their opponents a Bye and assign them a Forfeit loss. Try to contact the missing player and tell them they'll be removed if they don't show up for the next round.
- Once the first round is complete, you should have a good idea of who didn't show up at all. You should consider removing them from the tournament. Do this _before_ opening the next round. Before opening any round, you should always try to make sure your players are there first. This is typically not an issue except for the first game of each session (if running a multi-day tournament). Remove any players not there or give them a forfeit loss if you have good reason to believe they'll show up later in the day.
- Continue until the end of the tournament. Try to open rounds on time.

## Troubleshooting

Woogles' tournament mode is powerful and has many features. We believe it is well designed, but it can be easy to run into failure modes that seem difficult to get out of. However, tournaments should always be recoverable! Still, we will want to show better error messages in some situations.

The most common failure modes come around when trying to open a new round. If you cannot open the next round, it should be always because of one of two reasons:

1. The round you are currently on does not have full results for all players
2. The next round is not paired

### Full results

Every player in a round must have a result in order for the round to be considered complete. The most common scenario is that they played a game and then the game ended. Then, both their opponent and themselves have a result.

However, if a player is a no-show, we strongly recommend that you figure this out before you open a round. Of course this isn't always possible, and if someone doesn't show after a few minutes, you may want to assign them a forfeit loss, and their paired opponent a Bye. You can do both of these with the "Set Single Pairing" button, for each player.

If someone doesn't show up at all though, chances are they just left the tournament and are not coming back. You can remove the player. If your current round is complete, then removing a player will give them the "suspended game result" for your tournament (this should be set to a Forfeit Loss when you set up your tournament).

If your current round is _still ongoing_, and you remove the player, this will NOT give them any sort of result. You must manually assign a forfeit loss to them (or a bye or whatever you want to give them), using the Set Single Pairing button again. There are various reasons why we implemented it this way, but the important thing is that the next round will not open if this removed player does not have a result.

### How do I tell if a player has a result or does not?

- The player must not be listed under "unpaired players". An unpaired player certainly does not have a result
- There must either be a score next to the player, or a badge that says "Bye", "Forfeit Loss", or even "Not playing". A "Removed" badge is not enough -- it must have one of those three results!

![image](https://user-images.githubusercontent.com/585318/201256401-822d3617-ce37-4d56-bb83-e9dc0dcc727c.png)

In the above image, `mina` has been removed from the tournament. She has a result though, so the next round will open just fine.

![image](https://user-images.githubusercontent.com/585318/201256495-5086611f-b524-4fa5-be12-7e84eb5b7ba5.png)

In the above image, `mina` has been removed from the tournament, and has a Forfeit result. The next round will open fine, after `cesar` and `cesitar` finish their game. `corny` also has a Bye result.

![image](https://user-images.githubusercontent.com/585318/201256872-c96d9eb5-8d26-4e19-92cb-e006c0aa6a53.png)

In the above image, `corny` does not have a result! She is unpaired, and the next round **will not start**.

![image](https://user-images.githubusercontent.com/585318/201256980-06a68a19-01a0-49dd-b147-64688b693fb8.png)

In the above image, we assigned a result of "No record change" to `corny` using the Set Single Pairing button. Corny has a badge that says "Not playing" next to her name. This is an uncommon type of result, you may want to use it for clubs instead of tournaments, so that people don't get losses for games where they didn't show up.  It still counts as a result, though, and the next round **will** start.

![image](https://user-images.githubusercontent.com/585318/201257968-e49bca5c-7927-435f-863e-bfe5a6579915.png)

Can you figure out why the next round won't open, given the above image? 

Who's missing a result? `Indrxn24` has been removed from the tournament mid-round but does not have a result! You should not let it get into this situation though, by only removing players once the round is complete and the next round's pairings are up.


### The next round is not paired?

In very rare situations, the round you are trying to open will not have pairings. You can fix this by clicking the Pair Round button and setting the round number. Then, you should be able to open the next round.

This only happens if you were really going ham with removing players and setting strange results for them, and it should not happen during regular tourney use. But let us know if you can trigger this.

