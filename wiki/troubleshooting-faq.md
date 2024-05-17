---
title: "Troubleshooting FAQ for Project Quarm"
description: "Find solutions to common issues in Project Quarm, including disabling Luclin models, fixing mouse issues, adjusting game settings, and more."
keywords: "Project Quarm, Quarm, Quarm troubleshooting, EQ troubleshooting, game settings, Luclin models, mouse issues, EQMAIN.DLL error, Velious textures"
author: "Xanax"
---

### FAQ, Troubleshooting, and Obscure Situations

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
- [How does a viewport work?](#how-does-a-viewport-work)


#### Where can I learn more about Project Quarm?
**A:** The main website projectquarm.com contains a link to the [Project Quarm Discord](https://discord.gg/3nDQ9AkUz8).

#### When I use my mouse wheel to scroll backwards, I do not see my character in 3rd person. How do I enable Mouse Look?
**A:** You may have disabled mouse look. While logged into the game, press F12 to enable/disable mouse look.

#### How do I make the chat text bigger in game?
**A:** /chatfontsize 1-5

#### Why doesn't (zeal feature) appear in my User Interface?
**A:** Zeal adds functionality so the User Interface needs to be told how to display that functionality. Zeal contains a few UI files you can drop into the TAKP/Uifiles/ folder that you use. Alternatively, you can find new user interfaces with added functionality. I use [Nillipus UI 1440p](https://discord.com/channels/1133452007412334643/1162826324092657757/1224809011392807003),  [Merchant](https://discord.com/channels/1133452007412334643/1162826324092657757/1224861589799178321). I can also recommend [qqui Calmethar](https://www.eqinterface.com/downloads/fileinfo.php?id=6959) as it is updated frequently.

#### How do I change my resolution?
**A:** In your `eqclient.ini` you can find the [VideoMode] section. Change this to match your desktop's settings. 

- [VideoMode] 
- Width=1920
- Height=1080
- (match your display settings with the proper height and width prior to launching the game)

#### How do I run the game full screen?
**A:** You want to run the game in windowed mode first. In your `eqclient.ini` set this option `WindowedMode=TRUE`. Find [VideoMode] and set it to your desired resolution. When you are logged into EverQuest, press SHIFT + Enter to switch between windowed and fullscreen modes. If you are still having problems, see the 3rd party programs section for LosslessScaling.

#### I'm using the Stone UI from 1999?
**A:** In your `eqclient.ini` set NewUI=TRUE and `OldUI=False`.

#### How do I view nameplates from far away?
**A:** Use an [updated](https://quarm.guide/installing-the-game#step-3-converting-your-takp-client-to-quarm) `eqgame.dll` and make sure `eqclient.ini` has `EnableExtendedNameplateDistance=TRUE`. 

#### The game still isn't smooth. Camera movement is still jittery?
**A:** First make sure you're using the experimental `eqgame.dll` file as this fixes the framerate options in your `eqclient.ini`. With previous versions of `eqgame.dll` the frame rate/refresh rate values would not be respected. 

The supported client includes a frame rate limiter not found in the original client. You can change foreground and background FPS limits (this gets put in automatically if absent) by editing these lines in your `eqclient.ini`:

[Options]
- MaxFPS=60 - This is the framerate you limit the foreground client window to. If this is set too high, it may consume too many system resources. Typically 60 is a good number to start with and adjust if necessary. A setting of 0 disables the limit.
- MaxBGFPS=60 - This is the framerate you limit the background client windows to. You don't want this too low, since it will affect autofollow ability. But, if you have it too high, it may consume too many system resources. 60 is typically good. A setting of 0 disables the limit.
- MaxMouseLookFPS=60 - Allows you to set the mouselook FPS to help with mouselook slowness. If your mouselook is too slow, try adjusting this to 60 or 45. A setting of 0 disables the limit.
- NoFPSLimiter=0 - Enables/disables the No FPS Limiter and likes to set itself to 1. For the smoothest experience, set this to 0.

The recommended frame rate for MaxMouseLookFPS is 60 (or 30) to avoid mouse look issues. It's 0 (unlimited FPS) by default. Very high frame rates will make the mouse look less usable. However you can change these if desired. You may want a higher background FPS for better autofollowing. These features (among other fixes) are a part of the latest eqgame.dll you would have downloaded under the Obtaining the Client Section for Windows. [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows)

#### I logged in and I can only move the camera left and right or only up and down? Mouse speed is really fast too?
**A:** Sometimes Zeal's camera movement settings do not save properly so the camera feels too fast, or wont move at all. In game you can ALT + O to open the options menu and navigate to the Zeal tab. I like all my camera settings around .3. These settings can also be found in `eqclient.ini` at the bottom under [Zeal] `MouseSensitivityX=0.300000` `MouseSensitivityY=0.300000` `MouseSensitivityX3rd=0.300000` `MouseSensitivityY3rd=0.300000`.

#### I want to turn off the loud music at character creation or character select screen?
**A:** Delete the following files from your TAKP folder. `eqtheme.mp3` `combattheme1.mp3` `combattheme2.mp3` `deaththeme.mp3`

#### Quarm enabled snow and it's very loud?
**A:** Originally posted on discord by Hallic|Kelendil: For those interested in reducing or deleting the new event snow sound, the name of the file for the snow/wind loop is `wind_lp1.wav` located in the `snd2.pfs` file in your EQ directory. You will need a special pfs file viewer to open, extract or delete this file. To do so, use [EQ-Zip EverQuest Archive Manager](https://github.com/Shendare/EQZip/releases). First open `snd2.pfs` and you will see a list of several environmental sounds there. You can export or delete the `wind_lp1.wav` OR even use an online .wav volume reducing tool such as [Change Volume](https://mp3cut.net/change-volume) to reduce the volume. You can then upload the reduced volume wav file back into `snd2.pfs` (overwrite and replace the loud one) and now you have a much softer sounding ambient wind. You can do this for all the sound files btw and even make custom ones.

#### I have a new laptop with an integrated graphics card and I'm experiencing graphical problems?
**A:** *Hybrid Graphics Support* Some laptops containing hybrid graphics, with discrete graphics processing capabilities, often do not get utilized by the PC Client. This is due to the graphics in the older PC client being based on MS DirectX 8. A DirectX wrapper has been found that can successfully enable use of the discrete GPU, over the slower on board graphics. If you are experiencing performance issues on a relatively new laptop with an integrated GPU, give one of the following two options a try. One option is using dgVoodoo2, read more [here](https://wiki.takp.info/index.php/Getting_Started_on_Windows).

Option 1: You can download the dgVoodoo2 wrapper at [dgVoodoo2](http://dege.freeweb.hu/dgVoodoo2/dgVoodoo2/). This specific [Version 2.8.2](http://dege.fw.hu/temp/dgVoodoo2_81_exp4.zip) seems to work well on AMD and NVidia based hybrid graphics.

To install this wrapper, you need to open the downloaded zip file, and copy the `D3D8.dll` file found in the MS subfolder, and put this in the same folder as your `eqgame.exe`. Then just run the eqgame.exe normally. DO NOT PUT THIS FILE IN YOUR WINDOWS SYSTEM FOLDER!!! After selecting this display adapter, the game should run normally, with the exception of changing screen resolutions. If you change the display resolution in game, it WILL crash the client. So only do this in a safe location. You can optionally change the resolution by hand in the `eqgame.ini`.

In order for dgVoodoo to fire, you have to set `eqgame.exe` to use High Performance Mode in your NVidia control panel. Refer to below screenshot

![NvidiaPerformanceSetting](./assets/images/faq/NvidiaPerformanceSetting.png)

If you have an AMD card, find an equivalent setting in the Radeon control panel.

If the wrapper is loaded, in game it will have a "dgVoodoo" watermark in the lower right corner of the display. The performance difference is usually very noticeable. But if you want to be sure, you can use software such as [GPU-Z](https://www.techpowerup.com/gpuz/), to monitor the load on the discrete graphics card. Remove the watermark by running `dgVoodooCpl.exe`, clicking the DirectX tab, and unchecking 'dgVoodoo Watermark.' OR you can locate the dgVoodooWatermark line in your dgVoodoo.conf file and make sure it's set to false: "dgVoodooWatermark = false" If it doesn't exist, create it.

Option 2: [DXwrapper](https://www.dropbox.com/s/phvxgl6ojf2xqih/DxWrapper.zip?dl=0). This wraps the dx8 to dx9. It will use the amd graphics on a switchable graphics laptop, even though it selects the onboard graphics at run time. By using GPU-Z, you can see which graphics card is doing the work. What doesn't work, is adjusting the gamma from the slider in game. Just put these 3 files in your TAKP install folder and give it a try. If it doesn't work or you don't see performance gains, then remove them. [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows)

#### How do I disable Luclin models?

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

#### How do I disable Velious armor textures?
**A:** Locate the section in your `eqclient.ini` for Velious armor textures and set them to FALSE. Velious armor textures are not enabled by default as they can cause an issue with Vah Shir armor not displaying. 

`LoadVeliousArmorsWithLuclin=FALSE
LoadArmor17=FALSE
LoadArmor18=FALSE
LoadArmor19=FALSE
LoadArmor20=FALSE
LoadArmor21=FALSE
LoadArmor22=FALSE
LoadArmor23=FALSE`

#### Sometimes my character's spell gems stay grayed out and the server stops responding to my client.
**A:** This is what is commonly referred to as 'desyncing'. The precise cause(s) of the problem are unknown (else they would get fixed up) but there are things that can be done to reduce the chance of this occurring.

- Ensure that your internet connection is uncongested. Try using a wired connection to your router instead of wifi.
- Make sure your firewall isn't blocking client ports.
- Make sure your frame rate is limited if running the Windows client.
- Use one of the clients linked above if you're using a different one.
- Try connecting over a VPN. Some users claim this helps.

[See also this post summarizing connection issues for TAKP](http://www.takproject.net/forums/index.php?threads/connection-issues-read-this.4488/#post-24796). [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows)

#### Chat channels keep dropping?
**A:** If your chat channels regularly drop, you can try adding `ChatKeepAlive=1` in the defaults section of the `eqclient.ini`, this will increase the frequency the keepalives are sent to every 15 seconds.

If one packet is dropped, that is the keepalive from Client to Server, you will time out before it triggers again, if the `ChatKeepAlive=1` is not set. So this specific condition can contribute to chat channels dropping. [Source: wiki.takp](https://wiki.takp.info/index.php/Getting_Started_on_Windows)

####  Why is my non-QWERTY keyboard not working correctly in game? 
**A:** The default client is packaged with the QWERTY keyboard layout file. This can be changed by replacing the `keyboard.txt` in your TAKP folder with the one made for your locality [keyboard.txt by nationality](https://drive.google.com/open?id=0B70BIislzWn_U01KbnNXQVZ3WU0). *Please note that several are still missing and will be uploaded as we can find/make them*

#### I'm having mouse issues?
**A:** Usually caused by DPI Scaling setting in Windows. Need to set it to 100% DPI scaling. You may find this forum thread useful: [Mouse issues](https://www.takproject.net/forums/index.php?threads/mouse-issues.9806/))

#### I'm getting a EQMAIN.DLL error running the game?
**A:** This happens if you try to launch the game from Windows Search results. Don't launch from search results. Navigate to the folder manually and run `eqgame.exe` directly, or create a desktop shortcut, or launch via hotkey.net. Also this error can happen if your anti-virus deletes some game files. Make sure you set AV exclusions and the game files aren't being quarantined.

![Eqmain-dll-error](./assets/images/faq/Eqmain-dll-error.png)

#### The text in game is fuzzy and not clear?
**A:** In each of your EQ folders:
- Right click `eqgame.exe`, properties, compatibility tab, change DPI settings, check the box "Override high DPI scaling behavior" and select "Application" in the dropdown.

#### The gamma slider doesn't work?
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

#### The EULA acceptance window moved so I can't log in?
**A:** This is the first window you see when you run the game. Settings for this are in the eqw.ini file in your EQ folder. Positions are set numerically according to each resolution you use (2 for x and y would be the upper left for example):

![Eqwini](./assets/images/faq/Eqwini.png)

#### I have white and yellow bars covering my text?
**A:** This is likely caused by an incompatible version of dgvoodoo. You can either look for a newer or older version that is compatible with your graphics card or can disable dgvoodoo by moving the d3d8.dll out of the EQ client folder and relaunching the client.

This issue is fixed in v2.2 client that has an updated dgVoodoo2 d3d8.dll which is compatible with AMD cards. You can download it from [here](http://dege.fw.hu/temp/dgVoodoo2_81_exp4.zip).

![Barscoveringtext](./assets/images/faq/Barscoveringtext.png)

#### The game runs too fast?
**A:** If you are using an AMD 7xxx series CPU in your system you may need to adjust your system's settings to avoid this issue. The following were done by different people to correct this issue:

- "I disabled PBO and reduced clock speed to 3900 in bios then in Ryzen Master switched to normal profile and it's working for me now. Game running at normal speed."
- "I fixed my AMD 7950x. PBO off, CPU boost off, fixed 42x 100 for 4.2Ghz set clock speed. Set the Ram to 6000 with XMP II."

Use Ryzen Master to apply settings [Source: TAKP Forums](https://www.takproject.net/forums/index.php?threads/everything-is-at-10x-speed.27284/)) 

#### I'm still experiencing crashes during long play sessions on raids?
**A:** If you are experiencing client crashing during raids, can check the long discussion [here](https://www.takproject.net/forums/index.php?threads/crashing-when-zoning-long-play-sessions.20996/page-5#post-114059).
- Edit your `eqclient.ini` file and set this value to zero `ShowSpellEffects=0` or in-game can type `/showspell OFF`
- Update to latest [FreeTheMouse client v3.6.4](https://www.dropbox.com/s/qzb86juu8k87mfs/eqgame_dll%20v3.6.4%20for%20ftm.zip?dl=0). This should help with client switching crashes.
- Edit your eqclient.ini file and change this line to match your chosen UI that you use `UISkin=<your UI name>`.
[Source: TAKP Forums](https://www.takproject.net/forums/index.php?threads/crash-to-desktop-on-enter-world.16444) [Source: TAKP Forums](https://www.takproject.net/forums/index.php?threads/power-of-two-ui-crashing-client-when-entering-world.11793)

#### I can't see the bottom of the logon window to press the accept button?
**A:** Add the Following lines to [Defaults] Section of your `eqclient.ini`

`FEWindowedModeXOffset=0`
`FEWindowedModeYOffset=0`

#### I can't find Grizzly Bear Skins, only Thick Grizzly Bear Skins?
**A:** Thick Grizzly Bear Skins work for whatever quest or item you are trying to complete. From user [Peuw](https://discord.com/channels/1133452007412334643/1154893244702920806/1154893244702920806):*After turning in the four skins, he returns only the Grizzly Bear Skin and states he has no need for these items. I found he accepts:*

`Thick Grizzly Bear Skin (should be not Thick?)`
`Shark Skin`
`Polar Bear Skin`
`Alligator Skin`

*I was able to complete the cap quest with these skins, and the following dagger turn in.* 

#### There are no maps?
**A:** The map system was introduced with the Legacy of Ykesha expansion in February 2003, and is not present in Project Quarm. I suggest looking into [ZlizEQMap](#ZlizEQMap). 

#### How do I install a custom mouse pointer?
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

#### My default chat channel will not save?
**A:** It's a Quarm bug. If you set the default channel on any other chat window, that isn't the 'Main' one, the setting will save between logging. [Source: Zephon](https://discord.com/channels/1133452007412334643/1214573430402322503/1220133660125167626)

#### One of my UI windows is off screen and I can't move it?
**A:** Your settings are saved in your [UI .ini file](#Duplicating-your-UI-Settings-for-New-Characters ) so there's a couple ways you can reset these values. You can edit the file yourself and change the coordinates of the specific UI element that is off screen, and then reload your UI. You could delete the file and the game will generate a new one upon next login. The simplest method is to simply reload your UI without using the file and tell EQ to reset all the windows. You can type /loadskin uiname without appending a 1 to the end, to have EQ load the UI without saving positions. Learn more [here](#how-do-i-install-an-interface).

#### I do not see buff timers?
**A:** You need an updated `eqgame.dll` file, [see here](#Step-3-Converting-your-TAKP-client-to-Quarm)

#### Are there hell levels?
**A:** Level smoothing rules are in place on this server. The typical hell levels still require more exp but the requirements for each level are a lot more even than in the original game. You can look up how much exp you need per level over at [pqdi.cc](https://www.pqdi.cc/exp).

#### Do pets take a portion of experience?
**A:** If your pet deals more than 50% of the mob's total health, it will earn exp as if it were another player in your party. [Source: Secrets](https://discord.com/channels/1133452007412334643/1133453587675103323/1147980850701545504) This is true if you are solo or grouped. However it is unlikely a single pet will deal over 50% of a mob's total health when you are grouped, since your party members are also doing damage. This rule applies to each individual pet, so a party with 3 mages doesn't need to worry, since a single pet is still not dealing 50% of a mob's total health.

#### How do I turn off the loud music at character select or character creation?
**A:** Option 1 - Replace your sound files with ones that have been muted. I have run the four files listed below through a website that lowers the volume to zero, but retains the file size. [no_login_music.7z](https://github.com/LordDemonos/Quarm.Guide/blob/master/assets/no_login_music.7z?raw=true) Extract these into the root of your TAKP folder and overwrite the older ones. Then make sure your `eqclient.ini` you have this value `EnableClassicMusic=FALSE`. False forces the game to use modern music, which we've just muted.
  
Option 2 - Use Classic Midi Sounds. Delete the following files:[Source: Rumpus on Discord] 

- eqtheme.mp3
- combattheme1.mp3
- combattheme2.mp3
- deaththeme.mp3

Delete these from your main TAKP folder. Then make sure your `eqclient.ini` you have this value `EnableClassicMusic=TRUE`. Midis will be restored and they are not as loud and "sound much better".

#### How does a viewport work?
**A:**

There are a few resources on adjusting the screen area instead of the resolution, to better format your EverQuest viewing experience. I think [Cairenn on eqinterface](https://www.eqinterface.com/forums/showthread.php?t=4180) explained its usage the best. 

When you type the /viewport command, it tells you it wants 4 numbers: x, y, w, and h.

x = where you want the viewing area to start from the left of the screen
y = where you want the viewing area to start from the top of the screen

So, 0, 0 would mean that it starts in the very top farthest left corner of your screen.

w = how wide you want the viewing area to be from x
h = how high you want the viewing area to be from y

So, 1280x1024 means that your viewing area would be 1280 pixels wide and 1024 pixels high.

Put it together, and you get:
/viewport 0 0 1280 1024

This is telling your computer to start drawing the viewing area at the top left corner and to make it 1280 wide and 1024 high.

If you put in a viewport of /viewport 0 0 1000 750, it would be telling your computer that it wants it to start drawing the viewing area at the top left corner, but to only make it 1000 pixels wide and 750 pixels high. This would let you put stuff down the right-hand side of the screen and across the bottom, without them hiding the viewing area at all.

Now, say you wanted to put some stuff down the left-hand side of the screen, and across the top, but again, you don't want to have it hide stuff on the screen. Let's say that the items you are putting down the right-hand side are 20 pixels wide, and the ones across the top are 24 pixels high. What you would type is:
/viewport 20 24

That tells it to move over 20 pixels and down 24. But you still need the last two numbers, right?

You figure that out by taking the width and height of your screen and subtracting the two amounts above.

So, if you have a viewing area that is 1280 wide by 1024 high, you would go:
1280 wide minus 20 (the amount you are moving it over) = 1260
and
1024 high minus 24 (the amount you have moved it down) = 1000

Which means that your complete command line would be
/viewport 20 24 1260 1000
