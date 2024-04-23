# EverQuest Project Quarm Installation Guide (Updated: April 24, 2024)
##### By Xanax/Xantagonist < Former Glory > 

## Table of Contents
1. [Part 1: Installing the Main Game](#part-1-installing-the-main-game)
    - [Step 1: Create a TAKP Forum Account](#step-1-create-a-takp-forum-account)
    - [Step 2: Download the Game Client](#step-2-download-the-game-client)
    - [Step 3: Converting your TAKP client to Quarm](#step-3-converting-your-takp-client-to-quarm)
    - [Step 4: Installing Zeal](#step-4-installing-zeal)
        - [Why is Zeal getting flagged as a Virus/Malware?](#why-is-zeal-getting-flagged-as-a-virusmalware)
        - [Download and Extract Zeal.asi to your TAKP Folder](#download-and-extract-zealasi-to-your-takp-folder)
    - [Step 5: dgVoodoo2](#step-5-dgvoodoo2)
    - [Setep 6: Placebos](#setep-6-placebos)
2. [Xanax's Checklist for Minimal Crashes](#xanaxs-checklist-for-minimal-crashes)
3. [Part 2: Installing Optional Textures and Effects](#part-2-installing-optional-textures-and-effects)
4. [Part 3: Installing Optional 3rd Party Programs](#part-3-installing-optional-3rd-party-programs)
5. [FAQ](#faq)
6. [Suggestions Feedback and Help](#suggestions-feedback-and-help)

## Part 1: Installing the Main Game

#### Backup Warning - Anytime you change something or overwrite a file, backup the whole TAKP folder. Its easy and fast and I'm not going to remind you to backup files after every step. - Backup Warning

### Step 1: Create a TAKP Forum Account
Before you can download and install the game, you'll need to create an account on the TAKP forums.

**NOTE: You must only create 1 forum account. You can create up to 10 game accounts under your forum account, but you must not create more than 1 forum account. If this is detected, the extra forum accounts will be deleted, and access to any game accounts associated with them will be lost. Also, please name your forum and game accounts carefully as these cannot be changed or deleted after creation. Read the forum FAQ and Rules for more information [here](https://www.takproject.net/forums/index.php?forums/server-info.90/).*

1. Visit the following link and follow the instructions to register a new account: [Login](https://www.takproject.net/forums/index.php?login%2F)

2. Once you have created a forum account and are logged in, navigate to the "Game Accounts" section.

3. Click "Create Login Server Account" and create a game account. Your forum account may have up to 10 game accounts, but you are limited to having three game accounts +1 trader account simultaneously logged in. Also note, your forum and game accounts are not linked to your wiki login in any way.

#### Source: [LevelUpLarry](https://www.youtube.com/watch?v=u83_FICd97c)

### Step 2: Download the Game Client
1. Visit the Getting Started page on the TAKP wiki: [Getting Started](https://wiki.takp.info/index.php?title=Getting_Started)
2. Click on the "Getting Started with Windows" section.
3. Download the stable 2.1 version of the game client [here](https://www.dropbox.com/s/bppy4ebt7vl7hwk/TAKP%20PC%20V2.1c.zip?dl=0), or use the latest 2.2 version [here](https://drive.google.com/file/d/1qoBktDeJMJKPBr-EZxub1vspJhz11i1y).

### Step 3: Converting your TAKP client to Quarm
1. Join the [Project Quarm Discord](https://discord.gg/3nDQ9AkUz8).
2. Navigate to the #server-files channel.
3. Download the `eqgame.dll` file from the following message: [#server-files](https://discord.com/channels/1133452007412334643/1135981619858128998/1170491429253034047). This is the latest stable release. An experimental release of `eqgame.dll` can be found under [zeal-discussions](https://discord.com/channels/1133452007412334643/1210670176077348934/1227704216655761499).
4. Extract the `eqgame.dll` file to your TAKP folder (where you installed the game client).

### Step 4: Installing Zeal

Zeal is used to add additional functionality to EverQuest. Main additions include camera smoothing, better tab targeting, spell sets, and melody. A full list of features can be found in the [readme](https://github.com/iamclint/Zeal/blob/master/README.md).

#### Prerequisite 1. (Required) Enable sound in your eqclient.ini

Make sure Sound=TRUE is listed in your eqclient.ini. Zeal uses the EverQuest sound engine to inject code into the game, thus the sound must be enabled for Zeal to function. You will still have access to various sound options in game by pressing ALT + O and adjusting the sliders for Sound Realism, Music Volume, and Sound Volume.

#### Prerequisite 2. (Required) Excluding your TAKP Installation
Excluding your TAKP installation from being scanned by your antivirus software can help reduce load times, zoning times, and eliminate stuttering when opening your bags. This is highly recommended.

Link: [Set Windows Defender Exclusion on Windows 10](https://wiki.takp.info/index.php/Set_Windows_Defender_Exclusion_on_Windows_10)

Follow the instructions on the link above to exclude your TAKP installation from virus scans.

#### Why is Zeal getting flagged as a Virus/Malware?
Zeal is a file that adds new features and improvements to EverQuest by injecting custom code into the game's sound engine. This process is called code injection. While code injection is sometimes associated with malware or viruses because it modifies the game files, Zeal serves a legitimate purpose in enhancing the gaming experience.

However, because Zeal is currently in early development and does not have a digital signature, it may be flagged as potentially harmful by antivirus software. A digital signature is a way to verify that a file is safe and comes from a trusted source. Since Zeal does not have this signature yet, antivirus programs treat it with suspicion.

The Project Quarm team plans to address this issue by obtaining a digital certificate from Microsoft to sign Zeal in the future. This digital signature will confirm that Zeal is a legitimate and safe program, eliminating any concerns about its legitimacy.


#### Download and Extract Zeal.asi to your TAKP Folder
1. To download Zeal, visit the project's GitHub repository at and navigate to the '[Releases](https://github.com/iamclint/Zeal/releases)' section. You'll find the latest version available for download in a file named `zeal.zip`. Ensure that you have previously excluded your TAKP folder from virus scans, as discussed in the previous step.
2. If you encounter any difficulties downloading the file, consider using an alternative browser such as Edge or Firefox. Alternatively, if you're using Chrome and experiencing issues, you may need to force the download by following the instructions [here](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/This-file-is-dangerous-so-Chrome-has-blocked-it-message-received-when-downloading-ZIP-files-from-BIM-360-Team.html).
3. Once downloaded, extract the contents of the zip file directly into the root directory of your TAKP folder. Make sure you see `zeal.asi` in your TAKP folder and if you encounter any trouble, your first step is to make sure `zeal.asi` is still here.
4. Log into the game and type /zeal version to show the version number. /help zeal will output the command list.

### Step 5: dgVoodoo2 

[dgVoodoo2](http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/) is a set of implementation of old graphics API's for Windows 7 and later versions. If you are still having problems with intermittent game crashes, this may help.

1. Download the latest version [here](http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/). Open the zip file and extract only dgVoodooCpl to the root of your TAKP folder.
2. For Windows, inside the zip file, under /MS/x86/ copy all four .dll files to the root of your TAKP folder, overwriting any older files found.

    `D3D8.dll` `D3D9.dll` `D3Dlmm.dll` `DDraw.dll`

3. Run dgVoodoo.conf from within your TAKP folder.
4. Press the "./" in the upper right to select your TAKP folder.
5. Under Adapters, make sure your primary video card is selected.
6. Select "Windowed Mode".
7. Navigate to the DirectX tab.
8. Change VRAM to match your video card's VRAM.
9. Uncheck dgVooDoo watermark.

Source: [El Hefe](https://www.youtube.com/watch?v=ArLNnN0GwfQ)

### Setep 6: Placebos

Navigate to your TAKP folder and find eqgame.exe. Right click and select Properties. 
Under Compatability, select "Run this program in compatability mode for Windows XP (Service Pack 3)" and "Run this program as an administrator". 

### Xanax's Checklist for Minimal Crashes

I wrote this guide because half of my guild seems to crash when they zone in and out of the planes. Everyone is on different pieces and versions of this game. Meanwhile I've thrown most of this guide into 3 different game folders and they all work well, only crashing occasionally when I drop to character select, or if I change my audio output source. Here's what I'm using:

1. 2.1 version of TAKP was recommended back in October and I've stuck with it.
2. Secrets's experimental .dll from zeal-discussions.
3. Excluded TAKP folder from antivirus scanning.
4. Always running latest Zeal unless it contains a specific bug I want to avoid. Always keep previous versions backed up.
5. dgVoodoo fix
6. Running program as Administrator.
7. Also running several muted sound files, EQ Basic 1.1, KaichoFX Spell Effcts, and the game looks absolutely amazing!

If you ask me, the first 3 are the biggest contributors to stability. Hopefully we can lessen these crashes and work towards fixing the rest over time.

## Part 2: Installing Optional Textures and Effects
You can install various texture packs and visual effects to enhance the game's appearance.

#### Classic HD Textures
Download Link: https://wiki.project1999.com/EQ_Classic_HD#The_Al.27Kabor_Project_version:

**Note: The link contains special instructions for applying these textures to the Al'Kabor Project (TAKP).**

#### EQ Basic 1.1
Link: https://www.reddit.com/r/project1999/comments/10rz5r0/eq_basic_v11_an_eq_graphics_overhaul_project/

Download: https://drive.google.com/file/d/1PbP9Pwnjkaw4-cgN7_as8SL8PAKQlYGB/view

To install EQ Basic 1.1, follow these steps:

1. Make a copy of your EverQuest directory before overwriting any files.
2. After making a copy, extract the downloaded `.7z` file into your copied EverQuest directory.
3. Create a new shortcut pointing to your newly copied EverQuest directory.
4. Log into the game as usual and enjoy the new experience!

#### Old EQ Spell Gems/Particle Effects/Music

https://www.reddit.com/r/everquest/comments/36ovuk/howto_old_eq_uispell_gemsparticle_effectsmusic/

#### KaichoFX Spell Effects
Download Link 1: https://drive.google.com/file/d/1zXoiMFk-Z-f2Qc6tI9ZUJjfR98rVdLoK/view

Installation Instructions [here](https://www.reddit.com/r/ProjectQuarm/comments/17h98xq/comment/k6prhur/)

#### Sound File Fixes
Link: https://www.takproject.net/forums/index.php?threads%2Fwindows-10-ambient-noise-too-loud.8234%2F

This link provides edited sound files to change the volumes of certain annoying sounds like rain and wind/snow.

#### Old Skeleton Models
Download Link: https://github.com/nickgal/EqSkelePatcher/releases

To install the Old Skeleton Models, follow these steps:

1. Visit the link above and download the release for your operating system.
2. Extract the downloaded zip file.
3. Locate the `gequip5.s3d` file in your EverQuest directory (where you installed the game).
4. Drag and drop the `gequip5.s3d` file directly onto the `eq_skele_patcher.exe` file.
5. If Windows flags the executable, click "More Info", then "Run Anyway" to continue.
6. Locate the `global6_chr.s3d` file in your EverQuest directory.
7. Repeat steps 4 and 5 by dragging and dropping the `global6_chr.s3d` file onto the `eq_skele_patcher.exe` file.

After following these steps, the Old Skeleton Models will be installed and applied to the game.

Sources: [ItsKensterrr](https://www.youtube.com/watch?v=spMp-f7S7FA) | [ItsKensterrr](https://www.youtube.com/watch?v=zvhGnkbRW9g)

## Part 3: Installing Optional 3rd Party Programs

These programs add functionality not found in the game client by reading your EverQuest player log files. Programs that use hooks to inject code into the game are now allowed, with the one exception being Zeal.

#### GINA

A log monitoring application that provides audio and visual feedback based on triggers you either define or import.

https://eq.gimasoft.com/gina/Default.aspx | [Supplimental Documentation](https://kingdomdkp.com/index.php/Guides/Tools/How-to-installing-gina--basic-functions.html?)

#### EQ Nag

An EverQuest notification agent. An alternative to GINA.

https://github.com/guildantix/eq-nag/releases | [Documentation](https://guildantix.github.io/eq-nag/)

#### NParse (TAKP Fork)

Provides player location and spell tracking support for TAKP by reading the player log.

https://github.com/hitechhippie/nparse-takp

#### Quarm Tool

Log parser containing 3D Maps, Timers for everything, damage meters, and mob info.

https://github.com/EJWellman/QuarmTool

#### ZlizEQMap

ZlizEQMap is a map tool mainly designed for servers that emulate old versions of EverQuest. It features a local database of maps from the old EQAtlas website (now hosted on allakabor.com and tessmage.com), along with player positioning (x plotted on map), transparent overlay, waypoints, zone connections, and more.

https://github.com/hada79/ZlizEQMap

#### Supplemental Maps for ZlizEQMap (More Accurate)

https://www.project1999.com/forums/showthread.php?t=386944

#### EQ Tell Notifer

Desktop notifications for tells recieved in game

https://github.com/rtcox/EQ_tell_notifier/tree/main

#### Lossless Scaling

Lossless Scaling allows you to scale windowed games to full screen using the state-of-the-art scaling algorithms, as well as use ML based proprietary scaling and frame generation.

https://store.steampowered.com/app/993090/Lossless_Scaling/

#### Borderless Gaming

I dont use this with EQ but I need to mention it alongside Lossless Scaling. I use it with my 4k OLED monitor to remove the Windows border around games sometimes to prevent OLED burn-in. Its pricey on Steam but free on Github.

https://github.com/Codeusa/Borderless-Gaming/releases

## FAQ

1. [Q: Where can I learn more about Project Quarm?](#q1)
2. [Q: When I use my mouse wheel to scroll backwards, I do not see my character in 3rd person. How do I enable Mouse Look?](#q2)
3. [Q: How do I make the chat text bigger in game?](#q3)
4. [Q: Why doesnt (zeal feature) appear in my User Interface?](#q4)
5. [Q: Problem with Mule Account?](#q5)
6. [Q: How do I change my resolution?](#q6)
7. [Q: How do I run the game full screen?](#q7)
8. [Q: I'm using the Stone UI from 1999?](#q8)
9. [Q: How do I view nameplates from far away?](#q9)
10. [Q: The game still isnt smooth. Camera movement is still jittery?](#q10)
11. [Q: I logged in and I can only move the camera left and right or only up and down? Mouse speed is really fast too?](#q11)
12. [Q: I want to turn off the loud music at character creation or character select screen?](#q12)
13. [Q: Quarm enabled snow and its very loud?](#q13)

### Q1
**A:** The main website projectquarm.com contains a link to the [Project Quarm Discord](https://discord.gg/3nDQ9AkUz8).

### Q2
**A:** You may have disabled mouse look. While logged into the game, press F12 to enable/disable mouse look.

### Q3
**A:** /chatfontsize 1-5

### Q4
**A:** Zeal adds functionality so the User Interface needs to be told how to display that functionality. Zeal contains a few UI files you can drop into the TAKP/Uifiles/ folder that you use. Alternatively, you can find new user interafaces with added functionality. I use [Nillipus UI 1440p](https://discord.com/channels/1133452007412334643/1162826324092657757/1224809011392807003)[Merchant](https://discord.com/channels/1133452007412334643/1162826324092657757/1224861589799178321) and [qqui Calmethar](https://www.eqinterface.com/downloads/fileinfo.php?id=6959) is updated frequently.

### Q5
**A:** [Creating a mule](https://discord.com/channels/1133452007412334643/1135968760281432164/1208195978016854096) "The #makemule command is now available in game. Running the command in game will give you further instructions for how to flag the account as a mule and will ask that you run an additional command for confirmation.

Flagging an account as a mule can not be undone and will delevel the character running the command to 1 SO BE CERTAIN OF YOUR INTENTIONS. 

The character running the command must first be of appropriate level and no other characters can exist on the account when the command is run. Once an account is flagged as a mule then all characters on the account will be mules bound in EC tunnel and can not leave EC nor level past level 1. These accounts should not contribute to overall server population - this is so we can accurately track server population across third-party population tracking websites, such as UnixGeek's EQEmulator player stats.

The mule account will be exempt from IP restrictions allowing you run a game client and buy/sell/transfer items independent of your main account. Again, RUNNING THE COMMAND AND CONFIRMING WILL DELEVEL YOU TO 1 AND FLAG THE ENTIRE ACCOUNT AS A MULE ACCOUNT. BE CERTAIN OF YOUR INTENTIONS. @CSR WILL NOT REVOKE THIS FLAG UNDER ANY CIRCUMSTANCES, NOR ARE THEY EQUIPPED TO DEAL WITH ANY ISSUES THAT ARISE."

### Q6
**A:** In your `eqclient.ini` you can find the [VideoMode] section. Change this to match your desktop's settings. [VideoMode] `BitsPerPixel=32` `Width=1920` `Height=1080` `RefreshRate=60`

### Q7
**A:** You want to run the game in windowed mode first. In your `eqclient.ini` set this option `WindowedMode=TRUE`. Find [VideoMode] and set it to your desired resolution. When you are logged into EverQuest, press SHIFT + Enter to switch between windowed and fullscreen modes. If you are still having problems, see the 3rd party programs section for LosslessScaling.

### Q8
**A:** In your `eqclient.ini` set NewUI=TRUE and `OldUI=False`.

### Q9
**A:** Use an updated eqgame.dll and make sure `eqclient.ini` has `EnableExtendedNameplateDistance=TRUE`. 

### Q10
**A:** First make sure you're using the experimental `eqgame.dll` file as this fixes the framerate options in your `eqclient.ini`. With previous versions of `eqgame.dll` the frame rate/refresh rate values would not be respected. You `eqclient.ini` then has values for `RefreshRate=60` `MaxFPS=60` `MaxBGFPS=60` `MaxMouseLookFPS=60` and `NoFPSLimiter=1` . These can be adjusted based on your monitor's refresh rate. The general consensus seems to be to limit your FPS, and set it to your monitor's max refres rate. The higher the frame rate, the smoother the game should feel. 

### Q11
**A:** Sometimes Zeal's camera movement settings do not save properly so the camera feels too fast, or wont move at all. In game you can ALT + O to open the options menu and navigate to the Zeal tab. I like all my camera settings around .3. These settings can also be found in `eqclient.ini` at the bottom under [Zeal] `MouseSensitivityX=0.300000` `MouseSensitivityY=0.300000` `MouseSensitivityX3rd=0.300000` `MouseSensitivityY3rd=0.300000`.

### Q12
**A:** Delete the following files from your TAKP folder. `eqtheme.mp3` `combattheme1.mp3` `combattheme2.mp3` `deaththeme.mp3`

### Q13
**A:** Originally posted on discord by Hallic|Kelendil: For those interested in reducing or deleting the new event snow sound, the name of the file for the snow/wind loop is wind_lp1.wav located in the snd2.pfs file in your EQ directory. You will need a special pfs file viewer to open, extract or delete this file. To do so, use [EQ-Zip EverQuest Archive Manager](https://github.com/Shendare/EQZip/releases). First open `snd2.pfs` and you will see a list of several environmental sounds there. You can export or delete the `wind_lp1.wav` OR even use an online .wav volume reducing tool such as [Change Volume](https://mp3cut.net/change-volume) to reduce the volume. You can then upload the reduced volume wave file back into `snd2.pfs` (overwrite and replace the loud one) and now you have a much softer sounding ambient wind. You can do this for all the sound files btw and even make custom ones.

## Suggestions Feedback and Help

### [Project Quarm Discord #zeal-discussions](https://discord.com/channels/1133452007412334643/1210670176077348934) | [Project Quarm Discord #tech-help](https://discord.com/channels/1133452007412334643/1133453502182596729) [Project Quarm Discord #ui-discussion](https://discord.com/channels/1133452007412334643/1162826324092657757)

Still reading? I'd like to expand this guide and keep it maintained. What I need from you are more questions to populate the FAQ at the bottom. I need to install Visual Studio and document steps to attaching the game to it to log the data the Secrets and Salty need when the game crashes or bugs out. I'd like to host a fully updated ZlizEQMap [zonedata file](https://github.com/hada79/ZlizEQMap/blob/master/ZoneData/ZoneData-The%20Al'Kabor%20Project.txt) but this one isn't updated for Quarm. I have some other ideas too. Please submit suggestions/help/feedback to me via DM on X or Discord. Feel free to ask `Xanax/Xantagonist <Former Glory>` any questions, anywhere you find me in game! 

#### @LordDemonos on [X](https://twitter.com/home)
#### lorddemonos on [Discord](https://discord.com/)
#### Special Thanks to `Zephon <Mayhem>` `Manie <Erud's Crossing Guard>` `Gamjee` `Calmethar.` 

