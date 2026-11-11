---
title: AI-Assisted Car Configurator
eyebrow: AI & Interactive 3D · Prototype
description: An exploratory Python/OpenAI prototype connecting Jupyter Notebook to Unreal Engine over WebSockets.
order: 1
layout: project
screenshot: ""
screenshotAlt: ""
videoSrc: /videos/ai_unreal_v1.mp4
year: 2025
stack:
  - OpenAI
  - Python
  - Jupyter Notebook
  - WebSockets
  - Unreal Engine
href: https://lnkd.in/p/eHuN3Am6
linkLabel: Prototype walkthrough
---

Built a Python prototype using OpenAI in a Jupyter Notebook to explore agent-driven interaction with Unreal Engine. The notebook communicates with Unreal over WebSockets, providing control of the engine and editor through exposed functions.

The agent discovers the available configurator functions and invokes them to update the scene, translating requests such as changing the vehicle color into engine actions.

**Engineering focus:** Python/OpenAI integration, function discovery, and WebSocket communication with Unreal Engine and its editor.

**Scope and boundaries:** An exploratory prototype for investigating the interaction model. Production readiness would require explicit verification of unsupported requests, invalid arguments, failed calls, and timeouts; the demonstration alone does not establish that coverage.
