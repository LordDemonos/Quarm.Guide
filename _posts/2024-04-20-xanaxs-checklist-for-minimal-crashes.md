---
date: 2024-04-20
title: "Xanax's Checklist for Minimal Crashes in Project Quarm"
description: "Discover Xanax's checklist to minimize crashes in Project Quarm, including tips on configurations, dgVoodoo fixes, and compatibility settings."
keywords: 'Project Quarm, Quarm, EverQuest, crash fixes, dgVoodoo, compatibility settings, TAKP, Zeal, DirectX 9c'
author: 'Xanax'
published: true
sitemap: true
---

## Xanax's Checklist for Minimal Crashes

I started this because half of my guild seems to crash when they zone in and out of the planes. Everyone is on different pieces and versions of this game. Meanwhile I've thrown most of this configuration into 3 different game folders and they all work well, only crashing occasionally when I drop to character select, or if I change my audio output source. 6/15 Update: I think my configuration has only gotten more stable. I haven't crashed at character select in a long while. My mule's client is closed when I get home from work maybe once every other week (could be server restart idk). I notice when I duplicate my install folder and user it the first few times it crashes logging into character select or server, like it needs to build a stable cache or something. After about 3 sessions it seems quite stable, used it all day. Still updating to the latest Zeal whenever it's released. Here's what I'm using:

1. [2.2 version](https://drive.google.com/file/d/1qoBktDeJMJKPBr-EZxub1vspJhz11i1y) of TAKP.
2. [.dll from 3/1 in #zeal-discussions](https://discord.com/channels/1133452007412334643/1210670176077348934/1227704216655761499) still has the smoothest camera. For some reason 5/6 from #server-files makes my third person camera unstable again. I assume the older dll was just re-compressed and put into a new Discord post is all.
3. [Excluded TAKP folder from antivirus](https://quarm.guide/installing-the-game#prerequisite-2-required-excluding-your-takp-installation) scanning.
4. Always running the [latest Zeal](https://github.com/iamclint/Zeal/releases) unless it contains a specific bug I want to avoid. Always keep previous versions backed up.
5. TAKP folder is NOT in your `/Program Files/` or `/Program Files x86/` folder. Mine is located in the root of my D: drive.
6. [Latest version of dgVoodoo](http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/) and configuring it properly.
7. [Directx 9c](https://www.microsoft.com/en-us/download/details.aspx?id=8109) (Windows said I had a newer version of [Visual C](https://www.microsoft.com/en-us/download/details.aspx?id=53587) already installed, so I didnt download the one in the guide.)
8. Running program in compatibility mode for Windows XP (Service Pack 2). (Running as Admin increases my crashes, but has the opposite effect for others)
9. Also running several muted sound files, [EQ Basic 1.1](https://www.reddit.com/r/project1999/comments/10rz5r0/eq_basic_v11_an_eq_graphics_overhaul_project/), [KaichoFX Spell Effects](https://www.reddit.com/r/ProjectQuarm/comments/17h98xq/comment/k6prhur/), [Nillipuss UI 1440p](https://github.com/NilliP/NillipussUI_1440p), and the game looks absolutely amazing!

If you ask me, 2 & 3 are the biggest contributors to stability. 5 will likely cause a ton of issues I'm told. A lot of people seem to need the dgVoodoo fix though, especially if they have integrated graphics, so thats also important. People swear by 9 as well. There's a lot of little things you can try and tweak for whats right for your system. Hopefully we can lessen these crashes and work towards fixing the rest over time.
