---
title: DCS Autonomous Aircraft
eyebrow: Autonomous Flight
description: Autonomous takeoff, waypoint navigation, and landing for the F-16 and Su-25 in DCS.
order: 2
layout: project
screenshot: /images/dcs.jpg
screenshotAlt: ""
videoUrl: ""
year: 2026
stack:
  - Lunara
  - Zig
  - Telion
  - Mission Control
  - Docker
href: https://lnkd.in/p/eZtJkspG
linkLabel: Linkedin Post
---

Flight firmware using my DSL, Lunara, for autonomous takeoff, waypoint navigation, and landing of the F-16 and Su-25 in DCS. Telion streams telemetry to Mission Dashboard and relays commands back to the aircraft.
The logic with Lunara was coded by an AI Agent, one of the aims of the language itself, to be fault aware and enforce a lot of its constraints, like not using the heap, at compile time to give the agent a way to program and test until it compiles correctly.
