---
title: Using the one step full game analyzer in Woogles
date: 2026-04-29T23:00:00
authors:
  - porch_microwave
description: Part 2 of a 2-part post showing how to use the new analyzer feature.
tags:
  - analyzer
  - macondo
  - woogles
cover: /images/uploads/computer-analysis-3.png
---

In my [previous post](/posts/2026-04-09-full-game-analyzer) I showed how to analyze a game using Macondo. There is another option which is to do the same analysis directly in Woogles (keep in mind that while you can do unlimited analyses in Macondo, you are limited to five Woogles game analyses per day). However, Woogles may still be a better option if you are not as comfortable with the terminal-based Macondo.

We will again be looking at game 3 of the 2025 WESPAC finals between Nigel Richards and Adam Logan. I added this as an annotated game (you can create these with the [Woogles Editor](https://woogles.io/editor)). Most of time you will be analyzing Woogles games, in which case you can simply open up any completed game and the same process applies.

https://woogles.io/anno/iDaHEXDofreQ6FEkoZtdGM?turn=1
After selecting “Analyze” in the examiner window in the bottom left you will see a button with a computer icon. Clicking this button will request analysis.

![Clicking Computer Analysis button](/images/uploads/computer-analysis-1.png)


Now you simply need to wait for the analysis to complete. It should take a few minutes. You can navigate away from the page and come back to it later. Once it’s complete, the computer button will turn blue – just click on it.

Here is the analyzer for the first move. At the bottom, be sure to note the overall Mistake Index and ELO rating, which were discussed in the last post. You can see it gives the same result as what we found via Macondo.

![Viewing Computer Analysis results](/images/uploads/computer-analysis-2.png)

At this point, you simply go through the moves as usual. For each turn, a score of optimal, small, medium or large will again appear. The actual play and the top options as a result of simulation will appear in the analyzer window. Note that if at any time you want to go back to the static evaluation, simply click on “static analyzer” at the top. Click on the computer button again to return to the simulation analysis.

Given the players involved, most moves are unsurprisingly optimal. For one that is not, consider this move:

![SUBOPTIMAL](/images/uploads/computer-analysis-3.png)

You can see the best play of `WIT(H) D12` listed, and that the difference in win % between that play and Adam’s play of `(Z)ITI 13H` is a mere -0.4%, hence this is categorized as a “small” mistake. Note that if you want to see a similar detailed output of each move in Macondo, simply go to the turn in question and use the command

`sim -plies 5 -stop 99`

As a note, this will also let you use inference if you like. Like the Macondo analyzer tool, the Woogles analyzer tool does not use inference at this time. See `help infer` in Macondo for more information.

## Editor's note

### How are these analyses being run?

Glad you asked! Analysis relies on volunteer computer power from awesome Wooglers like yourself.

![alt text](/images/uploads/analysis-dashboard.png)

We've created over 30K game analyses to date! Thank you to our awesome volunteers.

If you want to contribute your computer power, you will get 20 game analyses per day instead of 5! Simply [download the latest version of Macondo](https://github.com/domino14/macondo/releases), then run `help volunteer` inside it for instructions.