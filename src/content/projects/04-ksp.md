---
title: KSP Telemetry & Control
eyebrow: Flight Control & Simulation
description: Live flight telemetry and vehicle commands connecting Kerbal Space Program to a web dashboard.
order: 2
layout: project
screenshot: "/images/ksp_launch_01.jpg"
screenshotAlt: A rocket launch in Kerbal Space Program
videoUrl: ""
stack:
  - Zig
  - Python
  - Bun
  - Docker
href: https://lnkd.in/p/eTCQHC_c
linkLabel: Linkedin Post
---

Connected Kerbal Space Program to a telemetry backend and browser dashboard. A Python bridge reads flight data through kRPC, the Zig backend distributes telemetry, and the dashboard visualizes the vehicle state. Commands travel back through the bridge to KSP.

**Focus:** simulator integration, telemetry transport, and bidirectional vehicle control.
