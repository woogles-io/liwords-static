---
title: Wooglevark 3000 Tourney Postmortem
date: 2025-10-26T23:04:00
authors:
  - matt,cesar
description: The Wooglevark 3000 was a stunning success! This 14 game, fully online tournament saw $3,000 in prize money handed out to winners. 53 players signed up to play in the tournament's CSW or NWL divisions.
tags:
  - tournaments
cover: /images/uploads/woogles.png
---
## Director's Report (by Matt)

The Wooglevark 3000 was a stunning success! This 14 game, fully online tournament saw $3,000 in prize money handed out to winners. 53 players signed up to play in the tournament's CSW or NWL divisions. 

The CSW division saw 8 finalists emerge from Day 1's group play. These finalists were from India, Pakistan, Thailand, Sri Lanka, Ireland, and the USA. Eventual winner Lukeman Owolabi (Ireland) took home the first prize of $600 USD. He narrowly defeated Pakistan's Waseem Khatri on point spread. 

In the NWL division, Cooper Komatsu and Mike Thelen faced off in the tournament's final round for 1st place. It is only appropriate that, in a tournament named after him and hosted in his honor, Mike (boshvark) emerged victorious. Mike's best game of the tournament came in its penultimate round, as Mike defeated Jem Burch by just 4 points to earn a berth in the tournament's championship game. 

Massive thanks go to Lukeman Owolabi and Khaleel Rahmon for managing the tournament's proctoring software and invigilators. César del Solar was also instrumental in designing a spiffy new user interface that makes monitoring through Woogles simple. Additional thanks go to Mike Thelen for his generosity in our Kickstarter days and to Ben Dweck for his philanthropy in making this tournament prize fund massive. See you at the next one!

## About the invigilation system (by César)

For the Wooglevark tournament (https://woogles.io/tournament/wooglevark1 and https://woogles.io/tournament/wooglevark2) we decided to set up an invigilation system that would be easy for directors and players to use. We hope that this methodology will make it easier for directors to set up tourneys with invigilation in the future.

Woogles invigilation mode is powered by [vdo.ninja](https://vdo.ninja), a fantastic and free piece of software that allows anyone to connect a video stream between two people. We plugged directly into them to allow sharing of screens and camera to be as seamless as possible.

### How it works

VDO works by connecting a streamer to a client - in this case, the streamer is any player and the other end of the pipe is an invigilator (or proctor) who watches to make sure the streamer isn’t cheating.

Look, we love our Wooglers. But in order to ensure everyone is playing honestly, for tournaments with prize pools it is wise to set up some sort of monitoring.

Our monitoring system requires players to share both their screen(s) and a webcam or cellphone that is pointed at them from the side. Additionally, they must turn on their sound. On the other side, invigilators can watch multiple users at once and ensure they are following the rules. 

![](/images/uploads/Screenshot%202025-10-26%20at%2011.10.43%20PM.png)

Above: A screenshot of an invigilator's view of a group of players. Red squares added for privacy for this blog post.

For a monitored tournament, we’ve put together an easy-to-follow guide built into Woogles that shows you the steps needed to make sure your video streams are properly shared. Here is a video walk through of how to set up monitoring: [https://www.youtube.com/watch?v=NY__K2cVmBI](https://www.youtube.com/watch?v=NY__K2cVmBI)

On the director side, you can view all your player streams on a director dashboard. We recommend that if your tournament has more than a small number of players, that you have multiple invigilators. Each invigilator can monitor a few streams. You can add invigilators via the Director Tools -> Manage Directors button. Adding a director and ticking the “read-only box” will add an invigilator that only has access to the monitoring dashboard.

![](/images/uploads/image%20%283%29.png)

A screenshot of the director's dashboard above. Each player has two share links for the tournament.

### Technical details

We use the vdo.ninja API and webhooks to determine when a stream has started or stopped. This directly updates a player’s streaming widget; this is a small floating widget on the bottom right of your screen during a tournament. If it’s not green, it means your stream might not be working.

When you first open the monitoring widget, the system assigns you a random stream ID. This stream ID does not get reassigned - this means you can start and stop the stream and it will remain at the same ID, making it easy for directors to monitor. One important thing is that you must follow the instructions under the “Set up monitoring” button. The QR code and stream links here are set up per user to be unique and to correspond to your predetermined stream ID. If you set up your monitoring manually, the directors will not be able to see your stream on their dashboard. We encourage invigilators to proactively message users on the platform to let them know that their streams aren’t working.

While streaming we suggest that you please do not touch the phone screen or screenshare settings until the session is over. This will make it easier for your invigilators to ensure fair play.

## In conclusion

This was a big effort, but we hope that many more online tournaments come in the future! We will continue to work on making Woogles tournament mode easy to use and the invigilation system as seamless as possible. Stay tuned for more to come!
