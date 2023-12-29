---
title: IRL Tournaments and automated score entry
date: 2023-12-29
authors:
  - cesar
description: I made improvements to the IRL tournament experience and ran a successful tournament in Montclair, NJ using Woogles tournament mode. Read more to see these new improvements.
tags:
  - tournaments
  - codecorner
cover: /images/uploads/scoresheet-qrcode.png
---

I ran another IRL tournament (in-real-life, in other words, using physical boards) using the Woogles tournament mode yesterday at a diner in upper Montclair, NJ. It was on a Thursday and limited to 16 people; in the end, we ended up getting 14 people including https://woogles.io/profile/josh, current North American champion!

I wrote a bit a few months ago about running an IRL tourney with Woogles https://blog.woogles.io/posts/2023-04-02-running-an-irl-tournament-with-woogles-tournament-mode/.

For this tournament, although the rating range was wide, Jay convinced me to make a single division and award class prizes and biggest upsets. I always prefer open tournaments myself, but was worried others wouldn't. But it seems like everyone liked getting a crack at the top players, and indeed there were many upsets!

See final pairings and standings here: https://woogles.io/tournament/merry2023 (I won in an insane final game, will annotate later).

### Directing

With our tournament mode, directing is a breeze, but prior to the tournament, I hacked for a couple of days on something to make it super seamless for everyone who played. Lately some major tournaments have started using a more hybrid way of entering scores; instead of the standard score slips, people scan QR codes on their scoresheets or nametags. These lead to a form where they can enter the round and score. I believe some fields are pre-filled for them; for example, their player numbers. The form is usually a Google form, which then submits data to a spreadsheet. The data entry staff now no longer has to copy scores from hundreds of score slips; they can directly enter their scores from the Google spreadsheet into TSH (one of the standard tournament management softwares).

My thought was to integrate the QR codes directly into the tournament management software. Since our tournament mode already has pairings and standings, as well as the current round, the QR code could lead to a page that already knows the round number, who you are playing, and who is going first or second. So I put something together during the first half of a rare week off from work:

![](/images/uploads/scoresheet-qrcode.png)

The above image shows a unique QR code for every tournament attendee, printed on their
scorecards.

![](/images/uploads/score-entry-form.png)

The QR code goes to a link on Woogles that lets the player enter their score for the current
round. It also tells them who they're playing and whether they're going first or second.

Once a player submits the score, it immediately gets placed into the list of scores for that round, and it allows the player to view the scores and standings right on their phone. It seemed to be very intuitive; I did not get a single question on how to use it. It was relieving to see that after my first game there were already several entered scores for that round!

![](/images/uploads/score-entry-scores.png)

You can click on the Standings tab at any time to see the current standings

![](/images/uploads/score-entry-standings.JPG)

Note that once a player submits a score, the score is "final" for that round. If there is a disagreement, it tells the player to contact a director. As a director, you can use the regular Woogles director tools to correct the score - simply enter a new score for that game (Set game result button in Director Tools) and check the "Amendment" switch.

### Pairing system

My only work as a director was to set up the pairing scheme ahead of time. Since there were 14 people of varying skill levels, and we were a bit optimistic with how long the tournament would take to run, I wanted to prepair as many rounds as possible and still make it fair. So I chose Fontes pairings for the first 5 rounds, Swiss for rounds 6 and 7, and a standard KOTH (King of the Hill) for round 8.

#### A quick explanation on these pairing modes:

**Fontes pairings** split up the group into small subgroups. One may be familiar with the quads system used at US Nationals, that is simply Fontes 3. You play a mini round-robin with your quad to begin the tournament; similarly I used Fontes 5 for this tournament, which split up the tourney into a group of 6 and a group of 8. These groups are spaced out evenly to include a wide rating range, and then you play a round robin with your group (in the case of the group of 8, it is a partial round robin). Maybe 5 wasn't fantastic since by the end there were some big mismatches in records, but it was probably OK.

**Swiss** just pairs people according to how they're doing in the tournament. Players with similar records get matched together. I tried to lessen repeats to make it more fun. Swiss is used very commonly.

Then **KOTH** is just standard 1v2, 3v4, 5v6, etc. It's typical to use this for the last round of the tournament. Some tournaments like Causeway had EVERY round be KOTH!

Well, there's a couple other things to do as director: manually verify the pairings look OK, click the Start Round button after every round (a future version of our tournament mode might allow people to play future round games early or to pre-pair Swiss a couple of rounds in advance?). Also award fun prizes and run the calculate upsets script (included in tourneypdf, see below).

### tourneypdf

I made some edits to the open-source `tourneypdf` software (Just as a reminder, Woogles is also open source!). `tourneypdf` can be found here: https://github.com/domino14/tourneypdf. I added the ability to generate a QR code for every player, and just made the code base a bit more robust. `tourneypdf` hooks up directly to Woogles tournament mode and generates PDF scorecards for every player; you can print these out ahead of time for your players with prepaired rounds printed right on them. Since I was terrified someone would drop out, I also printed out scorecards without the prepaired rounds. But if you have a printer on-site, you can just quickly print out scorecards right before the tournament. Heck, you might not even need scorecards, but it's a nice memento for players to have something physical to keep track of their games. Plus you need somewhere to put the QR code...

### Submit to NASPA

The tournament mode can export the tournament to a .tsh file which is compatible with NASPA's tournament submission format. The only change I had to make is to remove the accent from my first name. #latinorepression #anglocentrism

The tournament mode can also export to .csv and you can do with the spreadsheet whatever you'd like. I've heard some requests for AUPair format; if anyone wants to implement it please let me know and I can guide you to the right parts of the code. I'm not sure when I can get to it.

### Future

We would like to make the software even more seamless; perhaps Woogles can be an installable app. Then you'd only have to scan the QR code once and just open the app after every round. Technically right now if you just open your default web browser at the end of your game, the link should load the right round and score entry form, but it sometimes seems easier to just scan the QR code after every round.

We also need to add a few improvements to our tournament mode, like allowing games to be played outside of the current round, add Josh Castellano and Matt O'Connor's new pairing scheme (used at Word Cup and a few other tournaments), and implement Conrad's better designs for the director tools.

What we have now though should be usable for anyone who is curious and wants to try running an IRL tournament with automatic scorekeeping and standings. One of the best things was that I didn't even need a computer to run this tournament, it was all on my phone!