<!-- # Everquest Project Quarm Getting Started Guide -->
<!-- ##### By Xanax/Xantagonist < Former Glory > -->

# Table of Contents
1. [A Brief Introduction to Project Quarm](#a-brief-introduction-to-project-quarm)
2. [Part 1: Installing the Main Game](#part-1-installing-the-main-game--video-guide-for-part-1-here)
    - [Step 1: Create a TAKP Forum Account](#step-1-create-a-takp-forum-account)
    - [Step 2: Download the Game Client](#step-2-download-the-game-client)
    - [Step 3: Converting your TAKP client to Quarm](#step-3-converting-your-takp-client-to-quarm)
    - [Step 4: Installing Zeal](#step-4-installing-zeal-)
    - [Step 5: dgVoodoo2](#step-5-dgvoodoo2)
    - [Step 6: Issues Running the Game](#step-6-issues-running-the-game)
    - [Step 7: Launch the Game](#step-7-launch-the-game)
3. [Xanax's Checklist for Minimal Crashes](#xanaxs-checklist-for-minimal-crashes)
4. [Part 2: After Installing the Main Game](#part-2-after-installing-the-main-game--video-guide-for-part-23-here)
    - [Step 1: Understanding your EQClient.ini](#step-1-understanding-your-eqclientini)
    - [Step 2: Controlling your User Interface](#step-2-controlling-your-user-interface)
    - [Step 3: Characters, Logs, Spell Sets, and Screenshots](#step-3-characters-logs-spell-sets-and-screenshots)
5. [Part 3: Installing Optional Textures and Effects](#part-3-installing-optional-textures-and-effects--video-guide-for-part-23-here)
6. [Part 4: Installing Optional 3rd Party Programs](#part-4-installing-optional-3rd-party-programs)
7. [Part 5: Third Party Websites](#part-5-third-party-websites)
8. [About Project Quarm](#about-project-quarm-)
   - [Main Ruleset](#main-ruleset)
   - [Optional Ruleset](#optional-ruleset)
   - [Gameplay Changes](#gameplay-changes)
   - [Timeline](#timeline)
   - [Legacy Items](#legacy-items)
   - [Private Guild Instances and Quakes](#private-guild-instances-and-quakes)
   - [Planes](#planes)
   - [Mule Accounts](#mule-accounts)
   - [Elective Services Fees](#elective-services-fees)
   - [Events](#events)
   - [Server Downtime](#server-downtime)
   - [IP Exemption](#ip-exemption)
   - [Rules](#rules)
   - [Raid Rules](#raid-rules)
9. [FAQ, Troubleshooting, and Obscure Situations](#faq-troubleshooting-and-obscure-situations)
10. [Suggestions Feedback and Additional Help](#suggestions-feedback-and-help)

# A Brief Introduction to Project Quarm ![Quarm](/img/Quarm.png)

Welcome to [Project Quarm](https://projectquarm.com/), a 1-Box EverQuest emulated server based on the [TAKProject](https://www.takproject.net/) codebase! We are currently in the [Classic 1.6](#classic-1x-october-1st-2023) era with Kunark Pre-release coming June 1st.

Some server highlights include: TLP through Planes of Power at 9 month intervals, instanced raid encounters, legacy items drop forever, hardcore and solo self found gameplay modes, custom content and events, and a ton of QOL features through [Zeal](https://github.com/iamclint/Zeal).

If you want to learn more about Project Quarm specific features and rules, head over to the [About Project Quarm](#about-project-quarm) section.

## Important Backup Reminder

Whenever you make changes or overwrite files, it's crucial to create backups to prevent data loss. We strongly recommend backing up the entire TAKP folder or any modified files before proceeding with any alterations. Creating backups is a quick and easy process that can save you from potential headaches down the line. While we won't remind you to back up files after every step, it's a best practice to develop a habit of regularly backing up your data.

# Part 1: Installing the Main Game <br> [Video Guide for Part 1 HERE](https://www.youtube.com/watch?v=aM0MX67me5Y)

### Step 1: Create a TAKP Forum Account
Before you can download and install the game, you'll need to create an account on the TAKP forums.

**NOTE: You must only create 1 forum account. You can create up to 10 game accounts under your forum account, but you must not create more than 1 forum account. If this is detected, the extra forum accounts will be deleted, and access to any game accounts associated with them will be lost. Also, please name your forum and game accounts carefully as these cannot be changed or deleted after creation. Read the forum FAQ and Rules for more information [here](https://www.takproject.net/forums/index.php?forums/server-info.90/).*

1. Visit the following link and follow the instructions to register a new account: [Login](https://www.takproject.net/forums/index.php?login%2F)

2. Once you have created a forum account and are logged in, navigate to the "Game Accounts" section.

3. Click "Create Login Server Account" and create a game account.

### Step 2: Download the Game Client
1. Visit the Getting Started page on the TAKP wiki [Getting Started](https://wiki.takp.info/index.php?title=Getting_Started)
2. Click on the [Getting Started with Windows](https://wiki.takp.info/index.php/Getting_Started_on_Windows) section.
3. Download the recommended 2.2 client [Download Here](https://drive.google.com/file/d/1qoBktDeJMJKPBr-EZxub1vspJhz11i1y).
4. Unzip the client zip into its own folder on the root of your C drive (or other drive letter), do not put this under under the \Program Files or \Program Files (x86) folders. 

### Step 3: Converting your TAKP client to Quarm
1. Join the [Project Quarm Discord](https://discord.gg/3nDQ9AkUz8).
2. Navigate to the #server-files channel.
3. Download the `eqgame.dll` file from the following message [#server-files](https://discord.com/channels/1133452007412334643/1135981619858128998/1170491429253034047). This is the latest stable release.
   An experimental release of `eqgame.dll` can be found under [#zeal-discussions](https://discord.com/channels/1133452007412334643/1210670176077348934/1227704216655761499).
5. Extract the `eqgame.dll` file to your TAKP folder (where you installed the game client).

### Step 4: Installing Zeal ![Zeal](/img/Zeal.png)

Zeal is used to add additional functionality to EverQuest. Main additions include 3rd person camera smoothing fix, better tab targeting, spell sets, and melody. A full list of features can be found in the [readme](https://github.com/iamclint/Zeal/blob/master/README.md). *The readme is based on latest commits not latest release build.*

#### Prerequisite 1. (Required) Enable sound in your eqclient.ini

Make sure `Sound=TRUE` is listed in your `eqclient.ini`. Zeal uses the EverQuest sound engine to inject code into the game, thus the sound must be enabled for Zeal to function. You will still have access to various sound options in game by pressing ALT + O and adjusting the sliders for Sound Realism, Music Volume, and Sound Volume.

#### Prerequisite 2. (Required) Excluding your TAKP Installation
Excluding your TAKP installation from being scanned by your antivirus software can also help reduce load times, zoning times, and eliminates stuttering when opening your bags. This is highly recommended and is a prerequisite for downloading Zeal, as explained below.

There are two methods to excluding your TAKP installation, manually or using a Powershell command. 

##### Windows 10

 Instructions for performing the above through Windows Settings panel:

*This may be slightly different for the different versions of Windows 10. This was taken from the 1909 version released late 2019.*

-Right click the windows button in the lower left hand corner and select search.

![Defenderexclusion1](/img/step4/Defenderexclusion1.png)

- Search for and select Windows Security.

![Defenderexclusion2](/img/step4/Defenderexclusion2.png)

- Click Virus and Threat Protection.

![Defenderexclusion3](/img/step4/Defenderexclusion3.png)

- Under Virus and Threat Protection settings, click manage settings.

![Defenderexclusion4](/img/step4/Defenderexclusion4.png)

- Under exclusions, click Add or Remove Exclusions.

![Defenderexclusion5](/img/step4/Defenderexclusion5.png)

- Click Add an exclusion and select Folder.

![Defenderexclusion6](/img/step4/Defenderexclusion6.png)

- Select the folder that you currently have (or intend to have) the TAKP files extracted into and run from when you play.

##### Powershell

(Optional Method)

Open administrative PowerShell and type in the below, replace the C:\TAKPv22 folder path with where you unzipped the game files.

`Add-MpPreference -ExclusionPath "C:\TAKPv22"`

`Add-MpPreference -ExclusionProcess "C:\TAKPv22\eqgame.exe"`

![AV_Exclusions_PowerShell_Example](/img/step4/AV_Exclusions_PowerShell_Example.png)

#### Why is Zeal getting flagged as a Virus/Malware?
Zeal is a file that adds new features and improvements to EverQuest by injecting custom code into the game's sound engine. This process is called code injection. While code injection is sometimes associated with malware or viruses because it modifies the game files, Zeal serves a legitimate purpose in enhancing the gaming experience.

However, because Zeal is currently in early development and does not have a digital signature, it may be flagged as potentially harmful by antivirus software. A digital signature is a way to verify that a file is safe and comes from a trusted source. Since Zeal does not have this signature yet, antivirus programs treat it with suspicion.

The Project Quarm team plans to address this issue by obtaining a digital certificate from Microsoft to sign Zeal in the future. This digital signature will confirm that Zeal is a legitimate and safe program, eliminating any concerns about its legitimacy.


#### Download and Extract Zeal.asi to your TAKP Folder
1. To download Zeal, visit the project's GitHub repository at and navigate to the '[Releases](https://github.com/iamclint/Zeal/releases)' section. You'll find the latest version available for download in a file named `zeal.zip`. Ensure that you have previously excluded your TAKP folder from virus scans, as discussed in the previous step. Click on *Assets* to expand and reveal the files underneath. Right click the `zeal.v#####.zip` link and select Save Link As..., and save the file to your TAKP folder. 
2. If you encounter any difficulties downloading the file, consider using an alternative browser such as Edge or Firefox. Alternatively, if you're using Chrome and experiencing issues, you may need to force the download by following the instructions [here](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/This-file-is-dangerous-so-Chrome-has-blocked-it-message-received-when-downloading-ZIP-files-from-BIM-360-Team.html).
3. Once downloaded, extract the contents of the zip file directly into the root directory of your TAKP folder. Make sure you see `zeal.asi` in your TAKP folder and if you encounter any trouble, your first step is to make sure `zeal.asi` is still in your TAKP folder.
4. Log into the game and type /zeal version to show the version number. /help zeal will output the command list.

#### UI Files for Zeal

Zeal comes prepackaged with a uifiles folder containing files modified to display new features found within Zeal. When extracting `zeal.zip` to your TAKP folder, it will place these files in your /uifiles/duxaUI/ folder, which is the default user interface when `NewUI=TRUE` and `OldUI=FALSE` in your `eqclient.ini`. 

![ChangeButton_ZealOptions](/img/step4/ChangeButton_ZealOptions.png)

However Zeal does not come with user interface files for every Zeal feature and your game chat window will show errors when playing. These are not harmful to your gameplay experience and can be ignored. EverQuest will identify which files are missing or broken and attempt to load them from the default folder instead. 

![uierrors](/img/step4/uierrors.png)

If you are following this guide, you can download a replacement UI from various sources such as [qqui Calmethar](https://www.eqinterface.com/downloads/fileinfo.php?id=6959), [eqinterface.com](https://eqinterface.com/downloads/index.php?cid=115&dp=0&sh=full&so=desc&sb=lastupdate), or from [#ui-discussion](https://discord.com/channels/1133452007412334643/1162826324092657757). Just make sure to check the date and description for Zeal additions.

If you are already using a custom user interface, you can determine which UI elements are missing Zeal features and causing errors by analyzing the `UIErrors.txt file` found within the root of your TAKP folder. An easy fix is to download another UI that has everything working such as [qqui Calmethar](https://www.eqinterface.com/downloads/fileinfo.php?id=6959), and just move the files you need into the UI folder you are using. Most user interfaces can be pieced together from different sources to achieve the look and feel you prefer.

### Step 5: dgVoodoo2 

[dgVoodoo2](http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/) is a set of implementations of old graphics APIs for Windows 7 and later versions. If you are still having problems with intermittent game crashes, this may help.

1. Download the latest version [here](http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/). Open the zip file and extract only dgVoodooCpl.exe to the root of your TAKP folder.
2. For Windows, inside the zip file, under /MS/x86/ copy all four .dll files to the root of your TAKP folder, overwriting any older files found.

    `D3D8.dll` `D3D9.dll` `D3Dlmm.dll` `DDraw.dll`

3. Run dgVoodoo.conf from within your TAKP folder.
4. Press the "./" in the upper right to select your TAKP folder.
5. Under Adapters, make sure your primary video card is selected.
6. Select "Windowed Mode".
7. Navigate to the DirectX tab.
8. Change VRAM to match your video card's VRAM.
9. Uncheck dgVooDoo watermark.

![dgVoodoo1](/img/step5/dgVoodoo1.png) ![dgVoodoo2](/img/step5/dgVoodoo2.png)

Source: [El Hefe](https://www.youtube.com/watch?v=ArLNnN0GwfQ)

### Step 6: Issues Running the Game

If you see any of these when trying to first run the game:

- windows application error
- the memory could not be read

This could be caused by WinEQ2 running in the background which is not compatible with this client. Exit the WinEQ2 application and try again.

It could also be caused when Directx 9c or a Visual C runtime is not installed. Try installing the following, rebooting and trying again:

- [Visual C 2015 runtime](https://www.microsoft.com/en-us/download/details.aspx?id=53587) - download the 32bit version
- [Directx 9c](https://www.microsoft.com/en-us/download/details.aspx?id=8109)
- Could also be that proper [antivirus exclusions](#prerequisite-2-required-excluding-your-takp-installation) are not set.

#### Set Compatibility

Navigate to your TAKP folder and find `eqgame.exe`. Right click and select Properties. 
Under Compatibility, select "Run this program in compatibility mode for Windows XP (Service Pack 2)". 

### Step 7: Launch the game

Run the `eqgame.exe` to launch the game. Click through the next few pages. You can choose to click on or off the luclin models here which is easier than changing it in your `eqclient.ini`. I do not recommend changing anything on the final screen though. 

![first1](/img//step7/first1.png)![first2](/img//step7/first2.png)![first3](/img//step7/first3.png)![first4](/img/step7/first4.png)

Once you are at the login screen, exit back out of the game and close it. In your TAKP folder, open your `eqclient.ini` and change the following settings.

- AttacOnAssist=FALSE (Optional, but Recommended)
- CombatMusic=FALSE (Unless you prefer immersion)
- EnableExtendedNameplateDistance=TRUE (Mandatory to see nameplates further than you can throw)
- [VideoMode]
- Width=1920
- Height=1080
- [Options]
- MaxBGFPS=60
- NoFPSLimiter=0 - **This option will only work with the very latest experiemental .dll and this is half the fix for the 3rd person stutters you previously experienced in older versions of Quarm. SET TO 0**

You can now run `eqgame.exe` again and log into the game. Once you log into your character, you will be looking at the default "NewUI". Press ALT + O to open the options menu. Navigate to Genearal and select Load UI Skin. Select `duxaUI` for now and click Load Skin. This will allow you to open options again with ALT + O and modify the new Zeal settings as well. 

![loadui](/img/step7/loadui.png)

Below are some recommended Zeal specific changes you should consider before you start your adventure. 

![zeal1](/img/step7/zeal1.png)![zeal2](/img/step7/zeal2.png)![zeal3](/img/step7/zeal3.png)![zeal4](/img/step7/zeal4.png)![zeal5](/img/step7/zeal5.png)

Ths concludes part 1 of the guide.

## Xanax's Checklist for Minimal Crashes

I wrote this guide because half of my guild seems to crash when they zone in and out of the planes. Everyone is on different pieces and versions of this game. Meanwhile I've thrown most of this guide into 3 different game folders and they all work well, only crashing occasionally when I drop to character select, or if I change my audio output source. Here's what I'm using:

1. 2.2 version of TAKP.
2. Secrets's experimental .dll from zeal-discussions.
3. Excluded TAKP folder from antivirus scanning.
4. Always running the latest Zeal unless it contains a specific bug I want to avoid. Always keep previous versions backed up.
5. dgVoodoo fix
6. Directx 9c (Windows said I had a newer version of Visual C already installed, so I didnt download the one above.)
7. Running program in compatibility mode for Windows XP (Service Pack 2).
8. Also running several muted sound files, EQ Basic 1.1, KaichoFX Spell Effects, and the game looks absolutely amazing!

If you ask me, 2 & 3 are the biggest contributors to stability. A lot of people seem to need the dgVoodoo fix though, especially if they have integrated graphics, so thats also important. Hopefully we can lessen these crashes and work towards fixing the rest over time.

# Part 2: After Installing the Main Game <br> [Video Guide for Part 2&3 HERE](https://www.youtube.com/watch?v=tmU_5kBZbu8)

### Step 1: Understanding your EQClient.ini

The `eqclient.ini` file contains a list of settings that can be changed to suit your preferences, many of which cannot be changed in-game through the options window.

In Windows, the `eqclient.ini` is located within your EverQuest directory, wherever `eqgame.exe` resides.

Some commonly changed settings include:

- WindowedMode=TRUE/FALSE - This line must be typed out at the top but below [Defaults]. **Recommended set to FALSE**
- NewUI=TRUE/FALSE - Our client still has the old pre-Luclin UI for nostalgia mode. **Recommended set to TRUE**
- Log=TRUE/FALSE - Setting this true will automatically turn your log file on when entering the game. **Set to FALSE by default. Still seems to create chat logs though.**
- CombatMusic=TRUE/FALSE - Enable or disable melee combat music. **Recommended set to FALSE**
- ChannelAutoJoin=alliance - The Alliance channel is used as the global chat channel for the server.
- ChatKeepAlive=1 - Keeps the above chat channel from disconnecting by periodically sending communciatin to it.
- TargetGroupBuff=1 - This will allow you to buff groups with group buff spells from outside the group by targeting a member of the group. **Default set to 1**
- AttackOnAssist=FALSE - This will allow you to assist another player without automatically enabling auto attack. 
- MaxFPS= - This is the framerate you limit the foreground client window to. If this is set too high, it may consume too many system resources. Typically 60 is a good number to start with and adjust if necessary. A setting of 0 disables the limit.
- MaxBGFPS= - This is the framerate you limit the background client windows to. You don't want this too low, since it will affect autofollow ability. But, if you have it too high, it may consume too many system resources. 60 is typically good. A setting of 0 disables the limit.
- MouseRightHanded=1 - Switches mouse button orientation.
- MaxMouseLookFPS= - Allows you to set the mouselook FPS to help with mouselook slowness. If your mouselook is too slow, try adjusting this to 60 or 45. A setting of 0 disables the limit.
- AllLuclinPcModelsOff=TRUE - This disables Luclin models. This also allows use of the famous horse bug that existed on AK where you don't have the limitations of horse speed up/down that you do with Luclin models on.
- UISkin= - Sets your default UI skin. **I changed this value and it did nothing. Change in game.**
- [VideoMode]
- Width=1920
- Height=1080
- RefreshRate=60
- (match your display settings with the proper height and width prior to launching the game)`

- Velious armor textures:

- AllLuclinPcModelsOff=FALSE
- LoadVeliousArmorsWithLuclin=TRUE
- LoadArmor17=TRUE
- LoadArmor18=TRUE
- LoadArmor19=TRUE
- LoadArmor20=TRUE
- LoadArmor21=TRUE
- LoadArmor22=TRUE
- LoadArmor23=TRUE

Velious armor textures are not enabled by default as they can cause an issue with Vah Shir armor not displaying. Most players would probably prefer them on however. [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows)

There are some other flags that seem to be unique to Project Quarm [Source: #tech-help](https://discord.com/channels/1133452007412334643/1133453502182596729/1177702642173087864). Some of these will only appear if you're using the latest .dll and only after logging into the game once. 

- [Options]
- MaxFPS=60 - These are similar to the ones above. Your goal is to set them as high as you can to match your display's refresh rate.
- MaxBGFPS=60
- MaxMouseLookFPS=60
- WindowedMode=TRUE
- MouseRightHanded=1
- NoFPSLimiter=0 - **This option will only work with the very latest experiemental .dll and this is half the fix for the 3rd person stutters you previously experienced in older versions of Quarm. SET TO 0**

- EnableBrownSkeletonHack=FALSE - We had problems getting the correct skeleton models at first and some people like the brown ones. You can set this to TRUE or you can go find skeleton model replacements under Part 3. 
- EnableExtendedNameplateDistance=TRUE - Added after the 10/8/2023 .dll update that extended the nameplate distance.
- EnableClassicMusic=FALSE - Changes the music from old to new.

Zeal also has a number of `eqclient.ini` values that are saved here and this list will likely grow over time. 

- MouseSmoothing=TRUE - This fixes the jittery 3rd person camera movement that is exclusive to the TAKP client. The mouse sensitivity values below are all extensions of this. Make sure they're never set to 0 or else your camera will not move on that axis.
- MouseSensitivityX=0.300000
- MouseSensitivityY=0.300000
- Fov=45.000000
- ChatTimestamps=TRUE - Zeal feature that adds chat timestamps in HH:MM:SS. 
- MouseSensitivityX3rd=0.300000
- MouseSensitivityY3rd=0.300000
- Camera3StrafeEnabled=TRUE 
- Camera4StrafeEnabled=TRUE
- PanDelay=20
- CycleToZealCamEnabled=TRUE
- Bluecon=TRUE - When a mob cons dark blue the text is difficult to read on a black background. This will add a new value to the Options - Color tab with a value of 70.
- ZealInput=TRUE - toggles the zeal input setup for any input in game, giving you a more modern input (ctrl+c, ctrl+v, left, right, shift left+right for highlighting, home, end ect).
- LeftTurnSpellbookAutostand=FALSE
- RightTurnSpellbookAutostand=FALSE
- NetstatVisibilityState=TRUE
- LeftStrafeSpellbookAutostand=TRUE
- RightStrafeSpellbookAutostand=TRUE
- PanDelay=20 - Zeal adds the ability to left click and hold to move the camera in 3rd person without moving the character. To prevent misclicks, you can add a delay to this functionality.

### Step 2: Controlling your User Interface

The supported client comes with several additional custom UIs. To switch to one of these, run the slash command `/loadskin <ui> 1`. The 1 is optional-- it will keep your current window positions. Loading UIs via the options window will not work. [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows#EQClient.ini_settings)

There are several sources to download new User Interface packages, such as [qqui Calmethar](https://www.eqinterface.com/downloads/fileinfo.php?id=6959), [eqinterface.com](https://eqinterface.com/downloads/index.php?cid=115&dp=0&sh=full&so=desc&sb=lastupdate), or from [#ui-discussion](https://discord.com/channels/1133452007412334643/1162826324092657757). Just make sure to check the date and description for Zeal additions.

#### How Do I install an Interface?

1. Download your chosen interface.

2. Find the folder in your EverQuest directiory UIFILES inside there will be a folder Default*.

3. Create another folder beside Default, for our example we will call it "BARD" (You can not have spaces in the name). If the file you downloaded already contains a folder, you should skip this step. 

4. Unzip all of the files from your download into the folder "BARD"

5. Login to EverQuest. In game, type `/loadskin BARD`. This will select the BARD UI and load it. The screen will look like your zoning for a moment, then load your new UI modifications. Typing `/loadskin BARD 1`, the 1 is optional-- it will keep your current window positions. Press ALT + O to open the options menu. Navigate to Genearal and select Load UI Skin. Select `BARD` for now and click Load Skin.  

*The default folder CAN NOT be altered in any way. Any changes made to this folder are overwritten  at start up of the game.

#### Where should my files be saved?

The should be saved in a single level folder. One of the most common reason that UI's wont load is that there is a sub-folder inside the Custom UI Folder. Here are two pictures one showing the wrong way, and one showing the correct way. 

![wrong-way](/img/step2/wrong-way.jpg) ![correct-way](/img/step2/correct-way.jpg)

[Source: eqinterface](https://www.eqinterface.com/forums/faq.php?faq=install#faq_howto_install)

#### Duplicating your UI Settings for New Characters

Inevitably you'll create multiple characters during your time on Project Quarm. However you do not have to choose a UI and move every window for each character. You can easily copy all of your UI positions by understanding your UI log files. In your TAKP folder you will find files with the naming convention `UI_charactername_pq.proj.ini`. If you identify the one for your main character, the one who has their UI set and all the window positions perfect, you can simply make a copy of this file and rename it to the name of your second character. When you log into the new character, your UI and window positions should now match your first character. 

`UI_Xanax_pq.proj.ini` Copy, Paste `UI_Xanax_pq.proj - Copy.ini` rename to `UI_Xantagonist_pq.proj.ini`

### Step 3: Characters, Logs, Spell Sets, and Screenshots

#### Character ini for Friends Abilities Socials and Macro Settings

The above file duplication and renaming trick we used with our UI settings can be used for other saved settings as well. `charactername_pq.proj.ini` contains all of your friends, ignore, abilities, combat skills, and social macros. Any time you make a new character, you should consider duplicating this file as well and renaming the copy to your new character. The ability and macro copying is a mixed bag, but it's important not to lose your friends. 

#### Chat Logs

Everything you see in your chat windows is written to a log file in your TAKP folder. Back in the original EQ days we would delete this every month because the file would get big and make the game act up. Everything you see in this file, the CSR team for Project Quarm can also see and is likely being logged on their end. `eqlog_charactername_pq.proj.txt` is the file that all your chat logs are written to. This can be helpful if you need to pull historical chat conversations, for example. 

#### Spell Sets

Zeal has added the ability to make spell sets. Commands in game are as follows:

`/spellset`

- Arguments: save, load, delete
- Example: /spellset save buffs
- Example: /spellset load buffs
- Example: /spellset delete buffs
- Description: allows you to save and load spell sets

Once created, you can even right click your spellbook to choose one of your spell sets from a drop down menu. These values are saved in a new file called `charactername_spellsets.ini`. Within these you can then rename your spellsets or duplicate the file for someone playing the same class as you, for example. 

#### Screenshots

Screenshots can be taken by pressing PRINT SCREEN within the game, and can be changed within the Options. These are saved in your TAKP folder as `EQ000001.bmp` for example. 

# Part 3: Installing Optional Textures and Effects <br> [Video Guide for Part 2&3 HERE](https://www.youtube.com/watch?v=tmU_5kBZbu8)

You can install various texture packs and visual effects to enhance the game's appearance.

#### Classic HD Textures

EQ Classic HD is an ongoing project by Cucumbers, Paulgiamatti, Sorn, and Zaela to graphically enhance, upscale, retexture, and reimagine classic EverQuest. They primarily deal with textures, but their package also corrects some minor transparency, particle, and model animation issues. 

- [Wiki Link](https://wiki.project1999.com/EQ_Classic_HD#The_Al.27Kabor_Project_version)
- *Note: The link contains special instructions for applying these textures to the Al'Kabor Project (TAKP).*

To install Classic HD Textures, first make sure you're downloading the [The Al'Kabor Project version](https://drive.google.com/file/d/0ByJldqMGux7CVUh6a2taTWlndmM/view?usp=sharing&resourcekey=0-CzMD3Z47SRVJ6NNjLXql5w). Open the downloaded zip file. The archive contains an installer and uninstaller you can use. Manually, you can extract or copy the .S3D files contained in the EQClassicHD folder to your EverQuest directory (overwrite if you left the old ones in). To uninstall, copy your backed up files back into your EverQuest directory and overwrite. Install and uninstall.bat can be deleted or ignored. 

#### EQ Basic 1.1

EQ Basic is a FULL graphics overhaul of Everquest, specifically for P99 Green/Blue (Classic, Kunark, Velious). This includes all zones, objects, character models, equipment(Including epics), mobs and spell effects! 

- [Source](https://www.reddit.com/r/project1999/comments/10rz5r0/eq_basic_v11_an_eq_graphics_overhaul_project/)
- [Download](https://drive.google.com/file/d/1PbP9Pwnjkaw4-cgN7_as8SL8PAKQlYGB/view)

To install EQ Basic 1.1 download and extract the `.7z` archive to your TAKP folder, overwriting files when prompted.

#### Old EQ Spell Gems/Particle Effects/Music

This is everything you can do to get EQ back to as close to a classic feel as possible.

- [Reddit Link](https://www.reddit.com/r/everquest/comments/36ovuk/howto_old_eq_uispell_gemsparticle_effectsmusic/)

Various installation instructions for the different parts can be found within the Reddit link provided above.

#### KaichoFX Spell Effects

Kaicho has been working on their passion project, creating new spell effects, particles, and animations for EverQuest. You can find an example during one of his streams [here](https://clips.twitch.tv/SuaveEnergeticGalagoMingLee-lhitQb6LALq3BUHv).

- [Reddit Link](https://www.reddit.com/r/ProjectQuarm/comments/17h98xq/comment/k6prhur/)
- [Download](https://drive.google.com/file/d/1zXoiMFk-Z-f2Qc6tI9ZUJjfR98rVdLoK/view)

To install KaichoFX, download the zip file from the above link. Rename your current SpellEffects folder inside your EQ folder to something like "SpellEffectsBACKUP" to save original copies in case you want to revert back. Create a new folder called SpellEffects inside your EQ folder. Extract the KaichoFX files into your new SpellEffects folder.

#### Sound File Fixes

This link provides edited sound files to change the volumes of certain annoying sounds like rain and wind/snow. Scroll down to locate khanable's post.

- [TAK Project Forum Link](https://www.takproject.net/forums/index.php?threads%2Fwindows-10-ambient-noise-too-loud.8234%2F)
- [EMT_0% Volume](https://www.dropbox.com/s/wv4i1sme0uxb422/EMT_0%25.zip?dl=0) (set to 0.0 - music works, NO environment sounds)
- [EMT_25% Volume](https://www.dropbox.com/s/lz853tlc3of4xt5/EMT_25%25.zip?dl=0) (set to 0.25 - music works, 25% volume on environment sounds)
- [EMT_50% Volume](https://www.dropbox.com/s/nn5f4elgdbpc07c/EMT_50%25.zip?dl=0) (set to 0.50 - music works, 50% volume on environment sounds)

To install, open your TAKP folder, sort by type. Locate all the EMT files. Move them into a folder to have a backup. Extract the .zip file into your TAKP directory. Log out/back in.

#### Old Skeleton Models

Simple tool for patching `gequip5.s3d` and `global6_chr.s3d` to enable classic EverQuest skeletons.

- [GitHub Link](https://github.com/nickgal/EqSkelePatcher/releases)

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

# Part 4: Installing Optional 3rd Party Programs

These programs add functionality not found in the game client by reading your EverQuest player log files. Programs that use hooks to inject code into the game are now allowed, with the one exception being Zeal.

#### GINA

A log monitoring application that provides audio and visual feedback based on triggers you either define or import.

- [Official Website](https://eq.gimasoft.com/gina/Default.aspx) | [Supplemental Documentation](https://kingdomdkp.com/index.php/Guides/Tools/How-to-installing-gina--basic-functions.html?)

#### EQ Nag

An EverQuest notification agent. An alternative to GINA.

- [GitHub Releases](https://github.com/guildantix/eq-nag/releases) | [Documentation](https://guildantix.github.io/eq-nag/)

#### NParse (TAKP Fork)

Provides player location and spell tracking support for TAKP by reading the player log.

- [GitHub Link](https://github.com/hitechhippie/nparse-takp)

#### Quarm Tool

Log parser containing 3D Maps, Timers for everything, damage meters, and mob info.

- [GitHub Link](https://github.com/EJWellman/QuarmTool)

#### ZlizEQMap

ZlizEQMap is a map tool mainly designed for servers that emulate old versions of EverQuest. It features a local database of maps from the old EQAtlas website (now hosted on allakabor.com and tessmage.com), along with player positioning (x plotted on map), transparent overlay, waypoints, zone connections, and more.

- [GitHub Link](https://github.com/hada79/ZlizEQMap)

#### Keilly's Supplemental Maps for ZlizEQMap

These are new maps made to work with ZlizEQMap and you'll find your location and coordinates will be more accurate using these over the EQAtlas maps. Maps are for the most part larger than the ones from EQAtlas used in ZlizEQMap, and are best suited for use on a second monitor.

- [Forum Thread](https://www.project1999.com/forums/showthread.php?t=386944)

- Full Download [Link](https://drive.google.com/file/d/1pL1ZO3XK0YnD_R0vHnJXfM5tPvJ-oow5/view?usp=sharing)
- List of complete maps [Link](https://docs.google.com/document/d/1VJxxSNRf5iNO10NxSkjl3zRJMcdNfARie30ZRSPSF9I/edit?usp=sharing)
- About Keilly's Maps [Link](https://docs.google.com/document/d/1BR7wYrMjGYglFul0587bf5G08lQGsAGxQGn7_4hKuDw/edit?usp=sharing)
- Release Notes [Link](https://docs.google.com/document/d/10UuQP3bryrX8Sv5S0x9BH6hJttRCLtKWPy8riOgwRu8/edit?usp=sharing)
- How to use Keilly's Maps in ZlizEQMap [Link](https://docs.google.com/document/d/17lQBWhthpMA9JGI9GfKN2wCRlaR1a1HKEMyhJtrVnnQ/edit?usp=sharing)

#### EQ Tell Notifier

Desktop notifications for tells received in game.

- [GitHub Link](https://github.com/rtcox/EQ_tell_notifier/tree/main)

#### Lossless Scaling

Lossless Scaling allows you to scale windowed games to full screen using the state-of-the-art scaling algorithms, as well as use ML based proprietary scaling and frame generation.

- [Steam Link](https://store.steampowered.com/app/993090/Lossless_Scaling/)

#### Borderless Gaming

I don't use this with EQ but I need to mention it alongside Lossless Scaling. I use it with my 4k OLED monitor to remove the Windows border around games sometimes to prevent OLED burn-in. It's pricey on Steam but free on Github.

- [GitHub Releases](https://github.com/Codeusa/Borderless-Gaming/releases)

## Part 5: Third Party Websites

I was hesitant to make a list as they seem to pop up and go stagnant pretty quickly. There's a couple Quarm specific sites you need to know about though.

### Project Quarm Database Interface 

- [pqdi.cc](https://www.pqdi.cc/) This site pulls data directly from the Project Quarm database, so everything is super accurate. Invaluable on your adventure.

### EQTunnelAuctions

- [eqtunnelauctions](https://www.eqtunnelauctions.com/) Allows you to look up items recently sold in the EC tunnel and compare price trends.

### TAKP Wiki

- [TAKP Wiki](https://wiki.takp.info/index.php/Main_Page) p99 Wiki is great for user content, but its not accurate to Quarm in many cases. TAKP Wiki doesn't have as much user content, but it's more accurate so keep that in mind.

### AllaQUARM

- [AllaQUARM](https://eqtunnelauctions.com/alla/) Quarm's version of Allakhazam, also pulls from the database like PQDI. 

# About Project Quarm ![Secrets](/img/Secrets.jpg)

[Follow SecretsPast on Twitch](https://www.twitch.tv/secretspast)

### Main Ruleset

- Time-Locked Progression Server - 9 Months of Classic, 9 Months of Kunark, 9 Months of Velious, 9 Months of Luclin, Planes of Power final expansion.
- Planes of Power may contain custom mechanics post-PoP, such as rotating hotzones.
- One-Box Policy, enforced by IP & manual CSR intervention. [#petitions](https://discord.com/channels/1133452007412334643/1153470935421157396)
- Era restrictions apply to prevent out-of-era mechanics. This is done selectively.
- MGBs at level 1, and other 'TAKP-like' features are enabled selectively. For example, Monk AC is in its 'pre-nerf' state.
- Selective Clientside Quality of Life - Mouse Wheel Camera, Buff Timers, Auto-Stand on Cast. Additional QOL have been added through [Zeal](#step-4-installing-zeal).

### Optional Self Imposed Rulesets

These three rulesets may be toggled on independently or all at once at Level 1 at any Priest of Discord. 
The process of doing so resets your character and all of its data to as if it had just spawned in the game world, and prevents future ruleset toggling.

#### Self Found
This is a gametype that restricts interactions with standard ruleset players. This is more akin to a "Group Self Found / Group Ironman" ruleset if enabled by itself.
The following restrictions are imposed:
- You cannot group or raid with players who are not also playing the Self Found ruleset.
- You cannot be buffed or healed by other players who are outside of your experience credit range.
- You cannot trade with other players.
- You cannot purchase items from merchants that aren't already on the merchant.
- You cannot loot items that were handed to an NPC by a player off of the NPC's corpse.
- You cannot sell or buy items in The Bazaar.
- You cannot pick up dropped items on the ground that are dropped by other players. Standard ground spawns do not apply to this rule.
- You cannot loot items from 'opened' corpses. You must receive initial experience credit per the ruleset to loot the item(s) you wish to loot.
- You cannot loot items from corpses of mobs you weren't in a group or raid experience credit range of.
- You must engage a creature at 100% HP to receive experience or loot for yourself, your group or your raid, and deal at least 50% of the mob's health in damage to receive experience.
- *NOTE: Normal damage rules additionally apply to the target for experience credit. The NPC regenerating to 100% HP will reset this flag.*

#### Solo Only
This is a gametype that restricts interactions with all other players, including other ruleset players. The restrictions here override the restrictions in Self Found if they would conflict. This is akin to a "Solo Self Found / Ironman" ruleset found in other games.
The following restrictions are imposed:
- You cannot group or raid with other players.
- You cannot be buffed or healed by other players.
- You cannot trade with other players.
- You cannot purchase items from merchants that aren't already on the merchant.
- You cannot loot items that were handed to an NPC by a player off of the NPC's corpse.
- You cannot sell or buy items from The Bazaar.
- You cannot pick up dropped items on the ground that are dropped by other players. Standard ground spawns do not apply to this rule.
- You must engage a creature at 100% HP to receive experience or loot for yourself and deal at least 50% of the mob's health in damage to receive experience. Normal damage rules additionally apply to the target for experience credit. The NPC regenerating to 100% HP will reset this flag.
- You cannot loot items from 'opened' corpses. You must receive initial credit per the ruleset to loot the item(s) you wish to loot.

#### Hardcore
This is a gametype that will result in permanent deletion of your character upon your first death above the item loss level. This is also known as a "Permadeath" ruleset found in other games.
There are no restrictions like the rulesets above have, but this may be toggled on in addition to the above two rulesets.
- *NOTE: Characters who have hit a milestone under the hardcore ruleset that die will be broadcast to the entire server. Their corpse will instantly decay and the character will be reset.
There will be no character recovery after a death.*

### Gameplay Changes

- No 'Out of Group Range' exploit - a player who is physically out of range of other players may not receive an experience bonus as if they were in a group.
- Tradeskill containers will delete nodrop items for everyone, including the player who placed it there.

The following zones have 'pull limits' and when you aggro a quantity of mobs over these numbers, they will instantly teleport on you instead of chase you:

- hohonora    Halls of Honor    15
- pofire    Plane of Fire    15
- povalor    Plane of Valor    20
- solrotower    Tower of Solusek Ro    20
- podisease    Plane of Disease    25
- poeartha    Plane of Earth    25
- poearthb    Plane of Earth    25
- ponightmare    Plane of Nightmares    25
- postorms    Plane of Storms    25
- potactics    Drunder, the Fortress of Zek    25
- vexthal    Vex Thal    28
- skyfire    Skyfire Mountains    30
- poinnovation    Plane of Innovation    40
- pojustice    Plane of Justice    40
- potorment    Torment, the Plane of Pain    40

#### Reduced Respawn Timers & Anti Kite 

For launch, we will impose a limit on the amount of mobs that can be pulled in newbie zones to 4. Anti Kite code will be applied after 4 NPCs are pulled. This is to prevent folks from monopolizing zones with PBAOE classes early on.

Newbie zones will also have a reduced respawn rate on all NPCs. NPCs between 12 and 60 second respawns will be reduced to 12 seconds. NPCs between 61 seconds and 499 seconds will be reduced to 60 seconds.

Newbie zones are normally major cities with newbie yards, and adjacent stomping grounds such as South Ro, East Commonlands or Qeynos Hills.

This restriction will be removed after zones thin out or 7 days, whichever comes sooner. 

### Timeline

Time-Locked Progression system, with 9 months between each expansion. Classic -> Kunark -> Velious -> Luclin -> Planes of Power. Incremental patches will occur every 3 months.

#### Classic (1.x) (October 1st, 2023)

1.0 (Launch)
- Paineel is in on launch. The Hole and The Warrens are closed.
- Runnyeye does not drop Alloy items, and the sporali have not moved in.
- Legacy Items are enabled:
 * Manastone
 * Rubicite Armor
 * Guise of the Deceiver
 * Journeyman's Boots (Drelzna)
- EXP / ZEM - Pre Velious, Classic EQ ZEMs
- A single pet dealing 50% or more will reduce solo experience at 50% or equal to one group member weight of the pet's level if grouped.
- Wizards keep later xpac  innate crit chance.

Classic 1.3: January 1st, 2024 (3 months)
- The Temple of Solusek Ro opens.
- The Classic Planes (Hate, Fear, Sky) open. - Cazic-Thule is a hybrid of Kunark and Velious CT. Innoruuk is a hybrid of pre and post revamp Innoruuk.  (Immunities to slow, snare, fear, root, paci, etc, but not resist immune)
- Legacy Items are disabled from Classic 1.0

Classic 1.6: April 1st, 2024 (2 months)
- The Hole opens.
- Bloody Kithicor / Firiona Vie / Lanys T'vyl GM event
- Lustrous Russet Armor stops dropping.

#### Pre-Kunark (1.9) (June 1st, 2024)

Classic 1.9: June 1st, 2024 (1 month)
- Special event: 1 month Kunark-Locked Iksar early access (Level Cap 50, some zones restricted)

#### Kunark (2.x) (July 1st, 2024)

Kunark 2.0 (July 1st, 2024))
- Kunark is accessible.
- Iksar creatable.
- Nurga and Droga pre revamp
- Chardok pre revamp.
- Level Cap 60, 0 AA
- Legacy Items enabled.
- Epic Items enabled.

Kunark 2.3: October 1st, 2024 (3 months)
- Cazic Thule / Innoruuk given minor damage boost over classic.

Kunark 2.6: Jan 1st, 2025 (2 months)
- Kunark Legacy Items 'disabled' and no-trade versions of legacy loot are added.
- A single tradeskill allowed above 200 is added.

Kunark 2.9: March 1st, 2025 (1 month)
- Pre-Velious patch.
- Gnomes appear, wanting help crafting a new feat of gnomish engineering that will allow their expedition to reach an island they saw in the distance...

#### Velious (3.x): April 1st, 2025

Velious (3.0): April 1st, 2025 (3 months)
- Velious opens.
- Level cap remains 60.
- Runnyeye revamps.
- Warrens and Stonebrunt quests NPCs enable.
- Legacy Items enabled.
- Seaworthy planking is enabled as a rare spawn.
- EXP/ ZEM rules change to Velious group bonus / Velious newbie ZEM boost.
- Sleeper's Tomb is unavailable at launch.

Velious 3.3: July 1st, 2025 (3 months)
- The Planes of Hate and Fear revamp.
- The Sleeper's tomb opens.
-Seaworthy Planking is disabled.

Velious 3.6 October 1st, 2025 (2 months)
- The Warrens and Stonebrunt opens.
- Legacy Items are 'disabled' for Velious (eg; no trade beads, BFG)

Velious 3.9 December 1st (1 month)
- Chardok revamps.
- Pre-Luclin milestone.
- Vah Shir Beastlord & Vah Shir early access event up to Level 30, Luclin locked, select zones available

#### Luclin (4.x): Jan 1st, 2026

Luclin 4.0: Jan 1st, 2026 (3 months)
- Beastlords enabled for all races
- Vah Shir can leave Luclin
- AAs are enabled. 30 may be banked after fully maximizing.
- Entire raid content selection available
- No Legacy Items introduced
- Luclin era Harmony mechanics introduced
- Focus effects enabled
- Elemental damage enabled
- Recommended level enabled
- Bane damage enabled
- AC softcaps introduced 
- Shield AC bonus introduced
- Newbie Zone Population revamp
- All Newbie armor and weapon quests introduced

Luclin 4.3: April 1st, 2026 (3 months)
- Luclin-Era Zone Experience Modifier Revamp

Luclin 4.6: July 1st, 2026 (3 months)
- Cazic Thule (the zone) 2.0

Luclin 4.9:
- None, see above

#### The Planes of Power (5.x): (October 1st, 2026)

Planes 5.0: October 1st, 2026 (3 months)
- Level Cap of 65.
- Planes of Power AAs are enabled.
- Traditional flagging introduced.
- Instances of flagging targets available with loot lockouts (Quakes Disabled in Planes zones initially)

Planes 5.3: January 1st, 2027 (3 months)
- Earthquakes enabled in T1 and T2 zones.
- Backflagging enabled (85 / 15 rule)

Planes 5.6: March 1st, 2027 (2 months)
- Earthquakes enabled in T3 / Elemental Planes 
- Druzzil's influence wanes over her ability to reset the events of the Plane of Time.

Post Planes, 5.9 April 1st, 2027, (1 month)
- Earthquakes enabled in the Plane of Time
- Druzzil Ro 'door boss' fight
- Project Superscalar work kicks into high gear.

### Legacy Items

There are no longer permanent loot lockouts from legacy items. However, there will be an individual character-based loot lockout on all legacy items that are obtained through looting. The lockout is a month long.
- *NOTE: This is so that if you lose a legacy item due to an untimely death and you lose your corpse, you are able to loot another one in a way that doesn't involve a CSR.*
- *NOTE2: All existing lockouts have been converted to loot lockout legacy items, lasting 30 days from the release of 1.3 content.*

There are a number of revamps to Time-Limited Legacy Items. These new versions will be functionally identical, require specific levels to acquire, and will all be no drop. The Time-limited factor will only apply to legacy items that are able to be traded, and are traditionally time-limited, nerfed, or removed in EQ's timeline that we select to be. They are, currently, as follows:
- Manastone -> Manarock (30) (Functionally Identical)
- Rubicite Armor -> Pinkicite Armor (25, 30) (It's Pink, Functionally Identical)
- Thex Dagger -> Thexian Shiv (0) (Faction Requirement)
- Scimitar of the Mistwalker -> Falchion of the Mistwalker (30) (Functionally Identical)
- Lustrous Russet Armor -> Brilliant Russet Armor (46) (It's Teal, Functionally Identical)**
- *NOTE:* **The above will be available indefinitely, even after an item's removal.*

The following items will stay in the game indefinitely.
- Ring of the Dead (We may opt to make zones unable to be bound in, however.)
- Guise of the Deceiver (30) (We feel that it's unfair to make this go away for those who haven't obtained one, and it is otherwise no trade. Its level requirement stays, however)
- Journeyman's Boots (20) (We feel as though the contested nature of the creatures that would award jboots through the quest are not worth the headache for players, and our legacy item system better suits the milestone for players.)

Items that are deemed too powerful but are otherwise consumable (like Dragon Teeth) will see these items no longer drop at all.

The following items are not traditionally legacy items in EverQuest, but have seen a legacy flag added to ease camp congestion. They will not be removed at all at any point during the timeline, nor will spawns be eased:
- Bag of Sewn Evil Eye (30) (Staying indefinitely)
- Fishbone Earring (20) (Staying indefinitely)
- Glowing Black Stone (15) (Staying indefinitely)
- Robe of the Oracle (25) (Staying Indefinitely - Changes to Standard in Kunark)

### Private Guild Instances and Quakes

Due to overwhelming player feedback about casual accessibility, and my own intuition on the subject, we've overhauled how raid rotations work - by scrapping them and replacing them with private guild instances. Don't worry, competition is still available via an overhauled Earthquake system!

- Guild instances are accessible via the Knowledge book near any adjacent-to-raid zone where the tryout books were formerly present.
- Guild instances require an officer from your guild, 12 guild members, and 18 players total in a raid to enter, as well as the requirement of all members in your raid being over level 30.
- Guild instances have a combat engagement requirement equal to the above. If you do not meet the engage requirement above, players are forced to their bind point on any combat action, including friendly heals.
- Guild instances have heightened respawn when compared to normal instances. This means that every raid creature may not share the same timer as open-world creatures.
- If your corpse becomes unretrievable in a guild instance, fear not: The Graveyard system from Planes of Power is active in these zones, and your corpses will be dispensed every 2 hours to the adjacent zone where the zone-in book is located.

Guild instances do not award loot for any other creature than the raid target(s) in question. For the current instances, this is the following:
- Nagafen's Lair (Instanced)
- Lord Nagafen - 7 Days
- Giants (all) - 24 Hours

- Permafrost Caverns (Instanced)
- Lady Vox - 7 Days

- Kedge Keep (Instanced)
- Phinigel - 24 Hours

Please note that if not otherwise specified, creatures in instances have 24 hour respawn rates, and give significantly reduced experience. (virtually nothing) Guild creation has been disabled via petitions until a lockout system has been created for the Guild Instances.

- EarthQuake revamp
- Earthquakes are now scheduled to occur every 3 to 7 days.
- Earthquakes now have a duration of three (3) hours.
- Earthquakes no longer have a ruleset. Server Rules 9.x and 10.x are suspended during earthquakes for raid zones. Please assume that if your zone doesn't give a message about NPCs being re-popped, that you still have to adhere to rules 9.x and 10.x still.

The current zones considered to be raid zones are:
- Permafrost Caverns
- Nagafen's Lair
- Kedge Keep

On an earthquake triggering, everyone in the zone is evacuated to the zone-in to ensure fair competition. If you wish to avoid the evac, position yourself outside of the zone. Earthquake timers are now visible to guild leaders and officers ahead of their trigger time. No more batphones. Typing '#showquake' will allow a guild officer or leader to view the next earthquake time. Earthquakes no longer have guild engage requirements due to the rule 9.x and 10.x suspension during the three hour period, and thus can be pickup grouped.

### Planes

#### The Plane of Fear, The Plane of Sky, and The Plane of Hate are all open! 

Please note that the following changes were made to the zones for Project Quarm:

- All boss creatures will not appear in the Open World until an Earthquake.
- Instanced trash will drop loot and will not lock players out, but will have heightened respawn timers.
- Open world trash will retain its normal respawn timers.
- Quests are enabled in all open world / instanced versions of Sky, Hate and Fear.
- Almost every Epic piece, outside of some select Sky pieces, will not drop in the Plane of Sky, Fear, or Hate.

#### Fear:

- Slime Blood of Cazic Thule will drop in place of Skin of Cazic for all eras, however this item will be locked to Kunark.
- The Golems in Fear are their 51/52 selves - they will not drop any loot until Kunark. This is normal, as they only would drop epic pieces. They do not death touch, which is era-accurate. Do not report this with a bug.
- Cazic-Thule is his level 55 self. He has fairly low resistance for his level, however, he now has his Velious-era crowd control immunities.
a dracoliche is its level 53 self, with Rotting Flesh & Dragon Roar. a dracoliche does not gain its lifetap until the Velious-era revamp.
- Class armor and Lustrous Russet drop indefinitely.
- Irak & Wraith of a Shissar are Kunark gated.

#### Hate:

- Mini-bosses are not present until Velious.
- Innoruuk does not have his revamped loot table. Most of the loot that would drop off of minis have been moved to Innoruuk per classic timeline.
- Maestro of Rancor has his classic-era loot table. Yes, this includes the Basoon Haste Gauntlets, which are not considered a Legacy Item for the sake of this timeline.
- Hand of the Maestro spawns separate to the Maestro of Rancor from the get-go, however the hand item is Kunark gated.
- Class armor is available from the beginning from all trash.
- Staff of Elemental Mastery: Earth is available even in classic. However, Staff of Elemental Mastery: Fire will not drop until Velious.
- Most Kunark Epic Quest loot are otherwise unavailable until Kunark.
- The Book of Souls is not up. For real, I'm not lying, I didn't pick up the book. It will return in Kunark.

#### Sky:

- Open World: All boss creatures will be spawned upon an Earthquake occurring without any scripted encounters needing to be completed
- Keys are no longer no rent, and will be added to the keyring.
- Instance: You must complete the instance by progressing through it normally.
- Instance: Keeper of Souls now spawns instantly on the death of a soul tamer without a waiting period. However, it is not possible to trigger multiple Keeper of Souls within the same 18 hour period.
- You may only interact with the Key Master in Open World for the purpose of interacting with him as a merchant.
- A huge thanks to Torven of EQEmulator for parsing a ton of information related to combat and flavor text ahead of launch in the Plane of Sky and giving it the proper TLC it deserves. Thanks to you, the information contained in the Plane of Sky will be preserved indefinitely

#### Welcome to the Ruins of Old Paineel, also known as The Hole! 

This zone is being released ahead of Kunark, which is a major departure from EQ's original timeline. It's our team's personal opinion that the items contained within The Hole aren't significantly powerful, and that releasing The Hole early is quite a treat for folks who are historically used to having to play it in Kunark.

- Most Epic NPCs will be disabled in The Hole ahead of Kunark. Please expect any Epic items that have snuck past our grasp to disappear at some point before Kunark.
- Master Yael is considered a raid target, as is Nortlav the Scalekeeper. Nortlav will spawn in Kunark.
- The Hole (Instanced) has appeared, and the book location will be in its normal location for those familiar with official EQ's Time-Locked Progression servers.
- The Hole (Instanced) is subject to other instanced zone experience penalties.
- The respawn time on The Hole (Instanced) is 18 hours across the board, except for Nortlav the Scalekeeper and Master Yael, who are 2d 18h respawns and are subject to loot lockout for the same duration. Loot can drop in The Hole.
- Most Kunark epic NPCs will be reduced to 15 minute respawn time in The Hole, or spawn more frequently in some way, shape or form.
- Rock golems are notably absent until Kunark.
- The Imbued Granite Spaulders are restricted to Kunark for drops due to their power within the era; however, Druzzil may have moved them to another, alternate timeline until Kunark...
- The undead still wander the caverns of the Ruins of Old Paineel at their original strength. Beware!

#### Sky, Hate, Fear Raid Lockouts, Rules for Engagement
Please visit ⁠[#raid-rules](https://discord.com/channels/1133452007412334643/1136033679882326106) to see the current raid rules, engagement and zone information about lockouts

#### Guild Instance Books

The Guild Instance books and graveyards will be in the following locations:
- Plane of Hate - Oasis of Marr, near the Fisher huts.
- Graveyard: East of the instance book.

![hate](/img/about/hate.jpg)

- Plane of Sky - East Freeport, ascending to the heavens behind where the Seafarer's Roost meets the East Freeport gates. Bring levitate!
- Graveyard: Just outside the gates in East Freeport.

![sky](/img/about/sky.jpg)  

- Plane of Fear - To the left of the Plane of Fear portal.
- Graveyard: Further left of the instance.

![fear](/img/about/fear.jpg)

### Mule Accounts

[Creating a mule](https://discord.com/channels/1133452007412334643/1135968760281432164/1208195978016854096) The #makemule command is now available in game. Running the command in game will give you further instructions for how to flag the account as a mule and will ask that you run an additional command for confirmation.

Flagging an account as a mule can not be undone and will delevel the character running the command to 1 SO BE CERTAIN OF YOUR INTENTIONS. 

The character running the command must first be of appropriate level and no other characters can exist on the account when the command is run. Once an account is flagged as a mule then all characters on the account will be mules bound in EC tunnel and can not leave EC nor level past level 1. These accounts should not contribute to overall server population - this is so we can accurately track server population across third-party population tracking websites, such as UnixGeek's EQEmulator player stats.

The mule account will be exempt from IP restrictions allowing you to run a game client and buy/sell/transfer items independent of your main account. Again, RUNNING THE COMMAND AND CONFIRMING WILL DELEVEL YOU TO 1 AND FLAG THE ENTIRE ACCOUNT AS A MULE ACCOUNT. BE CERTAIN OF YOUR INTENTIONS. @CSR WILL NOT REVOKE THIS FLAG UNDER ANY CIRCUMSTANCES, NOR ARE THEY EQUIPPED TO DEAL WITH ANY ISSUES THAT ARISE.

### Elective Services Fees

The following is the current fees for elective character and account services. These services will only be handled under admin discretion. Limit 1 elective service per week.

- Character Surname Change: 500pp
- Character Gender Change: 500pp
- Guild Roster (Leaders and officers only): 500pp
- Guild Add Co-Leader (Leaders only): 500pp
- Guild Change Leader (Leaders only): 1000pp
- Restoring a deleted character (Character must be above level 10): All the currency you have
- Promotion of Iksar Guild Leader character: 2000p (available during the Kunark pre-release)

### Events

#### Halloween Event (Shard of Decay) — 10/23/2023

![shard-of-decay](/img/about/shard_of_decay.png)

Lorisyn Oakwynd has ventured out to various haunting grounds to investigate a Lycanthropic plague brought on by Plaguebringer acolytes. 

Strangely, they are not only chanting the God of Disease's name - they were observed joyously celebrating the God of Magic, Druzzil Ro.

Their hallowed worship has begun to corrupt the very ground around them - various Lycanthropes have appeared throughout the world.

Speak to Lorisyn Oakwynd in one of the following places to begin your investigation: 

- Qeynos Hills
- East Commonlands
- Everfrost
- Steamfont
- Greater Faydark
- Butcherblock
- Innothule
- Misty Thicket
- Feerrott
- Toxxulia

Extra Planar Disturbances have also been sighted. Tempted by the gift of Knowledge by Druzzil, Bertoxxulous followers have entered these planes - twisting themselves and their belongings into monstrous beings.

Rumored, too, that the plaguebringer Himself has projected His image in approval as a constant source of Lycanthropic blood.

The Shard of Decay is temporarily available for the next 2 weeks. This is a dungeon filled to the brim with undead.

The location is partially unknown. Seek the Karanas where werewolves gather, the Sands of Ro where undead gather, the cursed swamp of Innothule, the filthy excavation site of Paineel, and the Faydark where the Shadows dwell for potential anomaly sightings.

This is a zone aimed at level 8 to 25 adventurers, and has various sectors dedicated to those ranges. 

Trivial loot code is in effect, and you cannot loot green con NPC corpses in the zone. However, you can obtain faction by tagging them at least once.

Named creatures may appear during your crawl through the dungeon. These creatures share loot with the main boss, and any loot exclusive to them is considered legacy loot. This will not affect your ability to loot those items outside of the event, and those flags will be cleared following the event.

We recommend being at least level 13 to truly begin your expedition.

Lastly, the event reward requires a significant amount of faction to obtain. You need at least 1900 faction, and each blood will grant 50 faction. Each NPC faction hit will grant 1 faction.

We strongly encourage those who wish to help the lower players to do so, but CSRs will act against higher level players actively monopolizing the zone. Keep your interactions to taunts, buffs, and heals to snag crucial faction hits. Druzzil will be watching.

There are no level restrictions on the event outside of the zone. So, please feel free to participate in those events if you're max level to get the same blood that will also drop in the Shard of Decay.

Lastly, the main event reward will last up until the event ends. You may get another reward from Lorisyn at any time.

Lorisyn, all of the blood and anomalies will disappear at the same time.

#### Brell's Blessed Land - 11/17/2023

During the period before Frostfell, the land needs to be prepared for celebration and merriment. 
The Shard of Decay has closed. Snow is falling on the ground in places where they shouldn't be, and the season of feasts is upon us.

However, Brell needs the land culled of various creatures that are capable of flight, and will reward adventurers kindly.

Druzzil and Brell have blessed the land for a limited period of time to aid with this effort, and Norrath shall reap the reward of experience.

Since we don't sell anything here, and you can't eat the server, we're giving the best feast of all:
Outdoor zones will receive a 0.20 increase to their ZEM for the duration of the event.
Any creatures capable of flight that are killed will grant a 0.50 increase to the bonus on top of ZEM for the duration of the event.
Snow will appear in place of rain as the land begins to get colder.

Flying creatures include the following:

`ghosts, gargoyles, specters, imps, harpies, pegasus, djinn, griffins, pixies, faeries, will-o-wisps, air elementals, wasps, bixies, drakes, reanimated hands, dragons, evil eyes, swordfish / fish / sharks (for meme factor) / phinigel (kedge descendents), whirling blades, bats, and aviaks`

#### Domain of Frost AKA Halas — 12/19/2023

A mysterious Wizard from an extraplanar realm - who is rumored to be a Dragon - has thawed for her yearly awakening, and has conjured a portal to a hidden planar pocket to a fragmented memory - belonging to none other than E'Ci of the Triumvirate of Water. 
The strength of the Wizard rivals that of Veeshan's most trusted.

Upon opening the portal, a band of fire goblins, belonging to a Scrooge named Santaug Klaugg, have also infiltrated the pocket plane as it opened! They were spotted containing toys, trinkets, and were wearing various pieces of armor.

The Domain must be rescued! The Wizard has opened a portal to the pocket plane again; this time for adventurers to save the plane in the East Commonlands tunnel.

Due to her massive power and fear of being discovered as shady, the Shady Swashbuckler has taken up shop elsewhere in the tunnel, and has brought a banker friend with him. This banker friend is also extremely shady, though appears to be an honest fellow. 
He quite enjoys the company, and might be keeping his friend with him well after the Wizard's departure.

Enter the Domain of Frost, and reap the rewards within.
The Domain of Frost is a level 30 to 45 zone, being split right down the middle in terms of difficulty - the far side being much more difficult than the near side.
Trivial Loot Code is enabled in the Domain of Frost.
The Domain of Frost has a passive +0.05 experience boost within its walls.
There are rumors of a container of considerable storage within - if you manage to find one, it will require you to be of the 30th season to loot.
Bards who have lived to tell the tale also share a hidden compartment in the well - guilds may be interested in completing the trials within to get a time-limited reward. There are multiple ways to get this reward.
Know that this encounter is the most difficult of the raid encounters adventurers have faced thus far.

*NOTE: The reward item name contains a symbol - (t) - indicates that the item is temporary and will be removed following the event. Fret not about its power.*

Go forth, brave Norrathians - and conquer the icy depths of the Domain for E'Ci, and complete the tale of Fire and Ice! 

The graveyard for Domain of Frost now dispenses corpses in North Ro at the East Commonlands zoneline after 60 minutes.

#### The Tower of Frost (AKA Oops, All Icebones) — 12/26/2023

The Tower of Frost is now available as a Level 8 to 25 undead zone featuring everyone's favorite friends: icebone skeletons. Big ones, small ones; some the size of your head.
This zone is exactly what you think it is. It's all icebone skeletons. There is no loot to be found here beyond bone chips, a few scraps of cloth and rusty weapons. Trivial loot code is enabled here, too, so don't think of coming in here if you're not at an appropriate level.

The basement is the most challenging, while the top level provides a medium level of difficulty. The entrance, of course, is the easiest part of the zone.

This zone has the same experience bonus that the Domain of Frost has, and this zone will be going away with the event's end on January 9th, 2024.

The graveyard on "Oops! All Icebones" now dispenses corpses in North Ro at the East Commonlands zoneline after 60 minutes instead of 1 minute.

#### Erollisi Week - 02/13/2024

Erollisi Marr has temporarily broken free of the Plane of Love, and has sent Priests of Order to ordain Norrathians in marriage.
Couples from all across the land have gathered to partake in their own marriage ceremony. Seek out the Priest of Order in the East Commonlands Tunnel to begin the process!

To marry another player, first, you'll need to set up your family surname with the Priest of Order. 
The Priest of Order will then require the name of the person who is to take your hand in marriage. There are no level requirements on being married together.

They must be in the same zone as you, and upon their identical family name confirmation and vows of the name, you'll be married together... for the next week or two, at least, while Erollisi holds Her grasp over Norrath's mortal plane.

Marrying someone will provide a 20% experience bonus to all group experience while adventuring together with your partner. This bonus isn't stackable, and applies to the individual, similar to how race and class bonuses apply.

The bonus will be active for the duration of the event. When you are earning experience due to the bonus, you will receive a message in chat - "You receive a bonus! (Partner)"

To recap, the steps are as follows:
1) Set your temporary surname via the Priest of Order.
2) Say your partner's name to the Priest of Order.
3) Have your partner set their surname to your surname via the Priest of Order.
4) Have your partner say your name to the Priest of Order.
5) Congrats! You're married.

NOTE: You can say 'reset' to the Priest of Order, as long as you are not married yet, to reset your pending surname.

This will last for approximately 2 weeks from Valentine's Day, despite being the Erollisi Week event.
*Erollisi Day Surnames are subject to normal restrictions... except for the level requirements. These are not normal surnames; Erollisi has blessed all of us with the ability to set a temporary surname in the name of Love. After the event, these surnames disappear, as does your marriage.*

In addition to the Erollisi Day Event, please enjoy a 5% experience bonus separate to the event to all forms of experience that also stacks with the event bonus. This 5% bonus will run until the event's conclusion.

#### Bristlebane Week - 04/01/2024

On April 1st, in celebration of Bristlebane Week, we will also be running a week-long-event. We may opt to extend it to two and probably will 'forget' to turn off the event. That seems to be a running joke lately.

We'll be turning on all the event zones again - Tower of Frost, Domain of Frost, and the Shard of Decay. Portals will once again be active in the East Commonlands Tunnel.

In addition to running those event zones, we will be turning on the Valentine's Day and Thanksgiving Weekend event - with a small twist.
As a refresher, here's the bonuses for that event's duration, with the updated week-long-event specifics!
Outdoor zones will give 4.20% experience bonus
Flying creatures will give a 6.9% experience bonus
You can get ceremonially married again in the East Commonlands Tunnel! Doing so will grant you a 20% bonus while being in a group with your partner and you will share this temporary surname for the duration of the event.

As a reminder, this is also April 1st. Please expect shenanigans in the game world for a limited time. If you manage to find the 'pranks', know they are temporary for the event, and will be removed after the event. But I intend to fully cause at least ONE (1) prank. Maybe several. Who knows.

#### Bloodied Rivervale - 04/XX/2024

#### King's Court Casino & Kerafyrm - Planes of Power Era [Source: Secrets](https://discord.com/channels/1133452007412334643/1137470588366115049/1137471362315857950)

- The King's Court Casino will be integrated as Post-PoP content. (When Quarm is defeated)
- The Sleeper will reset every time he is awoken - until a custom, hidden event is activated in the Planes of Power.

I have something special planned related to the server name for the wakable sleeper. Certain events get set into motion by Kerafyrm's awakening, including the invasion of Norrath in Taelosia and the timeline split. If those events never happened - or rather, a demigod was able to keep tighter hold on certain events, we could see events never happen that should.

So yes, Kerafyrm may go on his rampage. But there's a certain force that will keep him imprisoned to keep this timeline alive in its state. 

There is a second way to end the tomb, but it won't be until the Planes are fully breached that the plan can be set into motion. Deicide has interesting connotations when it involves entities that shouldn't have that power.

### Server Downtime

Server Downtimes typically happen when the CSR team has available time. Announcements are posted in-game as well as [#server-status-downtime}(https://discord.com/channels/1133452007412334643/1160202360346378250). Server downtimes are typically concluded in about 5 minutes when everything goes according to plan.

TAKP Login Server downtimes typically happen every Wednesday and last for about 15 minutes. During this time you will be unable to log in and the server will appear offline. If you are already in game your service should not be affected. 

### IP Exemption

In order to make an IP exemption, make sure both accounts and characters have been created and have logged into the game at least once. You must then petition a CSR to perform the IP exemption here [#petitions](https://discord.com/channels/1133452007412334643/1153470935421157396). Please include your character name and account name in the petition for faster service. This process can take a few days depending on the volume of petitions being made. 

### Rules

- Rule 0: Actively antagonizing the management will result in whatever cruel breed of nonsense they feel like at the time.
- Rule 1: If you have to ask if you can do it or not, just don't do it. This will likely resolve all of the below rules, but just in case, they're left here for your discretion.
- Rule 2: AFK Killing, Healing or otherwise causing progression is not allowed.
- Rule 2.1: All forms of automation software are not allowed and will be actioned the same as rule 3.
- Rule 2.2 Bards are exempt from this rule when pulsing a utility or party beneficial song. Pulsing refers to the mechanic of letting a song play automatically through use of in-game mechanics. Detrimental bard songs are not exempt from Rule 2. If the spell causes progression directly against a hostile creature on pulse, causes damage passively against another creature on pulse, or prevents progression of other players (such as Song of Highsun), the song is considered to be a violation of this rule. In the case of a new song type being abused, Customer Support Representatives may enforce this rule selectively on cases they feel to be an egregious violation of the spirit of Rule 2.2.
- Rule 2.3: Melody is not exempt from Rule 2.2.
- Rule 3: Any form of cheating - be it active hacks, or passive hacks - are not tolerated. Any software hooking, reading memory from, or otherwise interacting with the game client is also NOT TOLERATED. Macroquest, ShowEQ, Cheat Engine, Debuggers, EQBC, ect WILL GET YOU BANNED!
- Rule 3.1: We may selectively approve third-party programs that modify, read memory, or interact with the game. Those allowed will be listed in [#server-files](https://discord.com/channels/1133452007412334643/1135981619858128998) .
- Rule 4: Multiboxing of any nature is not allowed for player characters.
- Rule 4.1: Multiboxing on accounts with IP exemptions will result in all accounts with that exemption getting banned without appeal.
- Rule 4.2: 'Mule' flagged accounts made with #makemule are not considered player characters and are exempt from Rule 4.0. However, you are limited to one mule per player. This is enforced by IP and CSR action will be taken as if it were a Rule 4.1 violation.
- Rule 5: We have a zero tolerance policy when it comes to hate speech. For clarification, this includes any form of discrimination - such as racism, sexism, sexualization of minors, xenophobia, theophobia, homophobia, transphobia, etc. 
- Rule 5.1: Death threats and suggesting self-harm, suicide and/or homicide are not allowed.
- Rule 5.2: Sexually explicit content and/or discussion is not allowed.
- Rule 5.3: Discussing fetishes and/or posting fetish or fetish-adjacent images is not allowed. 
- Rule 5.4: Lying to, harassing and/or deceiving any staff or contributor is not allowed.
- Rule 5.5: If it breaks the Discord TOS, it's not allowed on our discord.
- Rule 5.6: Discussing politics or religion is not allowed.
- Rule 6: Report exploits via Private Message ONLY to Management. Abusing unreported exploits is not allowed.
- Rule 7: Ping any staff member at your own risk. If it's important enough that it's necessary, so be it. This includes DMs, we have day jobs so unless the server is on fire it probably doesn't need to be a DM.
- Rule 8: Account sharing will result in the loss of the accounts ability to file petitions and appeals to staff decisions.
- Rule 8.1: Any Suspension or Ban directed at a shared account will also be applied to all accounts of users who have accessed that account recently.
- Rule 8.2: Ban or suspension evasion is a bannable offense.
- Rule 9: Ninja looting is not allowed. Ninja looting is defined as taking an item from a corpse in violation of any pre-agreed upon loot arrangement while the corpse is locked. If there was no looting agreement ahead of time it does not qualify as ninja looting. Items taken while a corpse is unlocked is not ninja looting.
- Rule 9.1: Kill stealing will not be tolerated. Kill Stealing is defined as the killing of an NPC for any reason that is already fighting or pursuing another player or group that is prepared to engage that same NPC without that group's specific permission.
- Rule 9.2: Player to player agreements outside the scope of rule 9 will not be enforced by staff.
- Rule 9.3: Intentional griefing and/or training is not allowed.
- Rule 10: Please respect raid and camp rules. Camp rules are listed in #⁠camp_rules. Raid rules are located in ⁠⁠[#raid-rules](https://discord.com/channels/1133452007412334643/1136033679882326106).
- Rule 11: This space is intentionally left blank.
- Rule 12: Zone monopolization is not allowed. This is subjective to the Project Quarm staff as to what they deem zone monopolization, but generally it includes not reasonably sharing NPC spawns in zones, or mass pulling zones where other experience groups are participating in content. Bards included.
- Rule 13: RMT is not allowed. RMT is defined as any sort of arrangement that involves any form of in-game resource, asset, item, character, guild or anything otherwise represented in the database being exchanged for anything not represented in the database. Soliciting RMT is not allowed. Facilitating RMT is not allowed. Discussing RMT is not allowed. Proxy forms of RMT such as casinos, giveaways of donated items, and trading items for outside of game services are not allowed. Joking about RMT is not allowed.
- Rule 13.1: DKP systems are generally considered exempt from Rule 13 so long as the DKP can only be acquired via in game activities.
- Rule 13.2: Providing game-related services in exchange for anything not represented in the database falls under the scope of Rule 13.
- Rule 13.3: Providing non-game related services in exchange for anything represented in the database falls under the scope of Rule 13.
- Rule 14: We don't allow discussion of actions taken against rule violators. Please do not discuss action taken against any players, including yourself for violations of these rules. Any violation appeals MUST be handled through the ⁠petitions channel.

### Raid Rules

* Guild NPC Instances, with Earthquakes being the only way open-world spawns occur.

#### Private Guild Instances Are Available, Quakes Return!
- Due to overwhelming player feedback about casual accessibility, and my own intuition on the subject, we've overhauled how raid rotations work - by scrapping them and replacing them with private guild instances. Don't worry, competition is still available via an overhauled Earthquake system!
- Guild instances are accessible via the Knowledge book near any adjacent-to-raid zone where the tryout books were formerly present.
- Guild instances require an officer from your guild and 12 guild members to be at or above (30 in Classic, 50 in Kunark, 55 in Velious, 60 in Luclin, 65 in Planes of Power) in the guild you are attempting to create an instance for. This requirement is enforced by the server code and not our customer support staff.
- Guild instances have a combat engagement requirement equal to the above. If you do not meet the engage requirement above, players are forced to their bind point on any combat action, including friendly heals.
- Guild instances have heightened respawn when compared to normal instances. This means that every raid creature may not share the same timer as open-world creatures.
- If your corpse becomes unretrievable in a guild instance, fear not: The Graveyard system from Planes of Power is active in these zones, and your corpses will be dispensed every 2 hours to the adjacent zone where the zone-in book is located.
- Guild instances do not award loot for any other creature than the raid target(s) in question, unless otherwise specified. For the current instances, this is the following:
- 
**Nagafen's Lair (Instanced)**
- Lord Nagafen - 6d 18h
- Giants (all) - 18h

**Permafrost Caverns (Instanced)**
- Lady Vox - 6d 18h

**Kedge Keep (Instanced)**
- Phinigel - 18h

**Plane of Hate (Instanced)**
- Maestro of Rancor - 2d 18h
- Innoruuk - 6d 18h
- All Trash - 18h (No Lockout)

**Plane of Fear (Instanced)**
- a dracoliche - 2d 18h
- Cazic-Thule - 6d 18h
- All Trash, Quest NPCs - 18h (No Lockout)

**Plane of Sky (Instanced)**
- All Island Bosses - 18h
- All Trash, Quest NPCs - 18h (No Lockout)

Please note that if not otherwise specified, creatures in instances have 24 hour respawn rates, and give significantly reduced experience. (virtually nothing)
- Guild creation has been disabled via petitions until a lockout system has been created for the Guild Instances.

**EarthQuake revamp**
- Earthquakes are now scheduled to occur every 3 to 7 days.
- Earthquakes now have a duration of three (3) hours.
- Earthquakes no longer have a ruleset. Server Rules 9.x and 10.x are suspended during earthquakes for raid zones. Please assume that if your zone doesn't give a message about NPCs being re-popped, that you have to adhere to rules 9.x and 10.x still.
The current zones considered to be raid zones are:
**Permafrost Caverns**
**Nagafen's Lair**
**Kedge Keep**
**Plane of Sky**
**Plane of Fear**
**Plane of Hate**
- On an earthquake triggering, everyone in the zone is evacuated to the zone-in to ensure fair competition. If you wish to avoid the evac, position yourself outside of the zone.
- Earthquake timers are now visible to guild leaders and officers ahead of their trigger time. No more batphones. Typing '#showquake' will allow a guild officer or leader to view the next earthquake time.
- Earthquakes no longer have guild engage requirements due to the rule 9.x and 10.x suspension during the three hour period, and thus can be pickup grouped.

**Raid Rotations**
* Are dead. 🙂

# FAQ, Troubleshooting, and Obscure Situations

- [Where can I learn more about Project Quarm?](#where-can-i-learn-more-about-project-quarm)
- [When I use my mouse wheel to scroll backwards, I do not see my character in 3rd person. How do I enable Mouse Look?](#when-i-use-my-mouse-wheel-to-scroll-backwards-i-do-not-see-my-character-in-3rd-person-how-do-i-enable-mouse-look)
- [How do I make the chat text bigger in game?](#how-do-i-make-the-chat-text-bigger-in-game)
- [Why doesn't (zeal feature) appear in my User Interface?](#why-doesnt-zeal-feature-appear-in-my-user-interface)
- [How do I change my resolution?](#how-do-i-change-my-resolution)
- [How do I run the game full screen?](#how-do-i-run-the-game-full-screen)
- [I'm using the Stone UI from 1999?](#im-using-the-stone-ui-from-1999)
- [How do I view nameplates from far away?](#how-do-i-view-nameplates-from-far-away)
- [The game still isn't smooth. Camera movement is still jittery?](#the-game-still-isnt-smooth-camera-movement-is-still-jittery)
- [I logged in and I can only move the camera left and right or only up and down? Mouse speed is really fast too?](#i-logged-in-and-i-can-only-move-the-camera-left-and-right-or-only-up-and-down-mouse-speed-is-really-fast-too)
- [I want to turn off the loud music at character creation or character select screen?](#i-want-to-turn-off-the-loud-music-at-character-creation-or-character-select-screen)
- [Quarm enabled snow and it's very loud?](#quarm-enabled-snow-and-its-very-loud)
- [I have a new laptop with an integrated graphics card and I'm experiencing graphical problems?](#i-have-a-new-laptop-with-an-integrated-graphics-card-and-im-experiencing-graphical-problems)
- [How do I disable Luclin models?](#how-do-i-disable-luclin-models)
- [How do I disable Velious armor textures?](#how-do-i-disable-velious-armor-textures)
- [Sometimes my character's spell gems stay grayed out and the server stops responding to my client.](#sometimes-my-characters-spell-gems-stay-grayed-out-and-the-server-stops-responding-to-my-client)
- [Chat channels keep dropping?](#chat-channels-keep-dropping)
- [Why is my non-QWERTY keyboard not working correctly in game?](#why-is-my-non-qwerty-keyboard-not-working-correctly-in-game)
- [I'm having mouse issues?](#im-having-mouse-issues)
- [I'm getting a EQMAIN.DLL error running the game?](#im-getting-a-eqmaindll-error-running-the-game)
- [The text in game is fuzzy and not clear?](#the-text-in-game-is-fuzzy-and-not-clear)
- [The gamma slider doesn't work?](#the-gamma-slider-doesnt-work)
- [The EULA acceptance window moved so I can't log in?](#the-eula-acceptance-window-moved-so-i-cant-log-in)
- [I have white and yellow bars covering my text?](#i-have-white-and-yellow-bars-covering-my-text)
- [The game runs too fast?](#the-game-runs-too-fast)
- [I'm still experiencing crashes during long play sessions on raids?](#im-still-experiencing-crashes-during-long-play-sessions-on-raids)
- [I can't see the bottom of the logon window to press the accept button?](#i-cant-see-the-bottom-of-the-logon-window-to-press-the-accept-button)
- [I can't find Grizzly Bear Skins, only Thick Grizzly Bear Skins?](#i-cant-find-grizzly-bear-skins-only-thick-grizzly-bear-skins)
- [There are no maps?](#there-are-no-maps)
- [How do I install a custom mouse pointer?](#how-do-i-install-a-custom-mouse-pointer)
- [My default chat channel will not save?](#my-default-chat-channel-will-not-save)
- [One of my UI windows is off screen and I can't move it?](#one-of-my-ui-windows-is-off-screen-and-i-cant-move-it)
- [I do not see buff timers?](#i-do-not-see-buff-timers)
- [Are there hell levels?](#are-there-hell-levels)
- [Do pets take a portion of experience?](#do-pets-take-a-portion-of-experience)
- [How do I turn off the loud music at character select or character creation?](#how-do-i-turn-off-the-loud-music-at-character-select-or-character-creation)


### Where can I learn more about Project Quarm?
**A:** The main website projectquarm.com contains a link to the [Project Quarm Discord](https://discord.gg/3nDQ9AkUz8).

### When I use my mouse wheel to scroll backwards, I do not see my character in 3rd person. How do I enable Mouse Look?
**A:** You may have disabled mouse look. While logged into the game, press F12 to enable/disable mouse look.

### How do I make the chat text bigger in game?
**A:** /chatfontsize 1-5

### Why doesn't (zeal feature) appear in my User Interface?
**A:** Zeal adds functionality so the User Interface needs to be told how to display that functionality. Zeal contains a few UI files you can drop into the TAKP/Uifiles/ folder that you use. Alternatively, you can find new user interfaces with added functionality. I use [Nillipus UI 1440p](https://discord.com/channels/1133452007412334643/1162826324092657757/1224809011392807003),  [Merchant](https://discord.com/channels/1133452007412334643/1162826324092657757/1224861589799178321). I can also recommend [qqui Calmethar](https://www.eqinterface.com/downloads/fileinfo.php?id=6959) as it is updated frequently.

### How do I change my resolution?
**A:** In your `eqclient.ini` you can find the [VideoMode] section. Change this to match your desktop's settings. 

- [VideoMode] 
- Width=1920
- Height=1080
- (match your display settings with the proper height and width prior to launching the game)

### How do I run the game full screen?
**A:** You want to run the game in windowed mode first. In your `eqclient.ini` set this option `WindowedMode=TRUE`. Find [VideoMode] and set it to your desired resolution. When you are logged into EverQuest, press SHIFT + Enter to switch between windowed and fullscreen modes. If you are still having problems, see the 3rd party programs section for LosslessScaling.

### I'm using the Stone UI from 1999?
**A:** In your `eqclient.ini` set NewUI=TRUE and `OldUI=False`.

### How do I view nameplates from far away?
**A:** Use an [updated](#step-3-converting-your-takp-client-to-quarm) `eqgame.dll` and make sure `eqclient.ini` has `EnableExtendedNameplateDistance=TRUE`. 

### The game still isn't smooth. Camera movement is still jittery?
**A:** First make sure you're using the experimental `eqgame.dll` file as this fixes the framerate options in your `eqclient.ini`. With previous versions of `eqgame.dll` the frame rate/refresh rate values would not be respected. 

The supported client includes a frame rate limiter not found in the original client. You can change foreground and background FPS limits (this gets put in automatically if absent) by editing these lines in your `eqclient.ini`:

[Options]
- MaxFPS=60 - This is the framerate you limit the foreground client window to. If this is set too high, it may consume too many system resources. Typically 60 is a good number to start with and adjust if necessary. A setting of 0 disables the limit.
- MaxBGFPS=60 - This is the framerate you limit the background client windows to. You don't want this too low, since it will affect autofollow ability. But, if you have it too high, it may consume too many system resources. 60 is typically good. A setting of 0 disables the limit.
- MaxMouseLookFPS=60 - Allows you to set the mouselook FPS to help with mouselook slowness. If your mouselook is too slow, try adjusting this to 60 or 45. A setting of 0 disables the limit.
- NoFPSLimiter=0 - Enables/disables the No FPS Limiter and likes to set itself to 1. For the smoothest experience, set this to 0.

The recommended frame rate for MaxMouseLookFPS is 60 (or 30) to avoid mouse look issues. It's 0 (unlimited FPS) by default. Very high frame rates will make the mouse look less usable. However you can change these if desired. You may want a higher background FPS for better autofollowing. These features (among other fixes) are a part of the latest eqgame.dll you would have downloaded under the Obtaining the Client Section for Windows. [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows)

### I logged in and I can only move the camera left and right or only up and down? Mouse speed is really fast too?
**A:** Sometimes Zeal's camera movement settings do not save properly so the camera feels too fast, or wont move at all. In game you can ALT + O to open the options menu and navigate to the Zeal tab. I like all my camera settings around .3. These settings can also be found in `eqclient.ini` at the bottom under [Zeal] `MouseSensitivityX=0.300000` `MouseSensitivityY=0.300000` `MouseSensitivityX3rd=0.300000` `MouseSensitivityY3rd=0.300000`.

### I want to turn off the loud music at character creation or character select screen?
**A:** Delete the following files from your TAKP folder. `eqtheme.mp3` `combattheme1.mp3` `combattheme2.mp3` `deaththeme.mp3`

### Quarm enabled snow and it's very loud?
**A:** Originally posted on discord by Hallic|Kelendil: For those interested in reducing or deleting the new event snow sound, the name of the file for the snow/wind loop is `wind_lp1.wav` located in the `snd2.pfs` file in your EQ directory. You will need a special pfs file viewer to open, extract or delete this file. To do so, use [EQ-Zip EverQuest Archive Manager](https://github.com/Shendare/EQZip/releases). First open `snd2.pfs` and you will see a list of several environmental sounds there. You can export or delete the `wind_lp1.wav` OR even use an online .wav volume reducing tool such as [Change Volume](https://mp3cut.net/change-volume) to reduce the volume. You can then upload the reduced volume wav file back into `snd2.pfs` (overwrite and replace the loud one) and now you have a much softer sounding ambient wind. You can do this for all the sound files btw and even make custom ones.

### I have a new laptop with an integrated graphics card and I'm experiencing graphical problems?
**A:** *Hybrid Graphics Support* Some laptops containing hybrid graphics, with discrete graphics processing capabilities, often do not get utilized by the PC Client. This is due to the graphics in the older PC client being based on MS DirectX 8. A DirectX wrapper has been found that can successfully enable use of the discrete GPU, over the slower on board graphics. If you are experiencing performance issues on a relatively new laptop with an integrated GPU, give one of the following two options a try. One option is using dgVoodoo2, read more [here](https://wiki.takp.info/index.php/Getting_Started_on_Windows).

Option 1: You can download the dgVoodoo2 wrapper at [dgVoodoo2](http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/). This specific [Version 2.8.2](http://dege.fw.hu/temp/dgVoodoo2_81_exp4.zip) seems to work well on AMD and NVidia based hybrid graphics.

To install this wrapper, you need to open the downloaded zip file, and copy the `D3D8.dll` file found in the MS subfolder, and put this in the same folder as your `eqgame.exe`. Then just run the eqgame.exe normally. DO NOT PUT THIS FILE IN YOUR WINDOWS SYSTEM FOLDER!!! After selecting this display adapter, the game should run normally, with the exception of changing screen resolutions. If you change the display resolution in game, it WILL crash the client. So only do this in a safe location. You can optionally change the resolution by hand in the `eqgame.ini`.

In order for dgVoodoo to fire, you have to set `eqgame.exe` to use High Performance Mode in your NVidia control panel. Refer to below screenshot

![NvidiaPerformanceSetting](/img/faq/NvidiaPerformanceSetting.png)

If you have an AMD card, find an equivalent setting in the Radeon control panel.

If the wrapper is loaded, in game it will have a "dgVoodoo" watermark in the lower right corner of the display. The performance difference is usually very noticeable. But if you want to be sure, you can use software such as [GPU-Z](https://www.techpowerup.com/gpuz/), to monitor the load on the discrete graphics card. Remove the watermark by running `dgVoodooCpl.exe`, clicking the DirectX tab, and unchecking 'dgVoodoo Watermark.' OR you can locate the dgVoodooWatermark line in your dgVoodoo.conf file and make sure it's set to false: "dgVoodooWatermark = false" If it doesn't exist, create it.

Option 2: [DXwrapper](https://www.dropbox.com/s/phvxgl6ojf2xqih/DxWrapper.zip?dl=0). This wraps the dx8 to dx9. It will use the amd graphics on a switchable graphics laptop, even though it selects the onboard graphics at run time. By using GPU-Z, you can see which graphics card is doing the work. What doesn't work, is adjusting the gamma from the slider in game. Just put these 3 files in your TAKP install folder and give it a try. If it doesn't work or you don't see performance gains, then remove them. [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows)

### How do I disable Luclin models?

**A:** Locate the section in your `eqclient.ini` for UseLuclin and set them to FALSE. Luclin models are set during the initial game configuration and those values are saved here. 

`UseLuclinHumanMale=FALSE
UseLuclinHumanFemale=FALSE
UseLuclinBarbarianMale=FALSE
UseLuclinBarbarianFemale=FALSE
UseLuclinEruditeMale=FALSE
UseLuclinEruditeFemale=FALSE
UseLuclinWoodElfMale=FALSE
UseLuclinWoodElfFemale=FALSE
UseLuclinHighElfMale=FALSE
UseLuclinHighElfFemale=FALSE
UseLuclinDarkElfMale=FALSE
UseLuclinDarkElfFemale=FALSE
UseLuclinHalfElfMale=FALSE
UseLuclinHalfElfFemale=FALSE
UseLuclinDwarfMale=FALSE
UseLuclinDwarfFemale=FALSE
UseLuclinTrollMale=FALSE
UseLuclinTrollFemale=FALSE
UseLuclinOgreMale=FALSE
UseLuclinOgreFemale=FALSE
UseLuclinHalflingMale=FALSE
UseLuclinHalflingFemale=FALSE
UseLuclinGnomeMale=FALSE
UseLuclinGnomeFemale=FALSE
UseLuclinIksarMale=FALSE
UseLuclinIksarFemale=FALSE
UseLuclinElementals=FALSE
UseLuclinVahShirMale=FALSE
UseLuclinVahShirFemale=FALSE`

### How do I disable Velious armor textures?
**A:** Locate the section in your `eqclient.ini` for Velious armor textures and set them to FALSE. Velious armor textures are not enabled by default as they can cause an issue with Vah Shir armor not displaying. 

`LoadVeliousArmorsWithLuclin=FALSE
LoadArmor17=FALSE
LoadArmor18=FALSE
LoadArmor19=FALSE
LoadArmor20=FALSE
LoadArmor21=FALSE
LoadArmor22=FALSE
LoadArmor23=FALSE`

### Sometimes my character's spell gems stay grayed out and the server stops responding to my client.
**A:** This is what is commonly referred to as 'desyncing'. The precise cause(s) of the problem are unknown (else they would get fixed up) but there are things that can be done to reduce the chance of this occurring.

- Ensure that your internet connection is uncongested. Try using a wired connection to your router instead of wifi.
- Make sure your firewall isn't blocking client ports.
- Make sure your frame rate is limited if running the Windows client.
- Use one of the clients linked above if you're using a different one.
- Try connecting over a VPN. Some users claim this helps.

[See also this post summarizing connection issues for TAKP](http://www.takproject.net/forums/index.php?threads/connection-issues-read-this.4488/#post-24796). [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows)

### Chat channels keep dropping?
**A:** If your chat channels regularly drop, you can try adding `ChatKeepAlive=1` in the defaults section of the `eqclient.ini`, this will increase the frequency the keepalives are sent to every 15 seconds.

If one packet is dropped, that is the keepalive from Client to Server, you will time out before it triggers again, if the `ChatKeepAlive=1` is not set. So this specific condition can contribute to chat channels dropping. [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows)

###  Why is my non-QWERTY keyboard not working correctly in game? 
**A:** The default client is packaged with the QWERTY keyboard layout file. This can be changed by replacing the `keyboard.txt` in your TAKP folder with the one made for your locality [keyboard.txt by nationality](https://drive.google.com/open?id=0B70BIislzWn_U01KbnNXQVZ3WU0). *Please note that several are still missing and will be uploaded as we can find/make them*

### I'm having mouse issues?
**A:** Usually caused by DPI Scaling setting in Windows. Need to set it to 100% DPI scaling. You may find this forum thread useful: [Mouse issues](https://www.takproject.net/forums/index.php?threads/mouse-issues.9806/))

### I'm getting a EQMAIN.DLL error running the game?
**A:** This happens if you try to launch the game from Windows Search results. Don't launch from search results. Navigate to the folder manually and run `eqgame.exe` directly, or create a desktop shortcut, or launch via hotkey.net. Also this error can happen if your anti-virus deletes some game files. Make sure you set AV exclusions and the game files aren't being quarantined.

![Eqmain-dll-error](/img/faq/Eqmain-dll-error.png)

### The text in game is fuzzy and not clear?
**A:** In each of your EQ folders:
- Right click `eqgame.exe`, properties, compatibility tab, change DPI settings, check the box "Override high DPI scaling behavior" and select "Application" in the dropdown.

### The gamma slider doesn't work?
**A:** For some people, the in-game Gamma slider does nothing. Follow the below steps on how to increase Gamma on Windows 10 machines:

- Right click on Desktop -> choose "Display Settings"
- Click on "Advanced display settings"
- Click on "Display adapter properties for Display 1"
- Click on the "Color Management" tab, then click on "Color Management..." button
- Click on the "Advanced" tab, then click on "Change system defaults..." button at the bottom
- Click on the "Advanced" tab, then click on the "Calibrate display" button at the bottom.

A "Welcome to Display Calibration" window will pop up. If you use multiple monitors you need to move this window to the monitor you wish to adjust gamma on. Click Next, Next, Next.

Now in the "Adjust gamma" screen, move the slider up a little bit until desired setting is found. You can have your EQ running next to it to find a suitable level, and click Next when done.

You can click on "Skip brightness and contrast adjustment", and click Next past the color balance screens, and untick the "Start ClearType Tuner" and click on Finish.

Now back at the Color Management - System Defaults screen, tick the "Use Windows display calibration" setting and click Close.

Now your gamma has been increased for this monitor!

*Note: If the Gamma resets on next reboot, you need to get back to the "Color Management - System Defaults" screen, and re-tick the "Use Windows display calibration" setting and click Close. This will bring back your previous settings.*

### The EULA acceptance window moved so I can't log in?
**A:** This is the first window you see when you run the game. Settings for this are in the eqw.ini file in your EQ folder. Positions are set numerically according to each resolution you use (2 for x and y would be the upper left for example):

![Eqwini](/img/faq/Eqwini.png)

### I have white and yellow bars covering my text?
**A:** This is likely caused by an incompatible version of dgvoodoo. You can either look for a newer or older version that is compatible with your graphics card or can disable dgvoodoo by moving the d3d8.dll out of the EQ client folder and relaunching the client.

This issue is fixed in v2.2 client that has an updated dgVoodoo2 d3d8.dll which is compatible with AMD cards. You can download it from [here](http://dege.fw.hu/temp/dgVoodoo2_81_exp4.zip).

![Barscoveringtext](/img/faq/Barscoveringtext.png)

### The game runs too fast?
**A:** If you are using an AMD 7xxx series CPU in your system you may need to adjust your system's settings to avoid this issue. The following were done by different people to correct this issue:

- "I disabled PBO and reduced clock speed to 3900 in bios then in Ryzen Master switched to normal profile and it's working for me now. Game running at normal speed."
- "I fixed my AMD 7950x. PBO off, CPU boost off, fixed 42x 100 for 4.2Ghz set clock speed. Set the Ram to 6000 with XMP II."

Use Ryzen Master to apply settings [Source: TAKP Forums](https://www.takproject.net/forums/index.php?threads/everything-is-at-10x-speed.27284/)) 

### I'm still experiencing crashes during long play sessions on raids?
**A:** If you are experiencing client crashing during raids, can check the long discussion [here](https://www.takproject.net/forums/index.php?threads/crashing-when-zoning-long-play-sessions.20996/page-5#post-114059).
- Edit your `eqclient.ini` file and set this value to zero `ShowSpellEffects=0` or in-game can type `/showspell OFF`
- Update to latest [FreeTheMouse client v3.6.4](https://www.dropbox.com/s/qzb86juu8k87mfs/eqgame_dll%20v3.6.4%20for%20ftm.zip?dl=0). This should help with client switching crashes.
- Edit your eqclient.ini file and change this line to match your chosen UI that you use `UISkin=<your UI name>`.
[Source: TAKP Forums](https://www.takproject.net/forums/index.php?threads/crash-to-desktop-on-enter-world.16444) [Source: TAKP Forums](https://www.takproject.net/forums/index.php?threads/power-of-two-ui-crashing-client-when-entering-world.11793)

### I can't see the bottom of the logon window to press the accept button?
**A:** Add the Following lines to [Defaults] Section of your `eqclient.ini`

`FEWindowedModeXOffset=0`
`FEWindowedModeYOffset=0`

### I can't find Grizzly Bear Skins, only Thick Grizzly Bear Skins?
**A:** Thick Grizzly Bear Skins work for whatever quest or item you are trying to complete. From user [Peuw](https://discord.com/channels/1133452007412334643/1154893244702920806/1154893244702920806):*After turning in the four skins, he returns only the Grizzly Bear Skin and states he has no need for these items. I found he accepts:*

`Thick Grizzly Bear Skin (should be not Thick?)`
`Shark Skin`
`Polar Bear Skin`
`Alligator Skin`

*I was able to complete the cap quest with these skins, and the following dagger turn in.* 

### There are no maps?
**A:** The map system was introduced with the Legacy of Ykesha expansion in February 2003, and is not present in Project Quarm. I suggest looking into [ZlizEQMap](#ZlizEQMap). 

### How do I install a custom mouse pointer?
**A:** Installing a custom mouse pointer for your interface isn’t too difficult of a task but requires some basic knowledge. You will need enough skill to be able to open a XML file in a text editor and change some things. Knowing how to use a graphics editing program with .tga files may help you as well.

When you download a custom mouse pointer for Everquest there should be two files included within the pointer zip file. One will be a .tga graphic file and the other should be a readme.txt that gives instructions on what to change in the EQUI_Animations.xml. Since every cursor has different sizes the author should include this information.

If you don’t already have a custom EQUI_Animations.xml file you’ll want to copy that file from your default folder into your custom interface folder. The following changes are only examples to give you more insight into what is happening. The author of these custom pointers should include directions.

You will need to define the new graphic file in the EQUI_Animations.xml and that can be done by using the <TextureInfo Item= > tag. When looking through the animations file you will see many of these tags defining many different graphics. At the end of the list add you can add your own like the one shown below :

	`<TextureInfo item = "mycustompointer.tga">
		<Size>
			<CX>64</CX>
			<CY>64</CY>
		</Size>
	</TextureInfo>`


Notice the item=” mycustompointer.tga” is just the name of the .tga file that should be included in the zipfile. The author should provide the above code or at the very least the CX and CY values.

If they didn’t and you are proficient with Adobe Photoshop or other graphic editing programs you can find the size and location yourself. The X,Y location is the X,Y pixel coordinates where the graphic starts inside the graphic file. The CX,CY is the pixel size of the graphic inside the file.

Now you need to find the <Ui2DAnimation item = "A_DefaultCursor"> code in the EQUI_Animations.xml. The author should provide new code to replace the old Cursor code with. If they don’t below is an example on how a custom cursor is called into place.

	`<Ui2DAnimation item = "A_DefaultCursor">
		<Cycle>true</Cycle>
		<Frames>
			<Texture> mycustompointer.tga </Texture>
			<Location>
				<X>0</X>
				<Y>0</Y>
			</Location>
			<Size>
				<CX>64</CX>
				<CY>64</CY>
			</Size>
			<Hotspot>
				<X>1</X>
				<Y>1</Y>
			</Hotspot>
			<Duration>1000</Duration>
		</Frames>
	</Ui2DAnimation>`


Notice the texture name is the same name as your custom cursor file name. The author should also provide you values for the X, Y location and the CX, CY size.

If they didn’t and you are proficient with Adobe Photoshop or other graphic editing programs you can find the size and location yourself. The X,Y location is the X,Y pixel coordinates where the graphic starts inside the graphic file. The CX,CY is the pixel size of the graphic inside the file.

Once these basics are done correctly you should get your new mouse pointer in game. If everything is working, be proud of yourself because you can take this knowledge and start to create your own!

If you have no mouse pointer after this more than likely the X,Y or the CX,CY values are wrong or you have a typo in the filename. If it’s a typo in the filename of the .tga file you should see an error in your uierrors.txt about it. [Source: eqinterface](https://www.eqinterface.com/forums/faq.php?faq=install#faq_howto_install)

### My default chat channel will not save?
**A:** It's a Quarm bug. If you set the default channel on any other chat window, that isn't the 'Main' one, the setting will save between logging. [Source: Zephon](https://discord.com/channels/1133452007412334643/1214573430402322503/1220133660125167626)

### One of my UI windows is off screen and I can't move it?
**A:** Your settings are saved in your [UI .ini file](#Duplicating-your-UI-Settings-for-New-Characters ) so there's a couple ways you can reset these values. You can edit the file yourself and change the coordinates of the specific UI element that is off screen, and then reload your UI. You could delete the file and the game will generate a new one upon next login. The simplest method is to simply reload your UI without using the file and tell EQ to reset all the windows. You can type /loadskin uiname without appending a 1 to the end, to have EQ load the UI without saving positions. Learn more [here](#how-do-i-install-an-interface).

### I do not see buff timers?
**A:** You need an updated `eqgame.dll` file, [see here](#Step-3-Converting-your-TAKP-client-to-Quarm)

### Are there hell levels?
**A:** Level smoothing rules are in place on this server. The typical hell levels still require more exp but but the requirements for each level are a lot more even than in the original game. You can look up how much exp you need per level over at [pqdi.cc](https://www.pqdi.cc/exp).

### Do pets take a portion of experience?
**A:** If your pet deals more than 50% of the mob's total health, it will earn exp as if it were another player in your party. [Source: Secrets](https://discord.com/channels/1133452007412334643/1133453587675103323/1147980850701545504) This is true if you are solo or grouped. However it is unlikely a single pet will deal over 50% of a mob's total health when you are grouped, since your party members are also doing damage. This rule applies to each individual pet, so a party with 3 mages doesn't need to worry, since a single pet is still not dealing 50% of a mob's total health.

### How do I turn off the loud music at character select or character creation?
**A:** Delete the following files:[Source: Rumpus on Discord] 

- eqtheme.mp3
- combattheme1.mp3
- combattheme2.mp3
- deaththeme.mp3

Delete these from your main TAKP folder. Midis will be restored and they are not as loud and "sound much better".

# Suggestions Feedback and Additional Help

#### [Project Quarm Discord #zeal-discussions](https://discord.com/channels/1133452007412334643/1210670176077348934) | [Project Quarm Discord #tech-help](https://discord.com/channels/1133452007412334643/1133453502182596729) | [Project Quarm Discord #ui-discussion](https://discord.com/channels/1133452007412334643/1162826324092657757) | [Project Quarm Discord #petitions](https://discord.com/channels/1133452007412334643/1153470935421157396)

Still reading? I'd like to expand this guide and keep it maintained. What I need from you are more questions to populate the FAQ at the bottom. I need to install Visual Studio and document steps to attaching the game to it to log the data that Secrets and Salty need when the game crashes or bugs out. I'd like to host a fully updated ZlizEQMap [zonedata file](https://github.com/hada79/ZlizEQMap/blob/master/ZoneData/ZoneData-The%20Al'Kabor%20Project.txt) but this one isn't updated for Quarm. I have some other ideas too. Please submit suggestions/help/feedback to me via DM on X or Discord. Feel free to ask `Xanax/Xantagonist <Former Glory>` any questions, anywhere you find me in game! 

#### @LordDemonos on [X](https://twitter.com/home)
#### lorddemonos on [Discord](https://discord.com/)
#### Special Thanks to `Zephon <Mayhem>` `Manie <Erud's Crossing Guard>` `Gamjee` `Calmethar.` `Salty`

