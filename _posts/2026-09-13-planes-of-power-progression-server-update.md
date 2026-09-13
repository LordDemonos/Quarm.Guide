---
sitemap: 'true'
published: 'true'
toc: 'true'
date: '2026-09-13 14:28 -0400'
author: Xanax
title: Planes of Power Progression & Server Update
description: Planes of Power Progression & Server Update
keywords: 'PoP, Planes, Power, Quarm, EverQuest'
---
# Planes of Power Progression & Server Update

This is the big Plane of Power progression update. The goal is not to make PoP instant. The goal is to remove unnecessary bottlenecks, make failed scripted events recover reasonably, support full 72-player raids for progression, and make raid timing much easier to understand. Some changes below are still awaiting final merge/deployment. The **Luclin section near the bottom is specifically still pending approval**.

## First: How Raid Timers Work

There are three different kinds of timers mentioned throughout these notes: **Successful kill respawn / reuse timer** This is how long the event stays down **after you successfully beat it**. **Failed-event retry timer** This is how long you wait **after the raid fails the event** before the encounter or its trigger becomes available for another attempt. **Active event window** Some scripted encounters give you a certain amount of time to complete the event once it has started. This is **not** the boss respawn. If that active window expires, the event fails and then its failed-event retry timer begins. For most standard PoP raid bosses:

- Successful kill: **66-hour respawn**
- Character loot lockout: **66 hours**

For the four elemental gods:

- Successful kill: **5 days, 18 hours**
- Character loot lockout: **5 days, 18 hours**

A wipe does **not** automatically mean waiting through those full successful-kill timers. Many scripted events have much shorter failed-event retry times. ---

# Plane of Power Access & Trash Respawns

- Plane of Power gameplay and progression zones require **level 46**.
- Plane of Knowledge remains open to everyone.

Selected open-world PoP trash has also been standardized. **Tier 1–3: 19.5-minute respawns**

- Bastion of Thunder
- Crypt of Decay
- Plane of Nightmare
- Plane of Storms
- Plane of Torment
- Tower of Solusek Ro

**Elemental planes: 25.5-minute respawns**

- Plane of Air
- Plane of Fire
- Plane of Water

The selected spawns have no random timer variance. ---

# Standard 66-Hour Raid Cycle

The following progression encounters use the standard **66-hour successful-kill respawn and 66-hour loot lockout**.

## Bastion of Thunder / Halls of Honor / Tactics / Valor

- Agnarr the Storm Lord
- Lord Mithaniel Marr
- Tallon Zek
- Vallon Zek
- Rallos Zek the Warlord
- Aerin`Dar

## Nightmare / Disease / Decay / Torment / Justice

- Terris Thule
- Grummus
- Bertoxxulous
- Carprin Deatharn
- Saryrn
- The Seventh Hammer

## Plane of Air

- Queen Silandria
- Arch Mage Alchtonion
- Gakamenial Fir`Disralsi
- Rinturion Windblade
- Baltaldor the Cursed
- Sigismond Windwalker

## Tower of Solusek Ro

- Arlyxir
- Jiva
- Rizlona
- Xuzl
- Guardian / Protector of Dresolik
- Solusek Ro

## Plane of Fire Named

- Arch Mage Yozanni
- Babnoxis the Spider Queen
- Blazzax the Omnifiend
- Criare Sunmane
- General Druav Flamesinger
- General Reparm
- Jaxoliz Dawneyes
- Magmaton
- Pyronis
- Quavonis Firetail

Again: **66 hours is the successful-kill schedule.** Scripted encounters listed later may have much shorter retries if the raid fails. ---

# Elemental Gods

The four elemental gods use the longer successful-kill schedule:

- Xegony
- Coirnav
- Fennin Ro
- Avatar of Earth

After a successful kill:

- Respawn / reuse: **5 days, 18 hours**
- Character loot lockout: **5 days, 18 hours**

Their failed-event retry times are handled separately and are listed in their individual sections below.

# Plane of Justice

Justice trials have been cleaned up considerably. **If you succeed:**

- Trial reopens after **10 minutes**

**If you fail:**

- Trial can be attempted again after **1 minute**

Other changes:

- Failed participants are returned after a short cleanup period.
- Successful participants receive a warning before the room is cleared.
- Boss corpses remain for **8 minutes** so there is time to loot.
- Pets and remaining NPC hate are cleaned up when players are removed.

The goal is to keep Justice moving instead of losing a flagging group to a broken or abandoned trial room. The Seventh Hammer follows the standard **66-hour successful-kill schedule**. ---

