---
sitemap: true
published: true
toc: false
date: 'Fri Oct 05 2024 20:00:00 GMT-0400 (Eastern Daylight Time)'
title: Xanax's Checklist for Installing Zeal
description: >-
  A concise guide to installing Zeal on Project Quarm, including prerequisites,
  download links, and configuration tips.
keywords: >-
  Project Quarm, Quarm, EverQuest, Zeal, installation, dgVoodoo, compatibility
  settings
author: Xanax
---

## Xanax's Checklist for Installing Zeal

This checklist provides a summarized version of the steps required to install Zeal for Project Quarm. For detailed instructions, refer to the [Installing Zeal Guide](/installing-the-game#step-4-installing-zeal-).

### Prerequisites

1. **Enable Sound in eqclient.ini**
   - Ensure `Sound=TRUE` is listed in your `eqclient.ini`. Zeal requires sound to be enabled to function properly.
2. **Exclude TAKP Installation from Antivirus Scanning**
   - Exclude your TAKP folder from antivirus scans to reduce load times and prevent stuttering. Follow the [detailed instructions](/installing-the-game#prerequisite-2-required-excluding-your-takp-installation).
3. **Remove Previous Zeal Files**
	- If you have recently installed Zeal, there may be a conflict with the newer version. Make sure you delete your `uifiles\zeal` folder before installing the latest version. 

### Installation

1. **Download and Extract Zeal**
   - Visit the [Zeal GitHub Releases](https://github.com/iamclint/Zeal/releases) page. Click "Assets" and select the latest `Zeal.v#####.zip` file to download.
   - Extract the `uifiles` folder, `Zeal.asi` and `Zeal.pdb` files to the root of your TAKP folder, overwriting if/when asked.
2. **UI for Zeal**
   - For features such as **XP Per Hour** or **Total Mana Values** to work, you need to have a UI that is compatible with Zeal. For more information on UI files, refer to the [UI Files for Zeal section](/after-installing-the-game#where-to-get-quarm-user-interfaces). [Nillipuss UI 1440p](https://github.com/NilliP/NillipussUI_1440p), [qqui Calmethar Edition](https://www.eqinterface.com/downloads/fileinfo.php?id=6959), [Qrustle](https://github.com/UnforgivunAL/QRustle/releases/tag/QrustleZv2.0), [Murmurs / Franken UI](https://discord.com/channels/1133452007412334643/1162826324092657757/1228748380310733022), [DuxaUI](https://github.com/LordDemonos/Quarm.Guide/blob/master/assets/duxaUI.7z?raw=true), and [defaultUI](https://github.com/LordDemonos/Quarm.Guide/blob/master/assets/default.7z?raw=true) are the most popular UIs that are compatible with Zeal. 
3. **Verify Zeal Installation**
   - Verify that your `uifiles` folder has the `zeal` folder within. This is acts like your default UI files and will be included in your UI regardless of which UI folder you're using. The `Zeal` folder should contain the following files:
      - `targetrings` folder
      - `EQUI.xml`
      - `EQUI_GuildManagementWnd.xml`
      - `EQUI_OptionsWindow.xml`
      - `EQUI_ZealOptions.xml`
   - Log into the game and type `/zeal version` to check the version number.
   - Use `/help zeal` to see the list of available commands.
   - Press `Alt + O` to open the options menu and verify you have new options tabs related to Zeal.

### Crash Reports
If your game crashes, Zeal will create a folder in the root of your TAKP installation folder called `/crashes/` with crash reports in this format `2024-06-28_08-54-56.zip`. You can upload these to the official discord's [#zeal-discussions](https://discord.com/channels/1133452007412334643/1210670176077348934) and the team will try to identify the cause of the crashes to provide the community with a resolution.

### Zeal Readme
For a comprehensive list of features and commands, refer to the [Zeal Readme](https://quarm.guide/2024/09/01/zeal-readme/).

By following these steps, you should have Zeal installed and configured for Project Quarm. For any issues or further details, refer to the [full installation guide](/installing-the-game).
