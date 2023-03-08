+++
title = "How to use Woogles.io's various secret features"
date = "2021-04-11"
authors = ["cesar", "andy"]
description = "We have a number of secret features that you can enable in your settings menu. This guide shows you a bit more information about these."
tags = ["secrets"]
+++

There are a number of features that Woogles supports that we have not yet exposed to everyone yet. We will, at some point.

## Keyboard shortcuts

We have a number of keyboard shortcuts, especially handy for blitz. They are as follows:

- double-click resign, pass, challenge button (no need to confirm these actions with double-click)
- 22=pass 33=challenge 4=exchange
- when exchanging, press - to toggle the tiles selected. for example, type 4 E - Enter to exchange 6 and keep E.
- $=exchange all tiles
- down=reset rack
- up=shuffle
- left/right=toggle arrow direction
- space=move arrow forward
- backspace=delete and move arrow backward

### Examiner shortcuts

(Experimental. Some of these keys may be reassigned in future.)
- first = `<` or Home
- prev = `,` or PgUp
- next = `.` or PgDn
- last = `>` or End
- analyze = `/` or `?`
- done = Esc

## Simultaneous games

While in a game, go to the main lobby on a new tab (middle-click the "Back to Lobby" link). On the PLAY tab, you'll find a button labeled "Resume your game with (opponent)".

Click the "Ignore" link above this button. Now you can start more games simultaneously.

However, please note that timers continue to run.

It is recommended that you have all your games open in different tabs, and that you pay attention to the asterisk on the tab titles (denoting it's your turn) and/or whitelist the site for sounds. Note that sounds may not play until you click somewhere in each tab.

<details>
<summary>How to do tabbed browsing effectively?</summary>

This is browser-specific. Try these to find out which keys your browser supports:

- open a link in new tab: Cmd+click (Mac), Ctrl+click (Windows), or click the link with the middle mouse button
- switch to next/previous tab: Ctrl+Tab/Ctrl+Shift+Tab, Ctrl+PgDn/Ctrl+PgUp, Cmd+Option+Right/Cmd+Option+Left, Cmd+Shift+}/Cmd+Shift+{
- switch to specific tab: Cmd+1 to Cmd+8 (Mac), Ctrl+1 to Ctrl+8 (Windows)
- switch to last tab: Cmd+9 (Mac), Ctrl+9 (Windows)
- close current tab: Ctrl+w, Ctrl+F4, or click the tab title with the middle mouse button
- reopen last closed tab: Ctrl+Shift+T (Windows), Cmd+Shift+T (Mac)
</details>

## Telestrator

You can draw on the Woogles board! For now, this feature is hidden. This is how you enable it.

1) Open your Settings (On the top right of your Woogles window, hover on your name and click the Settings option)
2) Select the Secret features menu, and click on the switch labeled Telestrator to enable it.
3) Refresh your Woogles page
4) Now, you can use the telestrator:

- Focus on the board (click on it), then press 0 (zero), then:

```
0 = Toggle drawing on/off
U = Undo
W = Wipe

F = Freehand mode
L = Line mode
A = Arrow mode
Q = Quadrangle mode
C = Circle mode

S = Snap (does not affect freehand)
D = Do not snap

R = Red pen
G = Green pen
B = Blue pen
Y = Yellow pen
E = Eraser
```

So, for example:
Every command begins with a 0. Let's say you want to draw some stuff during your game, while streaming.

1) After enabling stuff above, type in 00 in your board. This turns on the telestrator. You only have to type in 00 once, to turn it on! 

2) If you want to draw a blue line, then do 0B and then draw with your RIGHT mouse button. You can wipe the drawing with 0W, and you can turn off the drawing by pressing 00 again.

0U undoes your last line, 0E lets you erase with the right mouse button, etc.

3) If you join a new game, you have to turn on the telestrator again by typing in 00.

4) You only have to enable the Telestrator once per web browser. It'll remember that you turned it on when you come back to Woogles in the future. However if you cleared your browser data or can't get it to work for some reason try steps 1-3 above again.

You can see an example video of the telestrator here: https://www.twitch.tv/wanderer15/clip/SlipperySmokyPlumberRlyTho?filter=clips&range=30d&sort=time

5) You can draw shapes too. This feature is experimental, check back here for updated shortcuts.
- To draw lines, arrows, quadrangles (rectangles), and circles (ellipses), type 0L, 0A, 0Q, 0C. Then draw with your right mouse button. To switch back to freehand mode, type 0F.
- Shapes snap to the board grid. If you want to draw the shapes anywhere, you can type 0D for do-not-snap, and 0S to reactivate snap.

## CEL

If you want to play with an English Common Word Lexicon, you 
must have all lexicons enabled (go to Settings, select Preferences on the menu on the left, and click on the "Enable All Lexicons" slider).

Now you can play a very small dictionary of only common words. This dictionary is subject to change at any time as we experiment with it.

You can find the word list here: [https://github.com/Fj00/CEL](https://github.com/Fj00/CEL)

## Blindfold Mode

If you want to play with Blindfold Mode enabled, go to Settings, then Secret Features, and enable Blindfold Mode.

Now, you can use Blindfold Mode. Focus on the board (click on it, though the board should be in focus when the game starts), then press ';' (semicolon). This will denote the start of the blindfold command. To denote the end of a command, press the 'Return' key. After the 'Return' key is pressed, the command will be executed (if there is an action to perform) and read using Text-to-Speech (TTS). The available commands are:

```
<column_name><row_name> = Places the arrow in a vertical orientation at the given coordinates and says the coordinates
<row_name><column_name> = Places the arrow in a horizontal orientation at the given coordinates and says the coordinates
B = Says the number of unseen tiles and then says the unseen tiles
B<letter> = Says the number of unseen <letter> tiles and then says the tile. For blanks, use the '.' character.
C = Says the play made one turn ago
E = Opens the exchange modal and says that it opened the exchange modal
N = Toggles NATO Phonetic Alphabet Code Word pronunciations for all spoken letters
P = Says the play made two turns ago
R = Says the player's rack
S = Says the current score for both players, spoken as "<your score> to <opponent score>" (your score is always spoken first).
T = Says the current time for both players, spoken as "<your time> to <opponent time>" (your time is always spoken first).
W = Says whose turn it is
PASS = Passes your turn
CHAL = Challenges your opponent's play
L = Says all of the above commands
```

Any invalid commands will result in TTS saying "invalid command". Blindfold Mode requires TTS capabilities to work, which might not be functional on certain browsers (such as Chromium).

## Word Smog

Word Smog is our first OMGWords variant. You may notice that Word Smog and OMGWords are anagrams. The rules of Word Smog are the same as those of OMGWords as far as scoring is concerned; the only difference is that in Word Smog, all anagrams of valid words are valid plays. For example, since QAT is a valid play in OMGWords, the letter strings `AQT`, `TAQ`, `QTA`, `ATQ`, and `TQA` are all valid plays in Word Smog.

This greatly increases your potential for scoring, and long words are very common. It is a great way to practice anagramming as well, and games can be very deeply strategic!

You can enable Word Smog in the Secret Settings menu. This will give you a new "Variant" dropdown whenever you request a game.

When you challenge a play in Word Smog, the challenge is automatically adjudicated by checking all the formed letter strings. For example, if you played `ATQ` and your opponent challenges, the challenge would automatically go in your favor. If you played `AQX` you would lose your turn, as there is no valid word in that letter string.