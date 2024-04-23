# EverQuest Project Quarm Installation Guide (Updated: April 24, 2024)

## Part 1: Installing the Main Game

### Step 1: Create a TAKP Forum Account
Before you can download and install the game, you'll need to create an account on the TAKP forums.

**NOTE: You must only create 1 forum account. You can create up to 10 game accounts under your forum account, but you must not create more than 1 forum account. If this is detected, the extra forum accounts will be deleted, and access to any game accounts associated with them will be lost. Also, please name your forum and game accounts carefully as these cannot be changed or deleted after creation. Read the forum FAQ and Rules for more information [here](https://www.takproject.net/forums/index.php?forums/server-info.90/).**

1. Visit the following link and follow the instructions to register a new account: [Login](https://www.takproject.net/forums/index.php?login%2F)

2. Once you have created a forum account and are logged in, navigate to the "Game Accounts" section.

3. Click "Create Login Server Account" and create a game account. Your forum account may have up to 10 game accounts, but you are limited to having three game accounts +1 trader account simultaneously logged in. Also note, your forum and game accounts are not linked to your wiki login in any way.

**NOTE: Some Gmail users have reported not receiving the email verification or password reset verification emails from the TAKP website. If you encounter this issue, try the following steps:**

1. Go to the Gmail client via browser
2. Go to SETTINGS on the upper right (small cogwheel)
3. Select CONFIGURE INBOX
4. Place a check beside all the tabs (Primary, Social, Promotions, Updates, and Forums)
5. SAVE
6. Reload/Refresh the page and search for any variation of TAKP

### Step 2: Download the Game Client
1. Visit the Getting Started page on the TAKP wiki: [Getting Started](https://wiki.takp.info/index.php?title=Getting_Started)
2. Click on the "Getting Started with Windows" section.
3. Download the stable 2.1 version of the game client [here](https://www.dropbox.com/s/bppy4ebt7vl7hwk/TAKP%20PC%20V2.1c.zip?dl=0), or use the latest 2.2 version [here](https://drive.google.com/file/d/1qoBktDeJMJKPBr-EZxub1vspJhz11i1y).

### Step 3: Converting your TAKP client to Quarm
1. Join the Project Quarm discord (discord link to be added later).
2. Navigate to the #server-files channel.
3. Download the `eqgame.dll` file from the following message: [#server-files](https://discord.com/channels/1133452007412334643/1135981619858128998/1170491429253034047)
4. Extract the `eqgame.dll` file to your TAKP folder (where you installed the game client).

### Step 4: Installing Zeal

Zeal is used to add additional functionality to EverQuest. Main additions include camera smoothing, spell sets, and melody. A full list of features can be found in the [readme](https://github.com/iamclint/Zeal/blob/master/README.md)

#### Prerequisite - Enable sound in your eqclient.ini

Make sure SOUND=ON is listed in your eqclient.ini. Zeal uses the EverQuest sound engine to inject code into the game, thus the sound must be enabled for Zeal to function.

1. (Required) Excluding your TAKP Installation
Excluding your TAKP installation from being scanned by your antivirus software can help reduce load times, zoning times, and eliminate stuttering when opening your bags. This is highly recommended.

Link: [Set Windows Defender Exclusion on Windows 10](https://wiki.takp.info/index.php/Set_Windows_Defender_Exclusion_on_Windows_10)

Follow the instructions on the link above to exclude your TAKP installation from virus scans.

2. Why is Zeal getting flagged as a Virus/Malware?
Zeal is a file that utilizes a method known as code injection to enhance the functionality of EverQuest's sound engine. This process involves inserting custom code into the game's executable to introduce new features and improvements. While this technique is commonly associated with malware or viruses due to its intrusive nature, Zeal serves a legitimate purpose in enhancing the gaming experience. However, because Zeal is currently in early development and lacks a digital signature, it may trigger antivirus software to flag it as potentially harmful. This is because unsigned files are often treated with suspicion by operating systems and security software. Project Quarm intends to address this issue by obtaining a digital certificate from Microsoft to sign Zeal in the future, thereby eliminating any concerns about its legitimacy.

### 3. Download and Extract Zeal.asi to your TAKP Folder
1. To download Zeal, visit the project's GitHub repository at [https://github.com/iamclint/Zeal](https://github.com/iamclint/Zeal) and navigate to the '[Releases](https://github.com/iamclint/Zeal/releases)' section. You'll find the latest version available for download in a file named `zeal.zip`. Ensure that you have previously excluded your TAKP folder from virus scans, as discussed in the previous step.
2. If you encounter any difficulties downloading the file, consider using an alternative browser such as Edge or Firefox. Alternatively, if you're using Chrome and experiencing issues, you may need to force the download by following the instructions [here](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/This-file-is-dangerous-so-Chrome-has-blocked-it-message-received-when-downloading-ZIP-files-from-BIM-360-Team.html).
3. Once downloaded, extract the contents of the zip file directly into the root directory of your TAKP folder.

## Part 2: (Optional) Installing Optional Textures and Effects
This step is optional, but you can install various texture packs and visual effects to enhance the game's appearance.

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

#### KaichoFX Particle Effects
Download Link: https://drive.google.com/file/d/1zXoiMFk-Z-f2Qc6tI9ZUJjfR98rVdLoK/view

**DOWNLOAD** the latest SpellEffects pack _version 1d_ here: https://drive.google.com/drive/folders/1nSWhNloSVfPXb8Kdthb20pM_P99bGvBF?usp=sharing

**NOTE:** Rename your original SpellEffects folder as a BACKUP, and create a new folder with the custom spell effects in them. Enjoy!

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

### Step 6: (Optional) Installing Optional 3rd Party Programs

#### dgVoodoo2 

dgVoodoo2 is a set of implementation of old graphics API's for Windows 7 and later versions 

http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/

## FAQ

...

When I use my mouse wheel to scroll backwards, I do not see my character in 3rd person. How do I enable Mouse Look?


