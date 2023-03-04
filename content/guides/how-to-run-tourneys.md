+++
title = "How to use Woogles tournament software"
date = "2022-07-20"
author = "Ben Schoenbrun"
description = "Learn how to use the Woogles tournament software as a director."
tags = ["tournaments"]
+++

### Tournament Mode User Guide

Woogles' tournament mode offers native tournament pairings, standings, and results capabilities. It also offers a much smoother experience for players, making it much easier for them to start their matches and making it impossible for them to start a game against the wrong opponent in the tournament room.

If you have a question about tournament mode, please refer to this guide first, and if you are still confused, send an email to woogles@woogles.io.

**Please note that Tournament Mode is still in beta. The Woogles team cannot offer realtime tournament mode support, and we highly recommend that directors start by running small, short tournaments to familiarize themselves with the tournament mode software.**

The Director(s) are responsible for the following:
1. Setting up divisions, which allow you to split players based on your/their preferences (skill level, dictionary, time controls, challenge rule, etc.)
2. Registering players for their respective divisions
3. Setting up pairing rules and adjusting pairings as needed throughout the tournament.
4. Starting each round of the tournament
5. Any additional manual adjustments that are not covered by our tournament mode (for example, dropping players from the tournament or adjusting game scores for games where a player times out.)
6. Making sure the players know how to start tournament games, find your tournament page, and have some familiarity with Woogles.
7. Make sure the players comply with both Woogles' rules and your own rules.


{{< figure src="/blog/guides/director_tools.png" caption="Image 1: Tournament mode director’s tools: Main Screen" >}}

Before the Tournament:

1. In order to set up a division, click "Add Division." Enter a name and hit enter. You can create as many divisions as you want, but you generally want at least 4 players per division, and an even number of players are generally better than odd in order to avoid byes.


{{< figure src="/blog/guides/add_division.png" caption="Image 2: Add division" >}}

2. For each division, set tournament controls. Choose your division from the drop-down and click "Edit Game Settings". Choose the game settings that you want for that division, click "submit" and click "Save Game Settings"

{{< figure src="/blog/guides/set_controls.png" caption="Image 3: Set Tournament Controls" >}}

