### Important Backup Reminder

Whenever you make changes or overwrite files, it's crucial to create backups to prevent data loss. We strongly recommend backing up the entire TAKP folder or any modified files before proceeding with any alterations. Creating backups is a quick and easy process that can save you from potential headaches down the line. While we won't remind you to back up files after every step, it's a best practice to develop a habit of regularly backing up your data.

## Installing the Main Game 

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

### Step 4: Installing Zeal ![Zeal](./assets/images/Zeal.png)

Zeal is used to add additional functionality to EverQuest. Main additions include 3rd person camera smoothing fix, better tab targeting, spell sets, and melody. A full list of features can be found in the [readme](https://github.com/iamclint/Zeal/blob/master/README.md). *The readme is based on latest commits not latest the release build.*

#### Prerequisite 1. (Required) Enable sound in your eqclient.ini

Make sure `Sound=TRUE` is listed in your `eqclient.ini`. Zeal uses the EverQuest sound engine to inject code into the game, thus the sound must be enabled for Zeal to function. You will still have access to various sound options in game by pressing ALT + O and adjusting the sliders for Sound Realism, Music Volume, and Sound Volume.

#### Prerequisite 2. (Required) Excluding your TAKP Installation
Excluding your TAKP installation from being scanned by your antivirus software can also help reduce load times, zoning times, and eliminates stuttering when opening your bags. This is highly recommended and is a prerequisite for downloading Zeal, as explained below.

There are two methods to exclude your TAKP installation, manually or using a Powershell command. 

##### Windows 10

 Instructions for performing the above through Windows Settings panel:

*This may be slightly different for the different versions of Windows 10. This was taken from the 1909 version released late 2019.*

-Right click the windows button in the lower left hand corner and select search.

![Defenderexclusion1](./assets/images/step4/Defenderexclusion1.png)

- Search for and select Windows Security.

![Defenderexclusion2](./assets/images/step4/Defenderexclusion2.png)

- Click Virus and Threat Protection.

![Defenderexclusion3](./assets/images/Defenderexclusion3.png)

- Under Virus and Threat Protection settings, click manage settings.

![Defenderexclusion4](./assets/images/Defenderexclusion4.png)

- Under exclusions, click Add or Remove Exclusions.

![Defenderexclusion5](./assets/images/step4/Defenderexclusion5.png)

- Click Add an exclusion and select Folder.

![Defenderexclusion6](./assets/images/step4/Defenderexclusion6.png)

- Select the folder that you currently have (or intend to have) the TAKP files extracted into and run from when you play.

##### Powershell

(Optional Method)

Open administrative PowerShell and type in the below, replace the C:\TAKPv22 folder path with where you unzipped the game files.

`Add-MpPreference -ExclusionPath "C:\TAKPv22"`

`Add-MpPreference -ExclusionProcess "C:\TAKPv22\eqgame.exe"`

![AV_Exclusions_PowerShell_Example](./assets/images/step4/AV_Exclusions_PowerShell_Example.png)

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

![ChangeButton_ZealOptions](./assets/images/step4/ChangeButton_ZealOptions.png)

However Zeal does not come with user interface files for every Zeal feature and your game chat window will show errors when playing. These are not harmful to your gameplay experience and can be ignored. EverQuest will identify which files are missing or broken and attempt to load them from the default folder instead. 

![uierrors](./assets/images/step4/uierrors.png)

There are several EQ User Interfaces that have been modified to work with Project Quarm and Zeal. A list of these can be found down under [Where to get Quarm User Interfaces](#where-to-get-quarm-user-interfaces). If you are looking for something simple and quick to get started with, I have compressed a more complete collection of duxaUI files, the default UI for Quarm/TAKP clients, found [here](https://quarm.guide/duxaUI.7z). 

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

![dgVoodoo1](./assets/images/step5/dgVoodoo1.png) ![dgVoodoo2](./assets/images/step5/dgVoodoo2.png)

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

![first1](./assets/images/step7/first1.png)![first2](./assets/images/step7/first2.png)![first3](./assets/images/step7/first3.png)![first4](./assets/images/step7/first4.png)

Once you are at the login screen, exit back out of the game and close it. In your TAKP folder, open your `eqclient.ini` and change the following settings.

- AttacOnAssist=FALSE (Optional, but Recommended)
- CombatMusic=FALSE (Unless you prefer immersion)
- EnableExtendedNameplateDistance=TRUE (Mandatory to see nameplates further than you can throw)
- [VideoMode]
- Width=1920
- Height=1080
- [Options]
- MaxBGFPS=60
- NoFPSLimiter=0 - **This option will only work with the very latest experimental .dll and this is half the fix for the 3rd person stutters you previously experienced in older versions of Quarm. SET TO 0**

You can now run `eqgame.exe` again and log into the game. Once you log into your character, you will be looking at the default "NewUI". Press ALT + O to open the options menu. Navigate to General and select Load UI Skin. Select `duxaUI` for now and click Load Skin. This will allow you to open options again with ALT + O and modify the new Zeal settings as well. 

![loadui](./assets/images/step7/loadui.png)

Below are some recommended Zeal specific changes you should consider before you start your adventure. 

![zeal1](./assets/images/step7/zeal1.png)![zeal2](./assets/images/step7/zeal2.png)![zeal3](./assets/images/step7/zeal3.png)![zeal4](./assets/images/step7/zeal4.png)![zeal5](./assets/images/step7/zeal5.png)
