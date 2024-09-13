---
title: 'Linux (and Handheld) Install Guide'
description: >-
    Step-by-step guides to help you install and configure Project Quarm and related software for Linux devices.
keywords: >-
    Project Quarm, Quarm, Quarm installation, TAKP, EverQuest, Zeal, game client,
    dgVoodoo2, eqgame.dll, linux, Steam Deck
author: Pastrami
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
- [dgvoodoo](https://drive.google.com/file/d/17IG_Qo9wnXoHu4TjwmdKZ9IdukrnzmdP/view?usp=sharing) (Download entire Zip on the top right)

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
1. [TAKP](https://drive.google.com/file/d/1qoBktDeJMJKPBr-EZxub1vspJhz11i1y/edit)
2. Quarm
    1. Go to [Quarm Discord](https://discord.gg/projectquarm)
    2. Go to [#server-files](https://discord.com/channels/1133452007412334643/1135981619858128998) channel
    3. Download `pq_files_[date].zip`
3. Download the most recent [Zeal](https://github.com/iamclint/Zeal/releases)
4. Create install script
    1. Open your systems file explorer
    2. Navigate to `/home/[username]/Downloads/`
    3. Right click
    4. Create New -> Text File
    5. Rename to `PQ.yaml`
    6. Copy contents below (originally inspired from [ahungry](https://gist.github.com/ahungry/b6427ebe04dc6dfbfb0e2122bad0cdab))
        ```yaml
        id: 0
        game_id: 0
        game_slug: eq-quarm
        name: Everquest Quarm
        year: 2023
        user: ahungry
        runner: wine
        slug: everquest-quarm
        version: Quarm
        description: EQ Quarm Installer
        notes: Installs EQ Quarm
        created_at: 2023-08-08T18:00Z
        updated_at: 2023-08-08T18:00Z
        draft: true
        published: false
        steamid: null
        gogid: null
        gogslug:
        humbleid:
        humblestoreid:
        humblestoreid_real:

        script:
        wine:
            version: wine-ge-8-7-x86_64
            dxvk: true
            esync: true

        files:
        - client_zip: N/A:Please select your TAKP client zip file (TAKP PC V2.1c.zip)
        - dgvoodoo2_zip: N/A:Please select your dgvoodoo2 zip file/download (dgVoodoo2_81_1.zip).
        - quarm_zip: N/A:Please select your Quarm zip file from Discord (projectquarm_08_05_2023.zip)

        game:
            prefix: $GAMEDIR
            arch: win32
            exe: $GAMEDIR/client/eqgame.exe
            working_dir: $GAMEDIR/client

        installer:
        - task:
            description: Creating Wine prefix
            name: create_prefix
            prefix: $GAMEDIR
            install_mono: false
            install_gecko: false
        - extract:
            dst: $GAMEDIR/client
            file: client_zip
        - extract:
            dst: $GAMEDIR/dgvoodoo
            file: dgvoodoo2_zip
        - extract:
            dst: $GAMEDIR/quarm
            file: quarm_zip
        - move:
            src: $GAMEDIR/dgvoodoo/MS/x86/D3D8.dll
            dst: $GAMEDIR/client/d3d8.dll
        - move:
            src: $GAMEDIR/dgvoodoo/MS/x86/D3D9.dll
            dst: $GAMEDIR/client/d3d9.dll
        - move:
            src: $GAMEDIR/quarm/eqgame.dll
            dst: $GAMEDIR/client/eqgame.dll
        - task:
            description: Edit registry to set it to use dgvoodoo2 d3d8
            prefix: $GAMEDIR
            name: set_regedit
            path: HKEY_CURRENT_USER\Software\Wine\DllOverrides
            key: d3d8
            value: native
            type: REG_SZ
        - task:
            description: Edit registry to set it to use dgvoodoo2 d3d9
            prefix: $GAMEDIR
            name: set_regedit
            path: HKEY_CURRENT_USER\Software\Wine\DllOverrides
            key: d3d9
            value: native
            type: REG_SZ
        ```
    7. Open PQ.yaml and paste
    8. Save/Close
5. Download [custom dgvoodoo conf](https://www.dropbox.com/scl/fi/ltqgx3prylelv74q0zu30/dgVoodoo.conf?rlkey=i031g7tunkqhy01oke0ysl62b&e=1&dl=0)
    - _You can close the Login modal to download if you don't have a dropbox account_

# Step 4 Install Quarm
1. Open Lutris
2. Click `+` (Top Left)
3. Choose `Install from a local install script`
4. Select `...` and navigate to your `PQ.yaml`
5. Click `Install` x2
    - _Make sure `Create steam shortcut` is checked_
6. Click `Continue``
7. Select `...` and choose the appropriate zips for `TAKP`, `dgvoodoo`, and `projectquarm` we downloaded above 
    - _The file names and version numbers may not match the examples provided in the popup, this is okay_
8. Click `Install`
    1. Click `Install` on any additional requirement popups
    2. Once `Installation completed!` is displayed, select Close

# Step 5 Install Zeal and dgVoodoo.conf
1. Right click `Everquest Quarm` in lutris
2. Select `Browse files`
3. Replace `[quarm-directory]/client/dgVoodoo.conf` with the one downloaded in #3.5 
    - _Select `Overwrite` option_
4. Double click `zeal_v[#].zip` we downloaded in #3.3
5. Drag `uifiles` from the zip directory to `[quarm-directory]/client`
    - _Select `Overwrite` option_
6. Drag `Zeal.asi` to `[quarm-directory]/client`

# Step 6 PLAY!
1. Right click `Everquest Quarm` in lutris
2. Select 'Create Steam Shortcut`
    - _This may take a few tries or require you to restart Steam to take effect_
3. Open Steam
    - _Or select the `Return to Gaming Mode` icon on your desktop if you're on Steam Deck_
4. Find `Everquest Quarm` in your library
    - _In Non-Steam for the Steam Deck handheld library_
4. Click `Play`!
    - _You MAY need to add `ENABLE_GAMESCOPE_WSI=0` to the Options->Properties->Launch Options on Steam Deck_

# Bonus Step 7 Edit eqclient.ini
1. Open `[quarm-directory]/client/eqclient.ini`
2. Under `[VideoMode]` change
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

# Bonus Step 9 Adopt an actual useable controller profile (Steam Deck)
_Note: I didn't create this layout. This layout was originally created by Yuuhi for P99, I've simply exported it to Quarm. You can read more about this layout via [this Reddit post](https://www.reddit.com/r/project1999/comments/11xn4j2/steam_deck_control_scheme/). This profile is AMAZING and really pushes the bounds of what a Steam controller profile can do by exploring layers, hover and radial menus, and providing a 'touchpad' keyboard._

_Note: As you play and explore this profile, edit it to make different versions and share your different templates with the community!_
1. Open Steam in handheld mode
2. Navigate to Everquest Quarm in your library under Non-Steam games
3. If the game isn't named `Everquest Quarm` (EXACTLY) then rename it
    - _You can rename to `Everquest`, `EverQuest`, `Project 1999`, or `EverQuest Free-to-Play` to see other appropriate controll profiles, feel free to explore! Mine is just shared under `Everquest Quarm`_
    1. Click Settings cog
    2. Select Properties
    3. Rename the shortcut to `Everquest Quarm`
4. Close Properties window (Press `B`)
5. Select the Controller icon
6. Press Up Arrow once to `Browse Community Layouts ...` above `View Laytout`/`Edit Layout`
7. Hit R1 to `Community Layouts`
8. Hit `X` to Show All Layouts
9. Press Down Arrow to `Pastrami's Layout with workable keyboard (based off Yuuhi's P99)`
10. Press `A` to Select
11. Press `X` to Apply Layout
12. Boot up the game and play!