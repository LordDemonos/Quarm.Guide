---
sitemap: 'true'
published: 'true'
toc: 'true'
date: '2025-04-15 22:00 -0700'
author: Krazzeekane
title: Project Quarm - Custom Midi Soundfont Guide
description: How to enable custom soundfonts for better MIDI playback of in game music
---
# *Project Quarm - Custom Midi Soundfont Guide*
### Author: Kane Evans (KrazzeeKane)



## Description:  

This guide explains how to modify the default Windows 11 midi playback engine and soundfont to more modern and better sounding ones. The default midi soundfont included with Windows 11 is very old and deprecated, and has very empty and tinny instruments in the soundfont. This leads to very bad sounding midi playback of songs when in the game. As such, I have decided to try and rectify this by making a set of custom soundfonts based off of the official EQ soundfonts included in the live game files, _'synthusr.sf2'_ (for Classic through Velious), and _'synthus2.sf2'_ (for Luclin and PoP).

These provided EQ soundfonts however, are incomplete. They are missing a number of instruments and samples, and require another soundbank of some kind to fill these in. Otherwise, you'll have improper playback due to missing instruments and samples that are being requested by the midi files. They require some type of other soundfont to fill them in. The popular _'synthusr_samplefix.sf2'_ soundfont that is from the p1999 forums attempted to fix this, but it utilized the very small and equally empty sounding _'1mgm.sf2'_ file to pull the missing instruments and samples from. This resulted in a more complete soundfont, but it still didn't sound anywhere close to how it was intended to sound.

As such, I have went ahead and done my own version of that project. I have taken these two incomplete EQ soundfonts, and have replaced every single missing instrument and sample with correct ones from a proper soundfont. This soundfont is taken from the same exact soundcard as what the composer of EQ has stated he used (Sound Blaster AWE32, aka _'AweROMGM.sf2'_ and a few others). I have then went ahead and tried my best to tweak these instruments to result in the best possible sound for EQ's midi's in the modern day. This is as close to what Jay Barbeau would have heard while composing the midi's, and how he would have intended for it to be heard.

**Note:** Because the live devs broke the midi client long ago, there can sometimes be bugs in midi playback. This may result in stuck notes, or sometimes no more music at all. This can be rectified by hitting the _'Midi Panic'_ hotkey in VirtualMidiSynth (default hotkey is Ctrl + Alt + Space). This will restart the music properly. There is unfortunately no way to fix this short of the client's midi engine being overhauled entirely.

Feel free to contact me on the discord if there are any other issues or concerns, such as a specific song sounds really off. I will try my best to see if I can rectify this and upload a fixed version of the soundfont if need be.

## Instructions:

**1.)** Download and install [VirtualMidiSynth](https://coolsoft.altervista.org/en/virtualmidisynth).



**2.)** Download and install [MidiMapper](https://coolsoft.altervista.org/en/midimapper). Open MidiMapper and configure Windows to read VirtualMidiSynth instead of the Microsoft Default Midi. Hit apply.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfFMN8WRZqS8WKcgOyZqykSaark_MZcOqF7O-BegxdWw6ShjVbxv1DgBuuIj5TMsjnv9TtnmrphhLljnLH_pRaZxFRCYqcwYaAwnzRkEYFSeAnk7mepzC20rWkDIvoMtuM2AhnZYw?key=Esan8fglBtBeqHb8v5yKpbuC)



**3.)** Open VirtualMidiSynth. Go to the Midi Mapper tab of VirtualMidiSynth, and ensure that '_Default MIDI Out device'_ and _'Windows Media Player default device'_ are both set to _'VirtualMidiSynth #1'_.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe41SxgA5K1BTqFyaWdR1HFi_H0UOxoN2OSMYOGrflfAQD_8PaKV0Cvo9c_rt8rw7tK08E6tnkXIp3RcjxawdaIkvURKyLUa59k46ARqISD83kSbJ3X6EwFZehTfFXUQzZKPp0T?key=Esan8fglBtBeqHb8v5yKpbuC)

