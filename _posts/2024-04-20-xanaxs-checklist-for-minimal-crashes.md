---
date: 2024-04-20
title: "Xanax's Checklist for Minimal Crashes in Project Quarm"
description: "Discover Xanax's checklist to minimize crashes in Project Quarm, including tips on configurations, dgVoodoo fixes, and compatibility settings."
keywords: 'Project Quarm, Quarm, EverQuest, crash fixes, dgVoodoo, compatibility settings, TAKP, Zeal, DirectX 9c'
author: 'Xanax'
toc: false
published: true
sitemap: true
---

## Xanax's Checklist for Minimal Crashes

I started this because half of my guild seems to crash when they zone in and out of the planes. Everyone is on different pieces and versions of this game. Meanwhile I've thrown most of this configuration into 3 different game folders and they all work well, only crashing occasionally when I drop to character select, or if I change my audio output source. 6/15 Update: I think my configuration has only gotten more stable. I haven't crashed at character select in a long while. My mule's client is closed when I get home from work maybe once every other week (could be server restart idk). I notice when I duplicate my install folder and user it the first few times it crashes logging into character select or server, like it needs to build a stable cache or something. After about 3 sessions it seems quite stable, used it all day. Still updating to the latest Zeal whenever it's released. Here's what I'm using:

### Checklist

1. **TAKP Version 2.2**
   - Use the [2.2 version](https://drive.google.com/file/d/1qoBktDeJMJKPBr-EZxub1vspJhz11i1y) of TAKP.

2. **#server-files Patch Files**
   - Use the latest patch files from [#server-files](https://discord.com/channels/1133452007412334643/1135981619858128998/1340358261475508246) for the smoothest camera. FPS limiters [should be disabled](https://discord.com/channels/1133452007412334643/1135968760281432164/1340358514484445186) in 2025 and beyond. Also make sure `TextureCache=FALSE` is set to FALSE in your `eqclient.ini` or you will experience graphical problems. I repatch my `global6_chr.s3d` with Old Skeleton Models too and sometimes that also fixes some graphical bugs seen like goofy feet and eyes.

3. **Antivirus Exclusion**
   - Exclude the TAKP folder from antivirus scanning. Follow the [detailed instructions](https://quarm.guide/installing-the-game#prerequisite-2-required-excluding-your-takp-installation).

4. **Latest Zeal**
   - Always run the [latest Zeal](https://github.com/iamclint/Zeal/releases) unless it contains a specific bug. Keep previous versions backed up. If you notice strangeness, you can identify the files and folders from the previous version and delete them from your installation, then install the new ones cleanly. This has been necessary in the past with new Zeal versions and files.

5. **Folder Location**
   - Ensure the TAKP folder is NOT in `/Program Files/` or `/Program Files x86/`. Place it in the root of a drive, e.g., `D:\`.

6. **dgVoodoo Configuration**
   - Use the [latest version of dgVoodoo](http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/) and configure it properly.

7. **DirectX 9c**
   - Install [DirectX 9c](https://www.microsoft.com/en-us/download/details.aspx?id=8109). Skip the Visual C download if a newer version is already installed.

8. **Compatibility Mode**
   - Run the program in compatibility mode for Windows XP (Service Pack 2). Note: Running as Admin may increase crashes for some users.

9. **4GB Patch**
   - Apply the [4GB Patch](https://ntcore.com/4gb-patch/) to `eqgame.exe` to allow it to access 4GB of virtual memory on x64 platforms.

10. **/showspelleffects off**
   - Edit your `eqclient.ini` file and set this value to zero `ShowSpellEffects=0` or in-game can type `/showspell OFF`. When using KaichoFX I still see spell effects just fine and the game looks great, so this might also be true without KaichoFX.

10. **Additional Enhancements**
    - I use muted sound files and graphical enhancements like [EQ Basic 1.1](https://www.reddit.com/r/project1999/comments/10rz5r0/eq_basic_v11_an_eq_graphics_overhaul_project/), [KaichoFX Spell Effects](https://www.reddit.com/r/ProjectQuarm/comments/17h98xq/comment/k6prhur/), [Old Skeleton Models](https://github.com/nickgal/EqSkelePatcher/releases),  and [Nillipuss UI 1440p](https://github.com/NilliP/NillipussUI_1440p).

If you ask me, 2, 3, and 4 are the biggest contributors to stability. 5 will likely cause a ton of issues I'm told. A lot of people seem to need the dgVoodoo fix though, especially if they have integrated graphics, so thats also important. People swear by 8 as well. There's a lot of little things you can try and tweak for whats right for your system. Hopefully we can lessen these crashes and work towards fixing the rest over time.