3. Add Players lets you add players to divisions. Select the division from the drop down that you want to add the player into, type in their woogles username, and type in a rating for them (NOTE: This rating does not have to be the user's Woogles rating. This rating is simply used to determine certain pairings. If you are not sure what to do just enter "1" for each player)

{{< figure src="/blog/guides/add_players.png" caption="Image 4: Adding players to your tournament" >}}

**Note: You can also add players during the middle of the tournament. Those players will receive forfeit losses for each round that has already passed.**

4. Remove players allows you to remove players before or during the tournament. This can be used if you erroneously added someone to the wrong division, if someone has to drop out in the middle of the tournament, or if you want to disqualify someone. Just click the player you want to remove using the dropdown and then click submit. **Note: Removing a player will not change results from past rounds. If a player is removed in the middle of a game, that player will be able to finish that game and the result will stand.**

5. Next you will need to set up pairings for your tournament. This is done on a round by round basis. 

{{< figure src="/blog/guides/set_round_controls.png" caption="Image 5: Pairings main screen" >}}

- Manual pairings are done by the director themself using "set single pairing" to pair each player in every round. This is not recommended except for the smallest of tournaments or for late rounds in medium-sized tournaments.
- Random pairings are self-explanatory. These can be useful for the first round but are not recommended beyond that.
- Swiss pairings attempt to pair players with similar records and are generally a good call for the middle rounds of your tournament. It requires additional inputs.
  - Max Desirable Repeats limits the number of times two players can play each other in the same tournament.
  - If repeat relative weight is much larger than win difference relative weight then the pairing algorithm tries very very hard to avoid repeats.
  - If repeat relative weight is much smaller than win difference relative weight then it tries very very hard to avoid pairing people with large differences in number of wins.

{{< figure src="/blog/guides/swiss_pairings.png" caption="Image 6: Swiss pairings" >}}

- Use Round Robin if you want everyone to play everyone else in the field. For example, if you have 8 players in your tournament, you can set round robin to rounds 1-7.
- Initial Fontes splits players into groups by rating, puts one player from each group into a pod, and then each pod plays a round robin. This is often used at the beginning of a large tournament before swiss pairings begin. Note: Initial fontes pairings only work for an odd number of rounds because each pod needs an even number of players.
**Note: Initial Fontes is the only pairing algorithm that cares about the ratings that you enter for each player (aside from team round robin). It will make better pairings if the users’ ratings are accurate.**
- King of the Hill pairs based on current standings: 1v2, 3v4, 5v6 and so on. King of the Hill is generally best saved for the last round of the tournament.
- Factor pairings apply specific pairing rules to the first 2N players in the standings (where N is the factor value) and pairs the rest of the players using Swiss pairings
  - A factor value of 1 pairs 1v2 and the rest of the field using swiss pairings.  
  - A factor value of 2 pairs 1v3, 2v4, and the rest of the field using swiss pairings.  
  - A factor value of 3 pairs 1v4, 2v5, 3v6 and the rest of the field using swiss pairings.  
  
  Factor pairings are best used during the penultimate round(s) of a medium/large tournament. 

- Team Round Robin puts players into teams, and then every player plays every player except for those on the same team as them. This should only be used for specific team events.

Teams need to be ranked in alternative order using tournament ratings. The highest rated player will be Team A Player 1. The 2nd highest rated player will be Team B Player 1. The 3rd highest rated player will be Team A Player 2. The 4th highest rated player will be team B player 2, and so on.

{{< figure src="/blog/guides/team_pairings.png" caption="Image 7: If a team round robin was held with these 4 players, the teams would be bnjy and woogie vs cesar and rightbehindyou." >}}

**NOTE: The pairing rules above do a good job of covering most scenarios, but there is no pairing system that can account for every possible situation. Once you start a round, you cannot change the pairings for that round, so be sure to look over the pairings and make any necessary changes before doing so, especially towards the end of the tournament.**

To give you an idea of what the pairing rules for an actual tournament look like, the following was used for a 12-round tournament with about 30 players. The pairings generally worked well, but a few things needed to be manually changed towards the end of the tournament.

{{< figure src="/blog/guides/sample_pairings.png" caption="Image 8: Sample tournament pairings" >}}

Now you have everything you need to start your tournament! When you're ready, click the "Start tournament" button. Important: Once you click "Start Tournament" or "Open Round" you cannot undo that. It should also be noted that you cannot open a round until all of the previous round’s games are complete (either by players playing the games or the director entering scores using “Set Game Result”.)

During the tournament:
In the middle of a tournament, you can change the pairings for a single round using "Set single round controls".
If you are setting up pairings for the next round, "Set single pairing" can be used to pair 2 players against each other. Please note that if those players already had opponents, then those opponents will also need to be re-paired before you can open the round.
- "Set game result" can be used to manually enter a game score if needed. For example, if a player doesn't show up for their round, you might want to set the score to 50-0 in favor of the player who showed up. Note: Check "Amendment" if there was already a completed game to amend the score of that game.

{{< figure src="/blog/guides/set_game_result.png" caption="Image 9: Setting a game result" >}}

- "Pair Entire Round" and "Unpair entire round" can be used before opening a round alongside "Set single round controls" to quickly change pairings using one of the rules described above in section 5.

General Advice:
- When in doubt, 15-20 minutes per side with 1 minute of overtime are generally good settings to use for your average tournament.
- For the last few rounds of a tournament, expect to make a few changes to the pairings before opening the round.
- Make it clear to players that they need to let a director know if they are leaving before the tournament ends.
- Directors have the right to remove any player from their tournament at any time for any reason so long as they are not acting in a discriminatory manner. If a player continues to cause trouble, or if you suspect a player of cheating but are not sure, please report them using the email conduct@woogles.io
- On the note of cheating, Woogles has an algorithm to detect and take action against cheaters. However, this has its limits. We strongly recommend setting up monitoring for all or part of your tournament if prizes are being offered. [A monitoring guide can be found here!](https://drive.google.com/file/d/1q530l-wGQtYxXi2SaAqK2-cDGa6WI7x7/view)
