---
title: 'Enchanter FAQ and Mechanics for Project Quarm'
description: 'Comprehensive guide covering Enchanter-specific questions, mechanics, and strategies for Project Quarm, including stats, races, charm mechanics, and more.'
keywords:
  - 'Project Quarm'
  - 'Quarm Guides'
  - 'Quarm Wiki'
  - 'Enchanter'
  - 'FAQ'
  - 'charm'
  - 'mez'
  - 'stats'
  - 'races'
  - 'mechanics'
date: 2024-06-21
author: Vargren
---
# Enchanter FAQ and Mechanics

This guide was written because people ask the same set of questions in the #enchanter Discord Channel, so I've decided to compile the answers for those questions here. This is not an end-all-be-all guide for the Enchanter class. Rather, it's meant to supplement [such existing guides](https://wiki.project1999.com/Xornns_Enchanter_Guide) with information specific to the Project Quarm server.

## Starting stats?

Short answer: it doesn't matter *that much*. Do what you want.

That said, here's a deep dive if you wanted to min-max.

### "Best" starting stats

You really only have these stats in which you can choose to dump points: STR, STA, AGI, INT, and CHA (you can safely ignore WIS and DEX).

#### STR
It's actually pretty nice for quality of life. Even with weight-reducing bags, you frequently become encumbered when looting in dungeons (until the higher levels anyway, when you'll usually have Rampage/Berserker Spirit up).

#### STA
It'll give you some extra hp, but the amount of HP you gain for the points you're putting in probably aren't worth it (STA -> HP conversion for casters is miniscule; prioritize +HP items instead).

#### INT
The bread n' butter caster stat. Affects your mana pool, how fast you learn caster (and other) skills, etc. It's important to have for casting spells. 'nuff said.

#### CHA
It's important, but not as important as it is on Project 1999. Reason: P99 uses CHA as part of charm resist check per tick. Project Quarm does not. What IS affected by CHA, are critical resists for lulls, mezzes, and the initial charm resist check.

According to some enchanters, 30 CHA is worth about 2% resist rates to the intial cast of charm or mez, or about 4% difference in critical resist rate for lulls. Which isn't **huge**, but it is noticeable, particularly when fighting higher level npcs or npcs with higher magic resists (like in raids, for example).

At level 50, it is recommended to try to reach for ~200 CHA to comfortably land mezzes. Some like having 220+ for certain raid npcs.

#### AGI
Often overlooked.

Pros:
* Converts into AC, which will help you tank charm breaks or aggro from debuffs. Conversion is ~3 AGI = 1 AC at level 50 (possibly every level?). So putting 18 points into AGI is like getting another piece of gear's worth of AC. Some benefits of AC: increases your effective hp, and helps your runes last longer. Not bad.
* You'll probably max out INT and CHA, but you probably won't ever max out AGI, so the points dumped here are never truly wasted.

Cons:
* You might discount the value of AC.
* "AC isn't a caster stat" (until your charm or AOE mez breaks).

## "Best" race

Depends on how often you plan to charm solo. If often, Dark Elf's Hide ability is really nice to use while leveling. In the teens up until 29 (when you get clarity), mana ticks at about 6-8 per tick. Invis costs 30 mana. That's a lot of time saved regening mana if Hide succeeds when breaking charm. Though, with Kunark out + the Goblin Gazhugi Earring dropping, this argument isn't as strong. Plus your starting CHA isn't as high.

Otherwise, it depends on preference. Want fashion + good caster stats at the cost of night-blindness? Pick Erudite. Want higher AC and still good enchanter stats? Pick High Elf. Want to have an easier time navigating through cramped dungeons? Gnome. Do you like Vanilla? Human.

## How does Charm Pet exp-stealing work? (+ tips and tricks for negating this)

The way it works on Project Quarm is that any pet (whether charmed or otherwise) that does more than 50% of the damage done to a mob to get it from its out-of-combat state to DEAD. will take experience as if it was a member of your group. The reason I've worded it this way is that you can use level 4 Mezmerize to memblur/reset the npc's hate list so that it's no longer in combat.

