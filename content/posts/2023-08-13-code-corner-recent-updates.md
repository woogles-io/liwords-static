---
title: Code Corner - recent updates
date: 2023-08-13T18:15:43.879Z
authors:
  - cesar
description: We update the Woogles app regularly. We'll begin to post more about
  these updates in the blog to keep our readers informed.
tags:
  - codecorner
cover: /images/uploads/screenshot-2023-08-13-at-2.18.36-pm.png
---
You may have seen the above image at times when playing on Woogles. If you do, it means we have updated the front end code; you can refresh whenever you want (even in the middle of a game - don't worry, nothing bad will happen!)

We are always working on improving the app. In the last month, we've made a few small fixes:

* <https://github.com/domino14/liwords/pull/1180> - we run `npm audit` every few weeks to make sure our front-end libraries are up to date and not vulnerable. We take security seriously at Woogles!
* <https://github.com/domino14/liwords/pull/1188> - one of our contributors fixed a bug where an annotated game was unable to be deleted if it had comments on it. Note that this only applied to annotated games that were in progress and not completed. At this time you can't delete annotated games that have already been completed, but we will likely fix this in the future.
* <https://github.com/domino14/liwords/pull/1189> - we fixed a gnarly race condition that made it so the bot could sometimes make a player's move for them. Oops! This happened very rarely and only if your connection was spotty and you happened to make a move at the same time as you were getting reconnected. If you see this bug again, please let us know.
* a few other small library fixes and updates.

If you want to write code for Woogles, our codebase is open source and open to contributions. Please check out <https://github.com/domino14/liwords> to see how to set up your own development environment and get started contributing. We use the Go programming language for the backend (a very easy-to-learn and fast language developed by Google), and Typescript with React for the frontend. You can also join the Woogles.io [Discord](https://discord.gg/GqkUqA7ENm) group to coordinate.

We are working on several new exciting features for the next few months:

- Advanced game analysis right in the web browser, with Monte Carlo simulation, endgame, pre-endgame, and inference engines. You will be able to use this analyzer in your Woogles games as well as real-life games.
- The ability to play a Grandmaster Bot, which will use our latest [Artificial Intelligence](https://github.com/domino14/macondo) to make its moves.
- Improvements to our tournament engine, to make it easier for anyone to run tournaments.
- A lot of other stability fixes and updates to the app to make it more scalable and faster.

Please stay tuned and Woogle on!