# Plane of Nightmare

## Hedge Maze

The Hedge Maze has been expanded for raid-sized flagging.

- Each room supports **24 players**.
- Unstarted rooms receive a warning and eventually clean themselves out.
- Success and failure properly remove players, pets, and remaining hate.
- Thelin receives **Spirit of Wolf** when the event begins.

Terris Thule follows the standard **66-hour successful-kill schedule**. ---
# Crypt of Decay

Bertoxxulous received several recovery improvements.

- Event trash uses a **3-minute, 50-second** instance respawn override.
- The opening sequence was shortened.

**If you defeat Bertoxxulous:**

- Event returns after **66 hours**
- Loot lockout is **66 hours**

**If you fail Bertoxxulous:**

- The event trigger returns after **5 minutes**
- You can then make another attempt



# Bastion of Thunder

BoT keying should be substantially less painful without removing the key process.

## Ring of Torden

These bosses now receive **3 Rings of Torden every time**:

- Laef Windfall
- Gaukr Sandstorm
- Oreen Wavecrasher
- Hreidar Lynhillig

## Unadorned Symbol of Torden

Each of the eight designated tower bosses receives **1 Unadorned Symbol of Torden every time**.

## Gems and Spheres

Selected elemental NPCs have a **25% chance** to carry their appropriate progression gem or sphere.

## Tower Access

Using a Symbol of Torden now authorizes the raid/group for **5 minutes** instead of only 60 seconds. Agnarr follows the standard **66-hour successful-kill schedule**. --- Bastion of Thunder BoT keying should be substantially less painful without removing the key process. Ring of Torden These bosses now receive 3 Rings of Torden every time: Laef Windfall Gaukr Sandstorm Oreen Wavecrasher Hreidar Lynhillig Unadorned Symbol of Torden Each of the eight designated tower bosses receives 1 Unadorned Symbol of Torden every time. Gems and Spheres Selected elemental NPCs have a 25% chance to carry their appropriate progression gem or sphere. Tower Access Using a Symbol of Torden now authorizes the raid/group for 5 minutes instead of only 60 seconds. Agnarr follows the standard 66-hour successful-kill schedule. Plane of Storms Medallion farming has been reworked around the actual encounters instead of unreliable kill counters. Standard Progression Instances Matching trash: 20% medallion chance Secondary medallion minibosses: 1–3 medallions Gurebk, Jeplak, and Neffiken: 5–8 medallions The three giant leaders now activate based on whether their actual required giants are dead, rather than relying on a fixed trash-kill counter that could become incorrect after respawns or resets. The three leaders use: 3-hour open-world respawns 6-hour guild-instance respawns The six secondary medallion minibosses use: 90-minute open-world respawns 18-hour guild-instance respawns


# Plane of Innovation

## Manaetic Behemoth

The Behemoth event has been heavily cleaned up.

- Manaetic Behemoth wakes **immediately after 10 qualifying device kills**.
- The old delayed wake-up has been removed.

Once Behemoth is active:

- The event has a **3-hour active window**
- That clock pauses while Behemoth is actively in combat

The 3 hours is **not a respawn timer**. It is how long the active attempt is allowed to remain open while the raid is not fighting him. If he leashes:

- He returns home
- Hate is cleared
- His health is restored

**If the event fails:**

- New clockwork spawning stops
- Existing devices are cleaned up
- Behemoth becomes available for another attempt after **10 minutes**
- Device waves then begin again

**If Behemoth is killed:**

- Remaining device waves are cleaned up
- The event proceeds normally

The Endurance room now checks the correct manaetic device NPC types when determining final completion, making the transition to Kelrig more reliable. Both Innovation versions of Giwin are protected from being killed or dragged into NPC combat.

## Nitram Anizok

Nitram now casts **Spirit of Wolf** on himself when his escort begins. Still a gnome walk. Just faster. ---

# Plane of Valor / Aerin'Dar

Several pieces of the Crystalline Globe path have been made less fragile.

- Quest progress no longer expires while working through the chain.
- Captain Ryglot properly recognizes the later quest states and accepts the globe pieces.
- Sergeant Terrick Burns now has a **guaranteed** crystalline globe piece.
- The Luminii Crawler's appearance chance was increased from **5% to 10%**.
- The Undead Vassal globe-piece drop is being increased from **5% to 10%**.

Aerin'Dar heart drops were not increased. After a successful Aerin'Dar kill:

