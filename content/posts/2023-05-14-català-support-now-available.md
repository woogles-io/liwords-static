---
title: Català support now available!
date: 2023-05-14T01:03:35.879Z
authors:
  - cesar
description: Woogles now supports playing in the Catalan language, using the
  open-source DISC2 lexicon. Read more about it here.
tags:
  - catalan
  - codecorner
cover: /images/uploads/screenshot_20230513_210741.png
---
A few months ago, Joan Montané, a Catalan
language player, [reached out to us on Github requesting Catalan language support](https://github.com/domino14/liwords/issues/1091). We get a lot of requests, and as we all have full-time jobs it is difficult to fulfill all of these. However, this request lined up perfectly with a few things we wanted to do:

- We always want to support more Wooglers around the world.
- We are trying to make the app have multi-server support to make it more scalable and easier to deploy. It so happens that adding Catalan support is an "easy" side effect of this (explained below).
- I (César) liked my visit to Barcelona

So, we started working on support for Catalan! This post documents our journey through supporting this language. It can get pretty technical at times, so reader beware! But first, how to play:

### How to play

The lexicon is internally named DISC2 and provided to us under license by Joan. Simply select the "Català" option when you make a new game; you can play against each other, the bot, or in the WordSmog variant.

If you want to type the digraph tiles, instead of dragging them to the board, the shortcuts are as follows:

- Type in `Y` for `NY`
- Type in `Q` for `QU`
- Type in `W` for `L·L`

## Technical section starts below!


### Multi-character tiles

The main difficulty with Catalan support is because of the digraphs and one trigraph in the language: `NY`, `QU`, and `L·L` are all single tiles in Catalan. All over our front-end and back-end, however, we treat the board and tiles as "strings" and "runes", or essentially, single characters. So a letter like `L·L` would read as 3 characters to our app. 

We have been working on a refactor of the Woogles codebase to make it more robust and scalable for the future (we always have big plans for growth!) and one of the biggest bottlenecks is our OMGWords game model. Currently, each game is cached in memory, and the data structure for it is very large and inefficient. This was largely because the game logic component makes very heavy use of [Macondo](https://github.com/domino14/macondo), which doubles as our AI library. Macondo is the engine behind HastyBot. The codebase was meant to be used mostly for research purposes, and is not optimized for supporting many concurrent person-vs-person games, so in back-adapting it to support the needs of Woogles, we definitely made a few hasty decisions :)

We actually have already designed the newer and better game model. It is used by the [Game Editor](https://woogles.io/editor), and it treats all tiles and the board as single binary numbers. So instead of, for example, `L·L`, that tile is treated as the number `14` everywhere in the game editor. 

Of course, what remains is to then let the entire app use this new game model. And Catalan support gave us the excuse to get started on that work faster! 

### New game model

After writing a lot of code to support this (there are many recent changes in the macondo repo and in the liwords repo), Catalan can now be played in Woogles. We haven't fully migrated to the new game model, though, instead utilizing a sort of "hybrid" approach for now. It will take some more time, but it definitely made sense to support it as it gains us a new audience of users, and it helps us test out this new hybrid model.

As an aside, the new game model is much smaller, and can be deserialized (loaded from a binary dump) in just a handful of microseconds. This means once we fully move over, we can remove our front-end caches that limit us to a single server. We can't wait!


### Code required to support these changes

There's a lot of code, written over the last few months!

- This enormous [pull request](https://github.com/domino14/macondo/pull/240/files) in Macondo lets us support a new "word graph" model, created by our team member [andy](https://woogles.io/andy). This was needed because our old word graph model encoded the alphabet into it as strings. The new model is also significantly faster and as a result Macondo sims and endgames became faster (these are not yet available on Woogles, but will be someday). There were many smaller PRs after this one that fixed various bugs/regressions that were introduced by it. We think it's all working now! Thanks also to [Josh Castellano](https://woogles.io/RightBehindYou) for helping us surface and fix a bunch of these bugs, thanks to some ingenious code he's written, which we will also surface on the Woogles analyzer someday soon.

- This [pull request](https://github.com/domino14/liwords/pull/1164/files) in liwords (Woogles' internal name) makes it possible for the backend to support bytes instead of strings for all internal events.

- And the large [pull request](https://github.com/domino14/liwords/pull/1168) that makes the front-end understand these new "binary" tiles, as well as makes Catalan support available.

- Of course, the Woogles game editor code. Although it is not fully related, there was a lot of thought put into its design, keeping multi-character languages in mind.

As you may have noted, nearly all of these changes served multiple purposes, besides adding Catalan support, we also made our app more robust, made Macondo faster, etc etc. Since we have such limited time to work on this app, it's important to try to make the best of it!


We don't yet have the app localized in Catalan, nor do we support localization yet. So all the menu options, etc will be in English. That will be another undertaking for a later day. But for now, please try out your skills against our bot and each other!

### Donations?

Your support is always welcome. You can donate to Woogles [here](https://woogles.io/donate). As a registered non-profit corporation, every bit helps with our server costs and to continue to improve the app! Thanks for your support ❤️.