So for example, you're soloing and the target npc starts at 100% health. If your pet does 49% of the damage before it dies, you get full exp. However, if it did 51% of the damage, you get 50% exp (the pet acts as another gruop member).

Now, let's say that in a fight, your pet solos the npc to 4% health and you mez it, such that it is memblurred. In this case, if you finish it off (or near-finish it off) with a nuke and your pet kills it, you'll likely still get full exp, because it started with 4% (or 7%) health, and your nuke took it close to 0, meaning you did more than 50% of the health it started with when out-of-combat.

## How do you tell if an npc has been memblurred successfully?

1. If you /assist the npc and it doesn't target you or your pet.
2. You notice it regening 3% of its health per tick.

## What to do when charm breaks

1. DO NOT BE SITTING. If your pet hits you when you are sitting, it will auto-quad for maximum hit damage. Park your pet either:
    1. Reasonably farther away so that when charm breaks you can react fast enough by standing up. OR
    2. If this isn't possible (like in a cramped dungeon hallway, for example), don't sit down when your pet isn't in combat. Only sit down when it's already beating on something, so that you have a chance to react by standing up when charm breaks and its auto-attack is already on delay.
2. Have Color Flux and Color Shift memmed.
3. Cast Color Flux.
4. Immediately use a clicky item when color flux finishes casting successfully, so that your cast bars are reset.
5. Cast lv 4 mez on your charm pet.
6. If that fails (the npc resisted either flux or mez or you were too slow), follow the above steps (starting from #3) but with Color Shift instead. If this is happening consistently, you can opt for a flux > clicky > shift > clicky > mez combo instead.

Other tips for charming successfully:
1. Update keyboard shortcuts for both hotbar actions and spell gems. I use 1 2 3 4 5 Q E R F C for my hotbar actions, and SHIFT + 1 2 3 4 Q E R F for my spell gems. Doing this makes it easy for me to fire off spell/clicky combos in succession. (ALT + same keybinds for switching hotbar pages)
2. Put JBoots in a non-bag inventory slot and make it a hotbar action.
3. Download QuarmTool and set up an audio cue for charm breaks. Though, I would add that there is a slight half-second delay between when the charm break message appears in your combat log and the audio message.
4. Keep Rampage or Berserker Spirit up, followed by a Rune spell at all times when charm-soloing. Why Rune after Berserker spirit? Because it costs more mana + reagents. Whichever spell is occupying the top spell slot # will wear off first, so you want that spell to be the less costly spell, and not Rune.
5. Charm lower level blue or light-blue npcs so that charm breaks less often.

Once you get comfortable doing this, you can start playing around with hasting your pet + giving it weapons for more efficient kills.

## What's the fastest way to get such a clicky item?
Get JBoots off of Drelzna in Najena. Put it in your inventory + Hotbar that inventory slot so that you can use a keyboard shortcut to fire it off. The Spellgems still reset even if you don't get the SoW effect from the boots when indoors.

## Does the torch trick work here? (Or how to increase your pet's DPS by enabling it to quad-hit)

On P99, giving a torch to your charmed pet will cause it to quad-hit. That trick does not work on Project Quarm. To achieve a similar effect, you must give your pet 2 different NOT-no-drop weapons to cause it to dual wield.

## Mezmerize can memblur?

Yes, all of our mezzes have a 100% chance of memblurring on npcs level 30 and under, with diminishing %-chance as levels increase. Many players opt for just chain-casting mez until the npc is memblurred (check with /assist macro), rather than use another spell slot for memblur.

## What's the difference between Lull, Soothe, Calm, and Pacify?

A few things:
1. Agro radius will decrease as you use more higher-level lulls. Social, lulled NPCs still need to stand a reasonable distance from each other (think orc camps) for them to not social agro. Soothed npcs can stand closer without social-pulling. Calmed npcs can stand next to each other, and Pacified npcs won't agro even when standing on top of each other.
2. The spells have a level limit; IE they will stop working on npcs past a certain level. Higher level lull spells have a higher limit.
3. Calm has a short duration.
4. Mana cost.

Generally I found lull useful until the 20s, and Soothe was my go-to all the way until the higher leveled camps in Lower Guk, where Pacify overtook it. I didn't find Calm all that useful.