- Respawn: **66 hours**
- Loot lockout: **66 hours**
# Plane of Tactics

Tallon, Vallon, and Rallos are aligned to the standard raid schedule. The old Rallos encounter restrictions have also been removed:

- You no longer need a 20-person raid just to engage Rallos.
- Players are no longer banished simply because they were not part of the raid that first engaged him.
- Tallon and Vallon receive protection while moving into position where needed.
- Door guards, required wraith corpses, and leftover adds recover correctly after a failed attempt.

**If Rallos is defeated:**

- Respawn / reuse: **66 hours**
- Loot lockout: **66 hours**

**If the Rallos event fails:**

- The encounter becomes available for another attempt after **10 minutes**

# Plane of Torment

Several encounter problems were cleaned up.

## Saryrn

- Her health-reset timer correctly stops when she is re-engaged.
- Leashing now clears hate properly instead of leaving her stuck in combat state.
- A successful kill follows the standard **66-hour** schedule.

## Tylis

- The teleport radius was increased from **100 to 250**.
- Both **“we are ready”** and **“I am ready”** work.
- Players receive better guidance when they have progression but are missing the Screaming Sphere.

## Visions of Argan

- The teleport radius was increased from **100 to 250**.
- Argan is protected from nearby NPC faction combat while the event is available.

# Halls of Honor

The three Halls trials now use consistent raid-event recovery. This applies to:

- Crazed Norrathians / Alekson Garn
- Rydda`Dar
- Villagers / Rhaliq Trell

**If you complete a trial successfully:**

- The trial returns after **18 hours**
- Loot lockout is **18 hours**

**If the trial fails:**

- It becomes available again after **10 minutes**

Lord Mithaniel Marr follows the standard **66-hour successful-kill schedule**. ---

# Plane of Fire

## Fennin Ro

Fennin uses the longer elemental-god schedule. **If Fennin is defeated:**

- Guardian of Doomfire returns after **5 days, 18 hours**
- Fennin's loot lockout is **5 days, 18 hours**

**If the Fennin event fails:**

- Guardian of Doomfire returns after **18 hours**
- You do not wait the full elemental-god timer for another attempt

The event also has its own active failure clock:

- That clock pauses while participating event NPCs are actively in combat
- When Fennin himself spawns, the event receives **2 additional hours**
- That extension happens only once per attempt

Blaring Horn of Fire loot opportunities were also improved without increasing unrelated rare drops. 
# Plane of Air

The six major named Air encounters use the standard **66-hour successful-kill schedule**. Xegony uses the elemental-god schedule: **After a successful Xegony kill:**

- Respawn: **5 days, 18 hours**
- Loot lockout: **5 days, 18 hours**

The scripted Air ring encounters and Chamberlain progression are restricted to the appropriate raid-enabled instances instead of being available as unintended open-world progression. ---

# Plane of Earth

The Rathe Council / Avatar of Earth cycle is being aligned with the elemental gods.

## Successful Completion

If Avatar of Earth is defeated:

- Rathe Council / Avatar cycle returns after **5 days, 18 hours**
- Avatar of Earth loot lockout is **5 days, 18 hours**

## Active Avatar Attempt

Once Avatar is spawned:

- The event has a **2.5-hour active window**
- The clock pauses while Avatar is actively in combat

This 2.5-hour clock is **not the respawn time**.

## Failed Avatar Attempt

If the active window expires before Avatar is defeated:

- Avatar despawns
- The event is considered failed
- The Rathe Council becomes available again after **7 minutes**

So a failed Avatar attempt does **not** cause a 5-day, 18-hour wait. The ordinary Earth A activity remains available, while the four scripted raid rings are restricted to the appropriate raid-instance environment. War Drums of the Rathe also received improved drop opportunities from Peregrin Rockskull.

# Plane of Water

## Coirnav

**If Coirnav is defeated:**

- Respawn / reuse: **5 days, 18 hours**
- Loot lockout: **5 days, 18 hours**

**If the event fails:**

- Guardian of Coirnav becomes available again after **10 minutes**
- This applies regardless of which phase of the event failed

Lute of the Flowing Waters received improved drop opportunities while preserving the rest of the loot table. ---

# Flagging Capacity

The standard target for raid progression is **72 players**. Two remaining bottlenecks are being brought into line with that:

- **Tarkil Adan:** 36 → **72** flag/key awards
- **Plane of Earth A Planar Projection:** 54 → **72** flags

The goal is to allow the main 72-person raid to progress together instead of arbitrarily cutting part of the raid out of a successful encounter. ---

# Plane of Time

Plane of Time is becoming a **guild-owned timeline** instead of being permanently tied to the raid ID that originally created it. That means:

- A guild can clear part of Time and stop for the night.
- The original raid can be disbanded.
- A new raid can be created later.
- The raid leader can change.
- The guild can still continue its existing Time run.
- Saved kills and timers survive Zone restarts and full server restarts.
- Separate guilds maintain separate Time timelines.
- A newly formed raid can reconnect to its guild's existing timeline.

Plane of Time A and B support **72 players**. The individual Phase One trial sections retain their existing **18-player limits**. Time boss lockouts are being standardized to **6 days, 18 hours**. The player command: `#timelockout` shows the guild timeline, current accessible phase, encounter availability, and remaining timers. ---

