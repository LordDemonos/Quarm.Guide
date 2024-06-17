# EverQuest on Linux in 2024

#### A Guide for the Quarm Server

#### By Qaedwen

Guide v1.1 [June 11, 2024 @ 23:28 UTC]

<div style="text-align: center;">

<h2>Prerequisites</h2>

<div style="display: flex; align-items: center; justify-content: center;">

<div style="flex: 1;">

<ol>

<li>This guide assumes you are on Arch Linux, or a derivative distro. Ubuntu and Fedora distros will have similar steps, but not the same commands or package names.</li>

<li>This guide assumes you are comfortable acquiring and installing packages. This is not a total newbie guide for people who have never used Linux.</li>

<li>This guide assumes you are using PipeWire + ALSA, though PulseAudio + ALSA may work (untested).</li>

<li>You have already set up a login account for The Al'Kabor Project.</li>

<li>Files to download: [links current as of 11Jun24]

<ul>

<li>Game client v2.2 (download)</li>

<li>Quarm server files (Choose pq_files_xxx-zeal-2.zip in this Discord channel)</li>

<li>dgVoodoo v2.79.3 (download) [Note: no other version will work. Don't try.]</li>

<li>Roland SC-55 midi sound font (download)</li>

</ul>

</li>

<li>Packages:

<ul>

<li>lutris, fluidsynth, lib32-libpulse, wine, winetricks, protontricks, lib32-openal, gamescope</li>

<li>Appropriate GPU drivers, e.g. vulkan-radeon and mesa for Radeon GPUs. You also need the 32-bit equivalents, e.g. lib32-vulkan-radeon and lib32-mesa for Radeon GPUs.</li>

</ul>

</li>

</ol>

</div>

</div>

</div>
<div style="text-align: center;">

<h2>Installing the Game</h2>

<div style="display: flex; align-items: center; justify-content: center;">

<div style="flex: 1;">

<ol>

<li>Extract your v2.2 game client to a folder of your choosing. These are the EQ game files trimmed down to run the Quarm server content.</li>

<li>Extract the Quarm server files to the same folder, overwriting if prompted.</li>

<li>Extract the dgVoodoo 2.79.3 folder to a temporary directory:

<ul>

<li>Go into the /MS/x86 folder in this temporary directory.</li>

<li>Rename D3D8.dll to d3d8.dll (case sensitive)</li>

<li>Rename D3D9.dll to d3d9.dll (case sensitive)</li>

<li>Copy and paste d3d8.dll + d3d9.dll to the EverQuest directory you created in step 1.</li>

</ul>

</li>

<li>Extract the Roland SC-55 file (SC-55.sf2) to the EverQuest directory.</li>

<li>You now have the game, MIDI instruments, and Quarm files installed.</li>

</ol>

</div>

</div>

</div>

<div style="display: flex; align-items: flex-start;">

<div style="flex: 1;">

<h2>Configuring WINE</h2>

<ol>

<li>Launch Lutris.</li>

<li>Click this icon in figure 1.</li>

<li>Install the latest version of wine-ge-x-xx present in this list shown in figure 2.</li>

<li>This gives you a special version of WINE that is faster and more capable than the standard WINE package available to all Linux distros.</li>

</ol>

</div>

<div style="flex: 1; text-align: center;">

<img src="/assets/images/linux/figure1.png" alt="Figure1" style="max-width: 100%;">

<img src="/assets/images/linux/figure2.png" alt="Figure2" style="max-width: 100%;">

</div>

</div>

<div style="display: flex; align-items: flex-start;">

<div style="flex: 1;">

<h2>Create a WINE Prefix</h2>

<p>This will start the process of configuring WINE to run EverQuest. This will emulate a Windows environment.</p>

<h4>STOP</h4>

<p>The next steps are critically important. Edit the menu entries circled in red; ignore the rest.</p>

</div>

<div style="flex: 1; text-align: center;">

<img src="/assets/images/linux/figure3.png" alt="Figure3" style="max-width: 100%;">

</div>

</div>

## Configuring WINE Prefix

<div style="text-align: center;">

<img src="/assets/images/linux/figure4.png" alt="Figure4" style="max-width: 100%;">

</div>

<div style="display: flex; align-items: flex-start;">

<div style="flex: 1; text-align: center;">

<img src="/assets/images/linux/figure5.png" alt="Figure 5" style="max-width: 100%;">

</div>

<div style="flex: 1;">

<ol>

<li>This is the EverQuest game executable you extracted (page 3, step 1). This can be any folder. My directory is shown here for your reference.</li>

<li>This is the folder that holds your EQ install, including eqgame.exe.</li>

<li>This folder contains the files to emulate Windows. Make it a subfolder in your EQ game directory. Files will be placed here automatically.</li>

</ol>

</div>

</div>
        <img src="/assets/images/linux/figure6.png" alt="Figure 6" style="max-width: 100%;">
                <img src="/assets/images/linux/figure7.png" alt="Figure 7" style="max-width: 100%;">
                


<div style="display: flex; align-items: flex-start;">

<div style="flex: 1; text-align: center;">

<img src="/assets/images/linux/figure8.png" alt="Figure 8" style="max-width: 100%;">

</div>

<div style="flex: 1;">

<ol>

<li>Gamescope will put EverQuest into its own compositor (rendering environment). This will help catch the mouse so it stays in the game window. Especially helpful if you use Wayland or a tiling WM.</li>

<li>Set these to whatever resolution your monitor is.</li>

<li>- Choose if you want EQ to run in a window, fullscreen, or borderless fullscreen.</li>

</div>

</div>

<h2>Get MIDI Files Working</h2>

<div style="display: flex; align-items: flex-start;">

<div style="flex: 1;">

<ol>

<li>Open terminal</li>

<li>- Issue the following command:</li>

<li>fluidsynth -a pulseaudio -m alsa_seq -i -C on -R on -g 0.3 -s /path/to/eq_folder/SC-55.sf2</li>

<li>If desired, set this command up as a service, a startup command, or some other mechanism to run this persistently in the background. You could simply disown the command if you want.</li>

</ol>

</div>

<div style="flex: 1; text-align: center;">

<img src="/assets/images/linux/figure9.png" alt="Figure 9" style="max-width: 100%;">

</div>

</div>

<div style="text-align: center;">

<h2>What Not To Do</h2>

<ol>

<li>Do **not** try any other version of dgVoodoo except for 2.79.3. I know. Resist the temptation to just try the latest file. It won’t work.</li>

<li>Do not use suggestions from other tutorials. For example, do not use winetricks to
install dinput8, mono, corefonts, etc.</li>

<li>Do not try to change the resolution from within the game. Edit the eqclient.ini file
directly..</li>

</ol>

</div>
<div style="text-align: center;">

<h2>Useful Settings for eqclient.ini</h2>

<ul>

<li>CombatMusic=1 for on, 0 for off </li>
        <li>ShowDynamicLights=TRUE for best quality, FALSE if light flickering</li>
        <li>AllLuclinPcModelsOff=TRUE for classic models, FALSE for Luclin models</li>
        <li>Width=3440</li>
        <li>Height=1440</li>
        <li>RefreshRate=120 Change these to match your monitor settings</li>
        <li>EnableClassicMusic=TRUE for classic MIDI, FALSE for mp3s</li>
        <li>ClipPlane=20 Set farthest view distance</li>
        <li>InspectOthers=FALSE to disable inspection of other players; leaving as TRUE
can be irritating</li>

</ul>

</div>

<div style="text-align: center;">

<h2>Useful Next Steps</h2>

<div style="display: flex; align-items: center; justify-content: center;">

<div style="flex: 1;">

<ol>

<li>Obtain the 299MB TAKP version of EQ Classic HD to substantially improve the
texture resolution of the game. Overwrite files when extracting this to the EQ
directory. [link current as of 11Jun24]</li>

<li>Obtain the Highres 4X HD package(s) of your choosing. Overwrite files when
extracting this to the EQ directory. [link current as of 11Jun24]</li>

<li>Learn how to use Zeal, a Quarm-approved addon that adds new commands, better
3rd person, and better camera control.</li>

<li>I highly recommend NillipussUI. It’s clean and supports the extra features added
by Zeal.</li>

<li>Check out quarm.guide for more helpful applications, sound packages, spell
effects, etc.</li>

</ol>

</div>

</div>

</div>

<div style="text-align: center;">

<h2>Troubleshooting</h2>

<div style="display: flex; align-items: center; justify-content: center;">

<div style="flex: 1;">

<ol>

<li>If the game instantly crashes after selecting a server, your dgVoodoo install is not
correct. Make sure d3d8.dll and d3d9.dll are in the base EQ folder, and only use
version 2.79.3.</li>

<li>If Lutris reports the game running, but you cannot see it, stop the game with
Lutris and delete eqw.ini in the EverQuest directory. Try again.</li>

</ol>

</div>

</div>

</div>
