---
title: 'Installing Project Quarm on Linux in 2024'
description: >-
    A comprehensive guide to installing and configuring Project Quarm on Linux in 2024. This guide covers prerequisites, game client setup, WINE configuration, and troubleshooting tips for a smooth gaming experience on the Quarm server.
keywords: >-
    Project Quarm, Quarm server, EverQuest Linux installation, Linux gaming, WINE configuration, Lutris, dgVoodoo2, Roland SC-55, Zeal addon, TAKP, EverQuest 2024, Arch Linux, Ubuntu, Fedora, gaming setup, troubleshooting
author: Qaedwen
---

# EverQuest on Linux in 2024

#### A Guide for the Quarm Server

#### By Qaedwen

```
Guide v1.1 [June 11, 2024 @ 23:28 UTC] 1
```

## Prerequisites

1. This guide assumes you are on Arch Linux, or a derivative distro. Ubuntu and Fedora
    distros will have similar steps, but not the same commands or package names.
2. This guide assumes you are comfortable acquiring and installing packages. This is not a
total newbie guide for people who have never used Linux.
3. This guide assumes you are using PipeWire + ALSA, though PulseAudio + ALSA may
work (untested).
4. You have already set up a login account for The Al’Kabor Project.
5. Files to download: [links current as of 11Jun24]
a. Game client v2.2 (download)
b. Quarm server files (Choose pq_files_xxx-zeal-2.zip in this Discord channel)
c. dgVoodoo v2.79.3 (download) [Note: no other version will work. Don’t try.]
d. Roland SC-55 midi sound font (download)
6. Packages:
a. lutris, fluidsynth, lib32-libpulse, wine, winetricks, protontricks, lib32-openal, gamescope
b. Appropriate GPU drivers, e.g. vulkan-radeon and mesa for Radeon GPUs. You also need the 32-bit
equivalents, e.g. lib32-vulkan-radeon and lib32-mesa for Radeon GPUs.


## Installing the Game

1. Extract your v2.2 game client to a folder of your choosing. These are the EQ game
    files trimmed down to run the Quarm server content.
2. Extract the Quarm server files to the same folder, overwriting if prompted.
3. Extract the dgVoodoo 2.79.3 folder to a temporary directory:
a. Go into the /MS/x86 folder in this temporary directory.
b. Rename D3D8.dll to d3d8.dll (case sensitive)
c. Rename D3D9.dll to d3d9.dll (case sensitive)
d. Copy and paste d3d8.dll + d3d9.dll to the EverQuest directory you created in step 1.
4. Extract the Roland SC-55 file (SC-55.sf2) to the EverQuest directory.
5. You now have the game, MIDI instruments, and Quarm files installed.


## Configuring WINE

1. Launch Lutris.
2. Click this icon.
3. Install the latest version of
wine-ge-x-xx present in this
list.
4. This gives you a special version
of WINE that is faster and
more capable than the standard
WINE package available to all
Linux distros.


## Create a WINE Prefix

This will start the process of
configuring WINE to run
EverQuest.

This will emulate a Windows
environment.

### STOP

The next steps are critically
important. Edit the menu entries
circled in red; ignore the rest.


## Configuring WINE Prefix


## Configuring WINE Prefix 1. This is the EverQuest game

```
executable you extracted
(page 3, step 1). This can be
any folder. My directory is
shown here for your reference.
```
2. This is the folder that holds
    your EQ install, including
    eqgame.exe.
3. This folder contains the files
to emulate Windows. Make it
a subfolder in your EQ game
directory. Files will be placed
here automatically.


## Configuring WINE Prefix


## Configuring WINE Prefix

1. Gamescope will put EverQuest into
    its own compositor (rendering
    environment). This will help catch
    the mouse so it stays in the game
    window. Especially helpful if you
    use Wayland or a tiling WM.
2. Set these to whatever resolution
your monitor is.
3. Choose if you want EQ to run in a
window, fullscreen, or borderless
fullscreen.


## Get MIDI Files Working

1. Open terminal.
2. Issue the following command:
a. fluidsynth -a pulseaudio -m alsa_seq -i -C on -R on -g 0.3 -s /path/to/eq_folder/SC-55.sf
3. If desired, set this command up as a service, a startup command, or some other
mechanism to run this persistently in the background. You could simply disown
the command if you want.

```
Change this directory to the EQ folder. You put the .sf2 file in this folder on page 3, step 4.
```
##### STOP

```
Now launch the game once and close it. See page 12 and 13 before actually
running the game and creating/selecting a character.
```

## What Not To Do

1. Do not try any other version of dgVoodoo except for 2.79.3. I know. Resist the
    temptation to just try the latest file. It won’t work.
2. Do not use suggestions from other tutorials. For example, do not use winetricks to
install dinput8, mono, corefonts, etc.
3. Do not try to change the resolution from within the game. Edit the eqclient.ini file
directly.


## Useful Settings for eqclient.ini

CombatMusic= 1 for on, 0 for off

ShowDynamicLights= TRUE for best quality, FALSE if light flickering

AllLuclinPcModelsOff= TRUE for classic models, FALSE for Luclin models

Width=
Height=
RefreshRate=

```
Change these to match your monitor settings
```
EnableClassicMusic= TRUE for classic MIDI, FALSE for mp3s

ClipPlane=20 Set farthest view distance

InspectOthers= FALSE to disable inspection of other players; leaving as TRUE
can be irritating


## Useful Next Steps

1. Obtain the 299MB TAKP version of EQ Classic HD to substantially improve the
    texture resolution of the game. Overwrite files when extracting this to the EQ
    directory. [link current as of 11Jun24]
2. Obtain the Highres 4X HD package(s) of your choosing. Overwrite files when
extracting this to the EQ directory. [link current as of 11Jun24]
3. Learn how to use Zeal, a Quarm-approved addon that adds new commands, better
3rd person, and better camera control.
4. I highly recommend NillipussUI. It’s clean and supports the extra features added
by Zeal.
5. Check out quarm.guide for more helpful applications, sound packages, spell
effects, etc.


## Troubleshooting

1. If the game instantly crashes after selecting a server, your dgVoodoo install is not
    correct. Make sure d3d8.dll and d3d9.dll are in the base EQ folder, and only use
    version 2.79.3.
2. If Lutris reports the game running, but you cannot see it, stop the game with
Lutris and delete eqw.ini in the EverQuest directory. Try again.



