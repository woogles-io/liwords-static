---
title: Using Woogles for IRL Tournaments
date: 2025-07-11T16:10:00.000Z
authors:
  - penumbra
description: A guide to using the woogles.io tournament functionality for
  face-to-face tournaments, including detailed information on various pairing
  approaches.
tags:
  - tournaments
cover: /images/uploads/screen-shot-2025-07-11-at-4.13.30-pm.png
---
[Woogles IRL Tournament Guide (PDF - open this one for all the images)](https://drive.google.com/file/d/1azb6Yy28riDB_SIaRmeWbQbJQAWCCirJ/view?usp=sharing)

[](https://drive.google.com/file/d/1azb6Yy28riDB_SIaRmeWbQbJQAWCCirJ/view?usp=sharing)The Woogles tournament functionality was originally designed for online tournament management, but it is becoming increasingly popular for “in real life” (IRL) tournaments, in which people meet face-to-face over boards, shake actual tile bags, and shuffle tiles on their racks. With that user experience in mind, the Woogles team has made modifications to the tournament tool to make it possible for directors running IRL tournaments to use it as an alternative to tsh. Along with this guide, it is recommended that you read the [guide on using Woogles for online tournaments](https://docs.google.com/document/d/1dBci_p-0wwmgmLgpReq3056p_op2wYL7BCV0Nfi00xA/edit?tab=t.0) for some information that is common to both types of tournaments.

## **Creating a Woogles tournament**

Most likely, you will need to request that a Woogles volunteer create your tournament for you. Each Woogles tournament can be used only once, so If you are planning events like monthly club tournaments, each one will need its own Woogles tournament. In cases like this, you can talk to the Woogles team about creating these yourself to simplify the process.

Use [this form](https://docs.google.com/forms/d/1UGT_icwZUO3DLDOaYUuLNl_EEAKwEEAO7TQWG2A7_vA) to request a tournament be created for you. You need to provide the Woogles username(s) of the director(s), meaning anyone involved in the computer aspects of running the tournament.  

You also need to provide a unique tournament URL that matches the name of your tournament. If you get the error message *“You tried to access a non-existing page”* when trying the URL **woogles.io/tournament/<tournament_name>**, it is unique and you can use it. One of the few times in life we are happy to get an error message 🙂.

A Woogles volunteer will create the tournament and let you know by email that it exists. Since the availability of Woogles volunteers can vary greatly, please request your tournament minimally two weeks before the tournament start date so that nobody has to stress about deadlines.

##### Director Tools

As the director of the tournament, you have access to tools on the tournament page that your players can’t see. The rest of the functionality is controlled from the director tools menu. Note that the lower sections will not appear until you have completed some of your pre-tournament settings. 

##### Modifying your tournament for IRL use

Since tournaments are by default set for online use, you need to specify that yours will be IRL. To do this, go into “Edit description and other settings” and scroll to the bottom to find this option. This is a ***one-way change***, meaning you ***cannot*** change it back. IRL tournaments will have an extra icon in the top right corner.

A Woogles tournament can be created with the game settings that you prefer, and they can be different for each division. 

##### Setting the tournament format

In order to start the tournament, you need at least two players in each division, the tournament controls set for each division (“**Set tournament controls**”, and the pairing system defined for each division (“**Set round controls**”). In both “**Set tournament controls**” and “**Set round controls**”, first select the relevant division from the dropdown at the top before making any changes.

“**Set tournament controls**” allows you to set rules for Gibsonizing, byes, etc. Also, details like lexicon and challenge rule are set inside “**Edit game settings**”. Note that even though these settings aren’t technically required for an IRL tournament because they can’t enforce any certain playing style over the IRL board, the system still requires them for now.

You also need to specify how the pairings will work. “**Set round controls**” lets you specify the pairing system by division and by round. In this example, Division CSW is paired as Swiss for the first three rounds and as King of the Hill for the next two. Clicking on the ? will give information on all the possible pairing approaches, and they are also explained below. 

## **Pairing approaches**

**Manual pairings** can be done using **"Set single pairing"** to pair each player in every round. This is not recommended except for the smallest of tournaments or for late rounds in medium-sized tournaments.

***Pairing the start of a tournament***

**Round Robin** lets each player play everyone else. For example, with eight players, rounds 1–7 can be paired this way to have no duplicates. Round Robin is a good approach for the start of a tournament, when you want to minimize repeats and have every player play a wide range of seeds. 

**Initial Fontes pairing (round robin variation)** divides the field into groups of N+1 players and pairs everyone in each group against each other. You must designate N as an **odd** number.  The grouping is created by sampling across the entire field so that each group is roughly similar by average seed. For example, Fontes with N=5 would divide the field into groups of 6 players to play a mini round robin within each group. The last group will be bigger if the field can’t be divided evenly. For example, with a field of 20 players, Fontes 5 would divide it into groups of 6, 6, and 8 players. 

**Team Round Robin** divides the field into two groups of the same size and matches each team member against every member of the other team. The division is done so that the top half by rating is one team and the bottom half is the other team. This system should be used with artificial ratings. For example, Team 1 players can be given ratings beginning with 20000 and Team 2 players can be given ratings beginning with 10000. This system would be used in team events such as a Can-Am competition or a Seattle vs. Portland club event.

***Pairing the middle of a tournament***

**Swiss pairing** attempts to pair players with similar W-L records. This format is generally useful for the middle rounds of tournaments, but it requires additional inputs:

* **Max Pairings Between Any Two Players** limits the number of times two players can play each other in the same tournament.
* **Repeat Relative Weight** (RRW) and **Win Difference Relative Weight** (WDRW) both need values between 1 and 100. If RRW is *larger* than WDRW, the pairing algorithm tries to avoid repeats, and if RRW is *smaller* than WDRW, the pairing algorithm tries to avoid pairing people with large differences in number of wins. The greater the difference between the two numbers, the greater the weight given to the higher one. For example, a RRW of 100 and a WDRW of 1 will make the algorithm very strongly avoid repeats, while a RRW of 50 and a WDRW of 50 will tell the algorithm that there is no preference. The values should not be left as 0.

***Pairing near the end of a tournament***

**Factor pairing** applies specific pairing to the top 2N players in the standings, where N is the **Factor Value** (FV). Any remaining players are paired using Swiss pairings. An FV of 1 pairs 1v2, a FV of 2 pairs 1v3 and 2v4, and a FV of 3 pairs 1v4, 2v5, and 3v6. Factor pairings (e.g., Factor 3 and Factor 2) are often used during the penultimate round(s) of a medium/large tournament.

***Pairing the final round of a tournament***

**King of the Hill** pairs based on current standings: 1v2, 3v4, 5v6, etc. KOTH is often used in the final round of a tournament.

## **Creating scorecards**

Scorecards are not required for running an IRL tournament, but players may want to use them. Also, if you print scorecards with the tournament QR code, the players will be able to input their own results data.

It’s possible that you won’t know until the start of the tournament who will be attending, or what division players will be in. These things can cause last minute changes to pairings. In circumstances like this, you can print scorecards with the QR code but without opponents/seeds. Then there is no need to reprint scoresheets if pairings are changed or a player is moved to a different division.


## **In-tournament management**


The tools in this section are available for use before the start of the tournament and during play. “**Add player**” and “**Remove player**” are used to manage your tournament participants. For IRL tournaments, the players should be added by the director instead of leaving them to self-register and check in. You can choose to include player ratings, which are required for some types of pairings and for rated tournaments. “**Set single round controls**”, “**Set single pairing**” and “**Pair entire round**” can be used to modify pairing type and individual pairings during the tournament. See more about this in the section below on running the tournament.

“**Set game result**” is where you enter the results from the IRL games played. Be sure to collect all the information from your players, either with a results slip turned in at the end of the round or via a QR code that you provide to them to enter their own results. If you have pre-paired rounds (e.g., round robin), you don’t need to enter the game results before the players start their next game (rolling starts), but all the results must be entered before opening the next round in Woogles (see more about this in the section below on running the tournament). Of course, if your pairing type requires knowledge of the results (e.g., KOTH), all results must be entered before pairing.

## **Running the tournament**

Once all the pre-tournament settings are completed, click “**Start tournament**” at the top of the Director’s Tools tab to begin. Note that once you click “**Start tournament**”, you cannot undo it without erasing all the tournament game data.  An “**Unstart tournament**” button exists but it is strongly recommended that it not be used unless your players are willing to replay all their games.

Starting the tournament automatically opens Round 1. For later rounds, click “Open Round \[#]” at the top of the Games tab (the round numbers are shown at the bottom of the tab). Once a round is opened, it cannot be undone. 

Note that a round will not open unless all of the previous round’s games are complete. For an IRL tournament, this means that the game results are entered, either by the director using “**Set game result**” or the players entering their results using the QR code.  

If needed, you can change the pairing system for a single round during the tournament by using “**Unpair entire round**” and “**Set single round controls**”. For example, you might decide you want Swiss pairing rather than Round Robin for later rounds of a tournament. Once the changes have been made, use "**Pair entire round**" to activate the new pairing before opening that round. 

If needed, "**Set single pairing**" can be used to manually pair two players. Note that if those players already had opponents, those opponents will also need to be re-paired before the round can be opened. This might be useful if new players join late, if players are unhappy about repeats, or if someone has volunteered to take a bye.

If needed, "**Set game result**" can be used to manually enter a game score. For example, if one player doesn't show up for a game, you might want to set the score to 50-0 in favor of the player who was there. Note that you should check "**Amendment**" if there was already a completed game for those players in that round.

**When the tournament is over**

After all rounds are played, the final standings will appear in the Standings tab. The “**Export tournament**” button lets you export the tournament data in two different file formats. One is a standard .csv file that can be imported into any spreadsheet tool.  The other is a .tsh file that can be sent to NASPA or WGPO for official tournament rating (the tournament should be approved in advance).

**\* \* ***

If you are interested in directing an IRL tournament and have more questions, the Woogles team is always available to help by email [woogles@woogles.io](mailto:woogles@woogles.io) and the members of the [Woogles Discord server](https://discord.com/invite/GqkUqA7ENm) can also provide information from their own experience. There is a link to the Discord server from the Announcements section on the right hand side of the Woogles main page. 

We also want to hear from you about your experience using the Woogles IRL tournament tool. After designing IRL mode for Woogles tournaments, César directed a small tournament using the tool and [wrote a blog post about it](https://blog.woogles.io/posts/2023-04-02-running-an-irl-tournament-with-woogles-tournament-mode/), but the tool is still in development and user input is very useful!
