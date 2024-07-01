---
date: 2024-06-01
title: "Xanax's Checklist for Installing Zeal"
description: 'A concise guide to installing Zeal in Project Quarm, including prerequisites, download links, and configuration tips.'
keywords: 'Project Quarm, Quarm, EverQuest, Zeal, installation, dgVoodoo, compatibility settings'
author: 'Xanax'
published: true
sitemap: true
---

## Xanax's Checklist for Installing Zeal

This checklist provides a summarized version of the steps required to install Zeal in Project Quarm. For detailed instructions, refer to the [Installing Zeal Guide](../wiki/installing-the-game#step-4-installing-zeal-).

### Prerequisites

1. **Enable Sound in eqclient.ini**

   - Ensure `Sound=TRUE` is listed in your `eqclient.ini`. Zeal requires sound to be enabled to function properly.

2. **Exclude TAKP Installation from Antivirus Scanning**
   - Exclude your TAKP folder from antivirus scans to reduce load times and prevent stuttering. Follow the [detailed instructions](../wiki/installing-the-game#prerequisite-2-required-excluding-your-takp-installation).

### Installation

1. **Download and Extract Zeal**

   - Visit the [Zeal GitHub Releases](https://github.com/iamclint/Zeal/releases) and download the latest version.
   - Extract `Zeal.asi` and the `Zeal.pdb` folder to your TAKP folder.
   - Extract `EQUI_OptionsWindow.xml` to your `/uifiles/duxaUI/` folder or whichever UI folder you have set in your `eqclient.ini`.

2. **Verify Zeal Installation**

   - Log into the game and type `/zeal version` to check the version number.
   - Use `/help zeal` to see the list of available commands.

3. **UI Files for Zeal**

   - For features such as **XP Per Hour** or **Total Mana** to work, you need to have a UI that is compatible with Zeal. For more information on UI files, refer to the [UI Files for Zeal section](../wiki/after-installing-the-game#where-to-get-quarm-user-interfaces). Nillipuss, CalmetharED, Qrustle, Franken UI, DuxaUI, and Default are the most popular UIs that are compatible with Zeal..

4. **Zeal Readme**

   - For a comprehensive list of features and commands, refer to the [Zeal Readme](../2024-05-30-zeal-readme).

By following these steps, you should have Zeal installed and configured for Project Quarm. For any issues or further details, refer to the [full installation guide](../wiki/installing-the-game).
