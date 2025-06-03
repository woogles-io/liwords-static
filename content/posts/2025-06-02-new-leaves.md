---
title: Wake up babe, new leaves just dropped
date: 2025-06-02T09:00:00.000Z
authors:
  - cesar
description: We recently updated the leaves for both NWL23 and CSW24, with more to come in the future. Read more about our new, more accurate methodology here!
tags:
  - BestBot
  - Macondo
cover: /images/newleaves/ewvowels.png
---

**Why BestBot Just Stopped Hoarding Vowels: A Quick History of Woogles’ Leave Values**

---

### 1. Why leaves matter (see the analyzer screenshot)

![](/images/newleaves/analyzer.png)

This screenshot shows a "static" analysis for a move in a game, using OLD leave values.


Our analyzer lists **LEW** at 5K as the winning play: it *scores* 26 points but has a *valuation* of **35.80**.
That extra 9.80 points is the **leave value** of the rack you keep—**A I N T**—because those four tiles make it far easier to bingo next turn.

A few lines down, **(G)ELT** scores 29 points yet its valuation drops to **27.94**. The difference is the leave **A I N W**, worth **–1.06 points**. Good players (and good bots) will often give up raw points now to hold a stronger leave for later; that trade-off is the heart of high-level Scrabble strategy.

It takes a lot of practice to internalize raw leave values in order to be able to accurately make calculations like this over the board. It is good practice to try to approximate your leave values within a couple of points for different candidate plays. Try it!

Equity is only part of the puzzle. A bot that single-mindedly chases valuation - HastyBot, for instance - can be fearsome, but a top-tier engine like BestBot weaves equity into a wider strategic fabric.

---

### 2. Our first-generation values (2019)

Back in 2019 we trained a set of leave values that beat Quackle’s classic numbers **50.6 %** of the time. The only quirk: they *loved* vowels—**I** was positive, **AEI** was positive, almost everything with two + vowels looked better than experienced humans believed. Each time we tried to drag those vowel scores down, the bot got weaker, so we chalked it up to “AI magic” and moved on.

We iterated on the basic algorithm for a bit, changing the smoothing formulae and so on, and got some incremental improvements, especially on the under-represented leaves. Still, the bot's stubborn vowel love remained.


---

### 3. A fresh approach (2025)

In January 2025 Gilles from Ortograf popped into our Discord and showed us a new way to compute leave values from scratch:

1. Play tons of plausible games (no greedy bots).

2. Snapshot the board once a quarter of the bag is gone, sample low-probability 13-tile leftovers, every couple of turns, and enumerate every 7-tile rack you could draw.

3. Find each rack’s best move (points + current leave value), log the rack and its evaluation.

4. Aggregate across all racks to compute an overall average score.

5. Back-propagate those scores to every possible leave, weighted by how often that leave occurs.

6. Repeat until convergence. Voilà - objective leave values!


#### MAGPIE Takes Flight

The idea was re-implemented in an open-source C tool called MAGPIE. MAGPIE was started by Woogles founding team member Josh Castellano as a faster rewrite of Macondo, and has since added more features. It's MUCH faster than Macondo, and one day we will move the bots and analyzer over to use it. It'll be great! See [MAGPIE repo](https://github.com/jvc56/MAGPIE) for more info about this project.

Josh's implementation of this basic algorithm evolves leave tables through six generations, each pitting 200 million game pairs against the previous best. Running the full cycle on a beefy workstation takes several days, but the payoff is sweet!

---

### 4. What actually changed (CSW24 values below, but NWL23 values changed in very similar ways)

We show that the new leaves beat Macondo leaves 50.4% of the time, and a few representative leaves.

| Metric                               | Old → New           |
| ------------------------------------ | ------------------- |
| Head-to-head win rate vs. old values | **50.0 → 50.4 %**   |
| **A** leave value                    | +1.57  →  **-0.38** |
| **E** leave value                    | +2.68  → **0.85**   |
| **I** leave value                    | +0.89 → **-2.21**   |
| **O** leave value                    | -1.02 → **-2.48**   |
| **U** leave value                    | -3.82 → **-5.11**   |
| **AEI** leave value                  | +3.03 → **-4.72**   |
| **ERS** leave value                  | +16.96 → **17.93**  |

Two takeaways: (1) the new set wins four extra games per thousand, and (2) vowels finally get the skepticism they deserve.

As a side note, a lot of the leaves we spot-checked (like ERS, etc) just seemed more _accurate_.

#### Upgraded leave values from example above

![](/images/newleaves/analyzer_after.png)


---

### 5. What this means for you

- **BestBot & Analyzer upgraded** – Our flagship bot and the in-browser analyzer now use the new leave set for NWL23 and CSW24. Expect slightly sharper play and saner vowel handling.

- **No more vowel inflation** – If you’ve grown used to BestBot snap-keeping AEI, brace yourself. The bot will now shed surplus vowels the way seasoned humans do.

- **Better practice feedback** – When you run post-game analysis, the leave scores will better match real-world experience, making “Why was that play bad?” a lot more intuitive.

If you want to play around with the new leaves, you can always download them from our open source repos, but in encoded (klv2) format. But easier than that, Seth Lipkin of cross-tables.com has kindly built a tool to explore them here: [https://www.cross-tables.com/leaves.php](https://www.cross-tables.com/leaves.php). Enter your rack and select CSW24 or NWL23.

### Thanks & Next Steps

Huge shout-out to Gilles for the inspiration, and to Josh Castellano for his hard work in re-implementing his algorithm. We believe these leaves are the definitively best leaves out there!

And by the way, sorry if we inadvertently taught you wrong lessons about vowels! Let's please go back to the time when vowels were frenemies.