**4.)** Open the Windows start menu, select run, then type _'Regedit'_ to open the Registry editor. Navigate to **'Computer\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows NT\CurrentVersion\Drivers32'** and confirm that _'midi'_ and _'midi1'_ both say **'VirtualMIDISynth.dll** and *not* **'wdmaud.drv'.** If _'midi'_ says **'wdmaud.drv',** double click the name midi and modify the value to also say **'VirtualMidiSynth.dll'** to match _'midi1'._

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfPOWnKLLUpOgrNQ4ebaJkxIuvs9dCrSQ9NUIjSt5_beazRbKbJ5_DD7hfvCw-3asAlEQYD_zHqMjN2Rr1wf71A0tGfTHZYAJGYaSEKpdV3K_mjhW_u4TzCNu1Aa1Z1LcDIj8Zy?key=Esan8fglBtBeqHb8v5yKpbuC)

**5.)** Download the two custom soundfonts made specifically for EQ from the [google drive](https://drive.google.com/drive/folders/176J0xF5a-psg9jd6KxVQnJ0lt_VO-uBU?usp=sharing) _('Krazzee's Custom EQ Soundfont.sf2')_ & (_'Krazzee's Custom Synthus2Revised4EQ.sf2')._ The default Microsoft midi soundfont is included as well in case you wish to revert back to default, or want to compare.

You may also utilize any other soundfonts if you have others you prefer--simply load them via VirtualMidiSynth, and disable the others. Though my soundfont is developed specifically for Everquest, and to give proper playback to the midi's of the game, there are some other popular alternative recommendations for soundfonts, I have listed below:

- _ChoriumRevB.sf2_
- _8MBGMSFX.SF2_
- _merlin_gmv32(v3.2).sf2_
- _AweROMGM.sf2_
- _Arachno_SoundFont_Version_1.0.sf2_


**6.)** Add the soundfonts to VirtualMidiSynth, ensure that _'Krazzee's Custom EQ Soundfont.sf2'_ is at the very bottom to guarantee it runs as the primary soundfont. Double check that your Soundfonts tab matches the picture, and that both soundfonts are active (IE: the box to the left is green).

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd79_MzCoWi35CPBgkYQyqUhD8LBHMQjEe74pmDpzcK-XzcMTTZ4g0cMe7Nnh7Y_WGGvVUjeLi30oOeQvR7-wWpOt2iPaLp0RvjfnB2llRUM0cqwEem2PG-sEoNRZGgidFn8fcPzQ?key=Esan8fglBtBeqHb8v5yKpbuC)

**7.)** Go to the options tab of VirtualMidiSynth. Change the _'maximum number of notes to play at one time' setting_ to **10000.** Check the box for _'Use sinc interpolated sample mixing instead of linear interpolation',_ and change the _reverb max level_ and _chorus max level_ to **127.**

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfRzyyU-v8iypNBZ2SFg-hpQ1yMenmLhkvnE3ADSrcMm0euQwZkjyEASxmgfXEvaazvF8O8G1IjgbL6u8MzA3oegAw908fb2uPtmdPxa0t5qg095mV3jU-k35K4V-4zuXTYPQW0?key=Esan8fglBtBeqHb8v5yKpbuC)

**8.)** Hit apply in VirtualMidiSynth to save the new settings.

**9.)** Navigate to your Project Quarm directory. Backup then delete the following 4 mp3 files to force the client to use old music:

-   _combattheme1.mp3_

-   _combattheme2.mp3_

-   _deaththeme.mp3_

-   _eqtheme.mp3_

**10.)** Open EQClient.ini and change _'EnableClassicMusic=FALSE'_ to _TRUE._ If this setting does not exist, you may add it under the **[DEFAULTS]** section of _EQClient.ini._

**11.)** Enjoy your new and improved midi sound! You can remove, add, and change soundfonts on the fly in VirtualMidiSynth and hit apply to hear the changes immediately. You can also load .midi files via Windows Media Player to hear the soundfonts