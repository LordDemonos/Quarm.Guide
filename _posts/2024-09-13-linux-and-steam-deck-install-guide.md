---
sitemap: 'true'
published: 'true'
toc: 'true'
title: Linux (and Handheld) Install Guide
description: >-
  Step-by-step guides to help you install and configure Project Quarm and
  related software for Linux devices.
keywords: >-
  Project Quarm, Quarm, Quarm installation, TAKP, EverQuest, Zeal, game client,
  dgVoodoo2, eqgame.dll, linux, Steam Deck
author: Pastrami
date: '2025-04-23 13:42 -0400'
---


###### _Originally inspired by [this guide](https://www.youtube.com/watch?v=8U1cF15Tcd8), updated with correct links and more current instruction_

_NOTE: If you already have Quarm running on Linux, you still may be interested in Step 8 below that gives instructions on a useable controller format for playing in handheld mode._

# Step Sub 0 Create a TAKP/Quarm Account

1. [Guide](https://quarm.guide/installing-the-game#step-1-create-a-takp-forum-account)

# Step 0 Boot into Desktop Mode (Steam Deck/Handheld only)

1. Press `Steam` button
2. Select `Power`
3. Select `Switch to Desktop`

# Step 1 Download/Install prerequisites

- [Flatpak](https://www.flatpak.org/setup/) (Already present on Steam Deck)
- [Lutris](https://lutris.net/downloads) (From the Discover store)
    - _Start Lutris to Initialize_
- [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/) (From the Discover store)

# Step 2 Install GE-Proton Version(s)

1. Open ProtonUp-Qt.
2. Choose `Lutris` in the `Install for:` dropdown
3. Select `Add Version`
4. Choose `Wine-GE` in the `Compatiblility Tool:` dropdown
5. Choose `GE-Proton8-7` in the `Version:` dropdown
6. Select `Install`
7. Repeat the above steps to install `GE-Proton8-26`
    - _I have no idea why this is required, but Quarm won't install without it_

# Step 3 Download All Appropriate Files
1. Download windows client from [TAKP](https://drive.google.com/file/d/1qoBktDeJMJKPBr-EZxub1vspJhz11i1y/edit)
2. Quarm patch files
    1. Go to [Quarm Discord](https://discord.gg/projectquarm)
    2. Go to [#server-files](https://discord.com/channels/1133452007412334643/1135981619858128998) channel
    3. Download `pq_files_[date].zip`
3. Download the most recent [Zeal](https://github.com/iamclint/Zeal/releases)
4. Download Zeal compatible UI   (skip step if using default ui)
    1. Go to [Quarm Discord](https://discord.gg/projectquarm)
    2. Go to [#ui-discussion](https://discord.com/channels/1133452007412334643/1162826324092657757/1228694493117681686)
    3. Download Zeal Compatible UI
   
   *Warning* - If you try to load a UI without zeal compatiblity your client will crash character select screen or when you type /loadskin with non zeal compatible UI
5. Download [custom dgvoodoo conf](https://www.dropbox.com/scl/fi/ltqgx3prylelv74q0zu30/dgVoodoo.conf?rlkey=i031g7tunkqhy01oke0ysl62b&e=1&dl=0)
    - _You can close the Login modal to download if you don't have a dropbox account_

# Step 4 Install Quarm
1. Open [Lutris.net/games/everquest](https://lutris.net/games/everquest/)
2. Click `Install` On the "Quarm Version"
3. Choose `Install` when prompted by Lutris program
4. Select the desired shortcuts to desktop, steam, or application menu.
    - _Make sure `Create steam shortcut` is checked for steamdeck_
6. Click `Continue``
7. Select `...` and choose the appropriate zips for `TAKP client zip file` and `Quarm zip file` we downloaded above
    - _The file names and version numbers may not match the examples provided in the popup, this is okay_
    
6. Keep dg_voodoo2_79_3.zip Selected as downloaded from installer.(See below)
8. Click `Install`
    1. Click `Install` on any additional requirement popups
    2. Once `Installation completed!` is displayed, select Close

![](https://i.imgur.com/2cqUrDI.png)


# Step 5 Install Zeal and dgVoodoo.conf
1. Right click `Everquest` in lutris
2. Select `Browse files`
3. Replace `/home/USERNAMEHERE/Games/everquest/dgvoodoo/dgVoodoo.conf`  with the one downloaded in #3.5 
    - _Select `Overwrite` option_
3. Install Zeal compatible UI files `/home/USERNAMEHERE/Games/everquest/client/uifiles/` with the files in #3.4 
4. Double click `zeal_v[#].zip` we downloaded in #3.3
5. Drag `uifiles` from the zip directory to `/home/USERNAMEHERE/Games/everquest/client`
    - _Select `Overwrite` option_
6. Drag `Zeal.asi` to `/home/USERNAMEHERE/Games/everquest/client`

# Step 6 PLAY!
1. Click play button in Lutris another shortcut like desktop shortcut or follows steps 2-6 for steamdeck/steam 

3. Replace > /home/USERNAMEHERE/Games/everquest/dgvoodoo/dgVoodoo.conf  with the one downloaded in #3.5 
    - _Select `Overwrite` option_
3. Install Zeal compatible UI files /home/USERNAMEHERE/Games/everquest/client/uifiles/ with the files in #3.4 
4. Double click `zeal_v[#].zip` we downloaded in #3.3
5. Drag `uifiles` from the zip directory to /home/USERNAMEHERE/Games/everquest/client`
    - _Select `Overwrite` option_
6. Drag `Zeal.asi` to /home/USERNAMEHERE/Games/everquest/client

**OR**
  Follow steps for Steam Deck/Steam 
  
1.Click play button in Lutris another shortcut like desktop shortcut 
2. Right click `Everquest` in lutris
3. Select 'Create Steam Shortcut`
  - _This may take a few tries or require you to restart Steam to take effect_
4. Open Steam
  - _Or select the `Return to Gaming Mode` icon on your desktop if you're on Steam Deck_
5. Find `Everquest Quarm` in your library
  - _In Non-Steam for the Steam Deck handheld library_
6. Click `Play`!
- _You MAY need to add `ENABLE_GAMESCOPE_WSI=0` to the Options->Properties->Launch Options on Steam Deck_

# Bonus Step 7 Edit eqclient.ini
1. Open `[quarm-directory]/client/eqclient.ini`
2. Under `[VideoMode]` change to monitor specifications
    - _Below is Optimal for Steam Deck, may need different values on other systems_
    1. `Width=1440`
    2. `Height=900`
3. Under `[Defaults]` you can toggle 
    1. `CombatMusic=` to 1 for on, 0 for off
    2. `ShowDyanmicLights=` to `TRUE` for the best quality, or `FALSE` if you notice light flickering
    3. `AllLuclinPcModelsOff=` to `TRUE` for Classic models, `FALSE` for Luclin models
    4. `EnableClassicMusic=` to `TRUE` for Classic MIDI, `FALSE` for MP3s
4. Under `[Defaults]` you can set
    1. `ClipPlane=20` to set farthest view distance
    2. `InspectOthers=FALSE` as `TRUE` can cause a lot of accidental inspections as in annoying

# Bonus Step 8 Import Character Settings
_Note: This is for players who were playing elsewhere on another device_
1. Via the old device - Open `[quarm-directory]/client`
2. Via the old device - Upload `[charactername]_pq.proj.ini` to a cloud service (like [Google Drive](https://drive.google.com/drive/home))
3. Via the old device - Upload `UI_[charactername]_pq.proj.ini` to a cloud service (like [Google Drive](https://drive.google.com/drive/home))
4. Via linux device - Download both files
5. Via linux device - Place in `[quarm-directory]/client`
    - _**Warning** - Importing from non zeal clients Within your client's root folder there are " UI_CHARACTERNAMEHERE_pq.proj.ini "files for each character name and the UI chosen **MUST HAVE ZEAL SUPPORT** or you **WILL CRASH AT CHARACTER SELECT SCREEN**_
    
    ![](https://i.imgur.com/UppAgB6.png)


# Bonus Step 9 Adopt an actual useable controller profile (Steam Deck)
_Note: I didn't create this layout. This layout was originally created by Yuuhi for P99, I've simply exported it to Quarm. You can read more about this layout via [this Reddit post](https://www.reddit.com/r/project1999/comments/11xn4j2/steam_deck_control_scheme/). This profile is AMAZING and really pushes the bounds of what a Steam controller profile can do by exploring layers, hover and radial menus, and providing a 'touchpad' keyboard._

_Note: As you play and explore this profile, edit it to make different versions and share your different templates with the community!_
1. Open Steam in handheld mode
2. Rename Game to `Everquest Quarm` (EXACTLY)
    - _You can rename to `Everquest`, `EverQuest`, `Project 1999`, or `EverQuest Free-to-Play` to see other appropriate controll profiles, feel free to explore! Mine is just shared under `Everquest Quarm`_
    1. Click Settings cog
    2. Select Properties
    3. Rename the shortcut to `Everquest Quarm`
3. Navigate to Everquest Quarm in your library under Non-Steam games
4. Close Properties window (Press `B`)
5. Select the Controller icon
6. Press Up Arrow once to `Browse Community Layouts ...` above `View Laytout`/`Edit Layout`
7. Hit R1 to `Community Layouts`
8. Hit `X` to Show All Layouts
9. Press Down Arrow to `Pastrami's Layout with workable keyboard (based off Yuuhi's P99)`
10. Press `A` to Select
11. Press `X` to Apply Layout
12. Boot up the game and play!

# Bonus Step 10 Remove dgVoodoo Watermark Through Lutris
1. Open Lutris and Select Everquest
2. Select run exe in wine prefix (second arrow to the right of ["Play"]
(https://i.imgur.com/Vay8RzD.png)
3. Select dgVoodooCpl.exe from the correct folder(lutris does not store this in the client folder like on windows).  It's default location is "/home/USERNAMEHERE/Games/everquest/dgvoodoo/"
4. Uncheck dgVoodoo watermark in the "directx" tab of dgvoodoo options
5. Click Apply and Ok to close out program.



Backup download for dgVoodoo

[https://archive.org/details/dgvoodoo2_78_2_202205](https://archive.org/details/dgvoodoo2_78_2_202205) OR [dgvoodoo](https://drive.google.com/file/d/17IG_Qo9wnXoHu4TjwmdKZ9IdukrnzmdP/view?usp=sharing) (Download entire Zip on the top right)
