---
title: Running an IRL tournament with Woogles tournament mode
date: 2023-04-02T12:58:28.018Z
authors:
  - cesar
description: I ran a real-life tournament using Woogles tournament mode. While
  we're still making tweaks to make it ready for prime-time, things worked out
  great! Plus we built some scripts to automatically generate scorecards for our
  players.
tags:
  - tournaments
  - codecorner
cover: /images/uploads/players.png
---
I directed and played in a [live Scrabble tournament in Teaneck, NJ yesterday](https://www.cross-tables.com/tourney.php?tourneyid=11402), at [jlevedit](https://woogles.io/profile/jlevedit)'s house. I always like using Woogles tournament mode to direct tournaments, since I am already very used to it. 

You can see the tournament pairings and standings here, which I updated live during the tournament: <https://woogles.io/tournament/teaneckapril>

### IRL mode

![](/images/uploads/img_4595.jpg)



Woogles supports an IRL mode for tournaments. This is an experimental feature, but a few other directors have already tried it out. It lets you register real people's names as you can see in the link above. They don't need to have a Woogles ID. The games they played are not going to be on Woogles, but that's OK - we are using Woogles for the record-keeping and pairing system and it works pretty well!

For this 10-player 7-game tournament, we wanted to be done quickly. I wanted to get back home in time for dinner with my lovely [wife](https://woogles.io/profile/vhyacinth) and baby boy, and another player had a Springsteen concert to attend in NYC. I decided to pre-pair the first 5 rounds. 

![](/images/uploads/screenshot-2023-04-02-at-1.27.31-pm.png)

You can see the pairing system I used above for this. For the first 5 rounds, I used Team Round Robin pairings. This is a little-known pairing system that we used for the [online Can-Am championship](https://woogles.io/tournament/vcanam). Simply speaking, it splits the group into odds and evens, and pairs all the odd players against all the even players in a round robin fashion. If you use this for a team tournament, you have to make sure you alternate your team member "ratings" when you add them; you can use fake ratings for these. 

For our purposes, I just used every player's real [NASPA](https://www.scrabbleplayers.org) rating, and let the team round robin pairings do the rest. This pre-pairs the first 5 rounds in a fairly fair fashion.

For round 6, I used Factor 2 pairings: 1v3 and 2v4. The rest of the field is paired Swiss and minimizes repeats.

For round 7, it is straight KOTH: 1v2, 3v4, 5v6, etc.

### Scorecards

I've always found the beginning of a tournament stressful, as a director. I have to get everyone their pairings so we can start on time, but when you are pre-pairing people you also need to have a sheet showing which player numbers are which. I could have them look directly at the Woogles tournament page on their phones, and we will eventually get to this scenario, but I think we may want a more dedicated IRL tournament app for this. 

Some directors write or print their first few pairings as well. I find this to be a little nicer, and I wanted to do something similar. So I wrote a quick Python script to generate scorecards for people! You can see an example of this in the first screenshot above. Two scorecards can fit to a page, and I was able to print these on my home printer. 

The script calls the Woogles tournament API, and takes as arguments the tournament ID (which you can find in director tools) and the division name. Right now, it is very hard-coded for this particular tournament: it generates only 7-round tournament scorecards. But if anyone wants to contribute and make it more generic, please feel free! It is open source, like almost everything I write :)

See the Github repo here: <https://github.com/domino14/tourneypdf>

I also added a very quick stats script that I hacked together right after the end of Rounds 6 and 7, in order to compute the biggest "upset", since we had a prize for this.

### Collecting scores

In order to keep the tournament running fast, I also have people turn in physical score slips at the end of every round, into a little cup we put by the challenge computer. You can download and print some tally slips here: <http://www.poslarchive.com/math/scrabble/paper/>.

This is another thing that a complete IRL tournament mode can help with; if people can submit scores via their phones or computers it would be faster and better for the environment! But for now, this worked OK. After 3 rounds, we had lunch and I entered all the scores into the Woogles interface. Then I entered them again after every round. It was only 5 tally slips per round so it was not too bad. At the end of round 5 I announced the round 6 pairings, and similarly for the end of round 6. 

We were able to finish and award prizes by around 5:10 pm; not bad for a 7-game tourney with lunch, starting at 10 am. And best of all, I was able to get back in time to which up a tasty shrimp curry and enjoy having dinner with my family!

![](/images/uploads/img_4598.jpeg)