# Player Progression Commands

`#popflags` Shows your overall Plane of Power progression. `#popflags 1` through `#popflags 5` Shows one individual progression tier. `#timelockout` Shows your guild's Plane of Time timeline and encounter availability. ---

# Missing Launch-Era Loot

Several missing launch-era Plane of Power drops have been restored.

- **Ossein of Limitless Time** — shared Phase 3 Plane of Time loot pool
- **Bo Staff of Transcendence** — Cazic Thule, independent **10%**
- **Recurved Wormwood Bow** — Mujaki the Devourer, independent **10%**
- **Alabaster Hilted Wind Bow** — Avatar of Smoke, independent **10%**
- **Ornate Abalone Recurve Bow** — Krziik the Mighty, independent **10%**

# Luclin Changes — Pending Approval

These are **not final until approved**:

- Vex Thal warders would no longer spawn.
- Emperor Ssraeshza's guards would no longer respawn.

Neither change removes bane requirements. **Emperor Ssraeshza and Lord Seru will still require their intended bane weapons.** 
# Guild 1 / PvP Changes

Everything below applies specifically to **Guild 1 / PvP progression** and is separate from the normal progression rules above. Guild 1 raid targets follow the server's **earthquake / timed raid-window system** rather than simply mirroring normal guild-instance availability. This allows PvP raid availability to be controlled separately without turning Guild 1 into a faster keying or gearing path. Guild 1 remains **single loot by default**, with normal and raid double-loot settings controlled separately. Earthquake raid availability lasts **8 hours**.

## Plane of Nightmare

Hedge Maze itself remains open-world content. Mujaki is raid content and is only available in:

- Standard raid-enabled guild instances
- Guild 1 while the appropriate raid window is active

## Bastion of Thunder

The old Bastion-to-East-Commons PvP door has been removed. Pour one out for our first PvP event.

## Plane of Storms — Guild 1 Rewards

Guild 1 intentionally uses lower medallion quantities than normal progression instances.

- Matching trash: **2% medallion chance**
- Secondary medallion minibosses: **1–2 medallions**
- Gurebk, Jeplak, and Neffiken: **3 or 5 medallions**

This keeps PvP from becoming the faster route for Storms key progression.

## Rallosian Glory

Rallosian Glory is a temporary PvP progression system for Guild 1 battlefields.

### Experience Bonuses

Every Guild 1 battlefield provides a base:

- **+5% level XP**
- **+5% AA XP**

Each Glory rank adds:

- **+2.5% level XP**
- **+0.5% AA XP**

At Rank 10:

- **+30% total level XP**
- **+10% total AA XP**
### Earning Glory

Glory is awarded to the character credited with the qualifying killing blow.

- Player killing blows credit the player.
- Pet killing blows credit the pet owner.
- Assisting, healing, grouping, or being in the raid does not grant Glory by itself.
- Killing an unranked eligible opponent grants **1 Glory**.
- Defeating a ranked opponent awards **50% of their Glory, rounded up**.
- Glory is capped at Rank 10.

Both players must have been continuously present in the battlefield for at least **2 minutes** before a Glory award can occur. Anti-feeding cooldowns also apply:

- Killer/victim pair: **1 hour**
- Victim-wide grant cooldown: **1 hour**
- Killer-wide award cooldown: **10 minutes**

Any death in the Guild 1 battlefield removes the victim's accumulated Glory. Leaving the battlefield also forfeits the temporary rank. Glory is intended to reward staying in the fight, not to become permanent character power. The player command: `#glory` shows your current Rallosian Glory rank and XP bonuses.
spiders still spawn during the event and still go into the room
