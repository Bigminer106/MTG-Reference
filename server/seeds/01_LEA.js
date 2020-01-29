exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Card_List').del()
  .then(function () {
    // Inserts seed entries
    return knex('Card_List').insert([
      {
        name: 'Animate Wall',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Wall',
        effects: 'Enchanted Wall can now attack.  Enchanted Wall\'s power and toughness are unchanged, even if its power is 0.',
        art: 'http://mythicspoiler.com/lea/cards/animatewall.jpg'
      },
      {
        name: 'Armageddon',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'White',
        supertype: 'Sorcery',
        effects: 'All lands in play are destroyed.',
        art: 'http://mythicspoiler.com/lea/cards/armageddon.jpg'
      },
      {
        name: 'Balance',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Sorcery',
        effects: 'Whichever player has more lands in play must sacrifice enough lands of that player\'s choice to equalize the number of lands both players have in play.  Cards in hand and creatures on the battlefield must be equalized this way.  Creatures destroyed this way can\'t be regenerated.',
        art: 'http://mythicspoiler.com/lea/cards/balance.jpg'
      },
      {
        name: 'Benalish Hero',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Summon Hero',
        effects: 'Bands',
        flavor: 'Benalia has a complex caste system that changes with the lunar year.  No matter what the seasons, the only caste that cannot be attained by heredity or money is that of the hero.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/benalishhero.jpg'
      },
      {
        name: 'Black Ward',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gains protection from black.',
        art: 'http://mythicspoiler.com/lea/cards/blackward.jpg'
      },
      {
        name: 'Blaze of Glory',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Instant',
        effects: 'Target defending creature can and must block all attacking creatures it can legally block.  For example, a normal non-flying defender can and must block all normal non-flying attackers at once, but it cannot block any flying attackers.  Target defender\'s controller may distribute damage among attackers as desired.  Play before defense is chosen.',
        art: 'http://mythicspoiler.com/lea/cards/blazeofglory.jpg'
      },
      {
        name: 'Blessing',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: '{W}: Enchanted creature gets +1/+1 until end of turn.',
        art: 'http://mythicspoiler.com/lea/cards/blessing.jpg'
      },
      {
        name: 'Blue Ward',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gains protection from blue.',
        art: 'http://mythicspoiler.com/lea/cards/blueward.jpg'
      },
      {
        name: 'Castle',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'White',
        supertype: 'Enchantment',
        effects: 'Untapped creatures you control get +0/+2.  Attacking creatures you control lose this bonus.',
        art: 'http://mythicspoiler.com/lea/cards/castle.jpg'
      },
      {
        name: 'Circle of Protection: Black',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        effects: '{1}: Prevent all damage against you from one black source.  If a source deals damage to you more than once in a turn, you must pay {1} each time to prevent the damage.',
        art: 'http://mythicspoiler.com/lea/cards/circleofprotectionblack.jpg'
      },
      {
        name: 'Circle of Protection: Blue',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        effects: '{1}: Prevent all damage against you from one blue source.  If a source deals damage to you more than once in a turn, you must pay {1} each time to prevent the damage.',
        art: 'http://mythicspoiler.com/lea/cards/circleofprotectionblue.jpg'
      },
      {
        name: 'Circle of Protection: Green',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        effects: '{1}: Prevent all damage against you from one green source.  If a source deals damage to you more than once in a turn, you must pay {1} each time to prevent the damage.',
        art: 'http://mythicspoiler.com/lea/cards/circleofprotectiongreen.jpg'
      },
      {
        name: 'Circle of Protection: Red',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        effects: '{1}: Prevent all damage against you from one red source.  If a source deals damage to you more than once in a turn, you must pay {1} each time to prevent the damage.',
        art: 'http://mythicspoiler.com/lea/cards/circleofprotectionred.jpg'
      },
      {
        name: 'Circle of Protection: White',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        effects: '{1}: Prevent all damage against you from one white source.  If a source deals damage to you more than once in a turn, you must pay {1} each time to prevent the damage.',
        art: 'http://mythicspoiler.com/lea/cards/circleofprotectionwhite.jpg'
      },
      {
        name: 'Consecrate Land',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Land',
        effects: 'All enchantments on enchanted land are destroyed.  Enchanted land cannot be destroyed or further enchanted until this enchantment is destroyed.',
        art: 'http://mythicspoiler.com/lea/cards/consecrateland.jpg'
      },
      {
        name: 'Conversion',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'White',
        supertype: 'Enchantment',
        effects: 'All Mountains are considered Plains.  At the beginning of each of your upkeeps, sacrifice Conversion unless you pay {WW}.',
        art: 'http://mythicspoiler.com/lea/cards/conversion.jpg'
      },
      {
        name: 'Crusade',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        effects: 'All white creatures get +1/+1.',
        art: 'http://mythicspoiler.com/lea/cards/crusade.jpg'
      },
      {
        name: 'Death Ward',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Instant',
        effects: 'Regenerate target creature.',
        art: 'http://mythicspoiler.com/lea/cards/deathward.jpg'
      },
      {
        name: 'Disenchant',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Instant',
        effects: 'Destroy target artifact or enchantment.',
        art: 'http://mythicspoiler.com/lea/cards/disenchant.jpg'
      },
      {
        name: 'Farmstead',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'White',
        supertype: 'Enchant Land',
        effects: 'Enchanted land\'s controller gains 1 life each upkeep if {WW} is spent.  Enchanted land can still generate mana as usual.',
        art: 'http://mythicspoiler.com/lea/cards/farmstead.jpg'
      },
      {
        name: 'Green Ward',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gains protection from green.',
        art: 'http://mythicspoiler.com/lea/cards/greenward.jpg'
      },
      {
        name: 'Guardian Angel',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'White',
        supertype: 'Instant',
        effects: 'Prevent the next X damage dealt to any target.  Any further damage dealt to that target this turn can be cancelled by paying {1} for each 1 damage dealt.',
        art: 'http://mythicspoiler.com/lea/cards/guardianangel.jpg'
      },
      {
        name: 'Healing Salve',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Instant',
        effects: 'Choose one --\n\tYou gain 3 life.\n\tPrevent the next 3 damage dealt to any target.',
        art: 'http://mythicspoiler.com/lea/cards/healingsalve.jpg'
      },
      {
        name: 'Holy Armor',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gets +0/+2.\n{W}: Enchanted creature gets +0/+1 until end of turn.',
        art: 'http://mythicspoiler.com/lea/cards/holyarmor.jpg'
      },
      {
        name: 'Holy Strength',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gets +1/+2.',
        art: 'http://mythicspoiler.com/lea/cards/holystrength.jpg'
      },
      {
        name: 'Island Sanctuary',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        effects: 'You may decline your draw step each turn.  If you do, until your next turn, creatures without flying or islandwalk cannot attack you.',
        art: 'http://mythicspoiler.com/lea/cards/islandsanctuary.jpg'
      },
      {
        name: 'Karma',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'White',
        supertype: 'Enchantment',
        effects: 'For each Swamp on the battlefield, it deals 1 damage to its controller at the beginning of that player\'s upkeep.',
        art: 'http://mythicspoiler.com/lea/cards/karma.jpg'
      },
      {
        name: 'Lance',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gains first strike.',
        art: 'http://mythicspoiler.com/lea/cards/lance.jpg'
      },
      {
        name: 'Mesa Pegasus',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Summon Pegasus',
        effects: 'Flying, bands',
        flavor: 'Before a woman marries in the village of Sursi, she must visit the land of the Mesa Pegasus.  Legend has it that if the woman is pure of heart and her love is true, a Mesa Pegasus will appear, blessing her family with long life and good fortune.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/mesapegasus.jpg'
      },
      {
        name: 'Northern Paladin',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'White',
        supertype: 'Summon Paladin',
        effects: '{WW}, {T}: Destroy target black permanent.',
        flavor: '"Look to the north; there you will find aid and comfort."\n--The Book of Tal',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/northernpaladin.jpg'
      },
      {
        name: 'Pearled Unicorn',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'White',
        supertype: 'Summmon Unicorn',
        flavor: '"\'Do you know, I always thought Unicorns were fabulous monsters too?  I never saw one alive before!\'  \'Well, now that we have seen each other,\' said the Unicorn, \'if you\'ll believe in me, I\'ll believe in you.\'"\n--Lewis Carroll',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/pearledunicorn.jpg'
      },
      {
        name: 'Personal Incarnation',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'White',
        supertype: 'Summon Avatar',
        effects: 'Caster can redirect any or all damage dealt to Personal Incarnation to themself instead.  The source of the damage is unchanged.  If Personal Incarnation is destroyed, its controller loses half their life, rounded up.',
        power: '6',
        toughness: '6',
        art: 'http://mythicspoiler.com/lea/cards/personalincarnation.jpg'
      },
      {
        name: 'Purelace',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Interrupt',
        effects: 'Change the color of one card being played or on the battlefield to white.  Cost to cast, tap, maintain, or activate an ability remain unchanged.',
        art: 'http://mythicspoiler.com/lea/cards/purelace.jpg'
      },
      {
        name: 'Red Ward',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gains protection from red.',
        art: 'http://mythicspoiler.com/lea/cards/redward.jpg'
      },
      {
        name: 'Resurrection',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'White',
        supertype: 'Sorcery',
        effects: 'Return target creature card from your graveyard to the battlefield.',
        art: 'http://mythicspoiler.com/lea/cards/resurrection.jpg'
      },
      {
        name: 'Reverse Damage',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'White',
        supertype: 'Instant',
        effects: 'All damage dealt to you this turn from a source of your choice is added to your life total instead of subtracted from it.',
        art: 'http://mythicspoiler.com/lea/cards/reversedamage.jpg'
      },
      {
        name: 'Righteousness',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Instant',
        effects: 'Target blocking creature gets +7/+7 until end of turn.',
        art: 'http://mythicspoiler.com/lea/cards/righteousness.jpg'
      },
      {
        name: 'Samite Healer',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Summon Cleric',
        effects: '{T}: Prevent 1 damage to target creature or player.',
        flavor: 'Healers ultimately acquire the divine gifts of spiritual and physical wholeness.  The most devout are also granted the ability to pass physical wholeness on to others.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/samitehealer.jpg'
      },
      {
        name: 'Savannah Lions',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Summon Lions',
        flavor: 'The traditional kings of the jungle command a healthy respect in other climates as well.  Relying mainly on their stealth and speed, Savannah Lions can take a victim by surprise, even in the endless flat plains of their homeland.',
        power: '2',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/savannahlions.jpg'
      },
      {
        name: 'Serra Angel',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'White',
        supertype: 'Summon Angel',
        effects: 'Flying, vigilance',
        flavor: 'Born with wings of light and a sword of faith, this heavenly incarnation embodies both fury and purity.',
        power: '4',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/serraangel.jpg'
      },
      {
        name: 'Swords to Plowshares',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Instant',
        effects: 'Exile target creature.  Its controller gains life equal to its power.',
        art: 'http://mythicspoiler.com/lea/cards/swordstoplowshares.jpg'
      },
      {
        name: 'Veteran Bodyguard',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'White',
        supertype: 'Summon Bodyguard',
        effects: 'As long as Veteran Bodyguard is untapped, all damage dealt to you by unblocked creatures is dealt to Veteran Bodyguard instead.  This damage may be prevented normally.',
        power: '2',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/veteranbodyguard.jpg'
      },
      {
        name: 'Wall of Swords',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'White',
        supertype: 'Summon Wall',
        effects: 'Flying',
        flavor: 'Just as the evil ones approached to slay Justina, she cast a great spell, imbuing her weapons with her own life force.  Thus she fulfilled the prophecy: "In the death of your savior will you find salvation."',
        power: '3',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/wallofswords.jpg'
      },
      {
        name: 'White Knight',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'White',
        supertype: 'Summon Knight',
        effects: 'Protection from black, first strike',
        flavor: 'Out of the blackness and stench of the engulfing swamp emerged a shimmering figure.  Only the splattered armor and ichor-stained sword hinted at the unfathomable evil the knight had just laid waste.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/whiteknight.jpg'
      },
      {
        name: 'White Ward',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gains protection from white.',
        art: 'http://mythicspoiler.com/lea/cards/whiteward.jpg'
      },
      {
        name: 'Wrath of God',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'White',
        supertype: 'Sorcery',
        effects: 'Destroy all creatures.',
        art: 'http://mythicspoiler.com/lea/cards/wrathofgod.jpg'
      },
      {
        name: 'Air Elemental',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Blue',
        supertype: 'Summon Elemental',
        effects: 'Flying',
        flavor: 'These spirits of the air are winsome and wild, and cannot be truly contained.  Only marginally intelligent, they often substitude whimsy for strategy, delighting in mischief and mayhem.',
        power: '4',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/airelemental.jpg'
      },
      {
        name: 'Ancestral Recall',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Instant',
        effects: 'Target player draws three cards.',
        art: 'http://mythicspoiler.com/lea/cards/ancestralrecall.jpg'
      },
      {
        name: 'Animate Artifact',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Blue',
        supertype: 'Enchant Non-Creature Artifact',
        effects: 'Enchanted artifact is a creature in addition to its other types with power and toughness each equal to its converted mana cost.',
        art: 'http://mythicspoiler.com/lea/cards/animateartifact.jpg'
      },
      {
        name: 'Blue Elemental Blast',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Interrupt',
        effects: 'Choose one --\n\tCounter target red spell.\n\tDestroy target red permanent.',
        art: 'http://mythicspoiler.com/lea/cards/blueelementalblast.jpg'
      },
      {
        name: 'Braingeyser',
        set: 'Limited Edition Alpha',
        cost: '3+',
        color: 'Blue',
        supertype: 'Sorcery',
        effects: 'Target player draws X cards.',
        art: 'http://mythicspoiler.com/lea/cards/braingeyser.jpg'
      },
      {
        name: 'Clone',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Blue',
        supertype: 'Summon Clone',
        effects: 'Clone enters the battlefield as a copy of any creature on the battlefield.',
        power: '*',
        toughness: '*',
        art: 'http://mythicspoiler.com/lea/cards/clone.jpg'
      },
      {
        name: 'Control Magic',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Blue',
        supertype: 'Enchant Creature',
        effects: 'You control enchanted creature.',
        art: 'http://mythicspoiler.com/lea/cards/controlmagic.jpg'
      },
      {
        name: 'Copy Artifact',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchantment',
        effects: 'Copy Artifact enters the battlefield as a copy of any artifact on the battlefield.',
        art: 'http://mythicspoiler.com/lea/cards/copyartifact.jpg'
      },
      {
        name: 'Counterspell',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Interrupt',
        effects: 'Counter target spell.',
        art: 'http://mythicspoiler.com/lea/cards/counterspell.jpg'
      },
      {
        name: 'Creature Bond',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchant Creature',
        effects: 'When enchanted creature dies, Creature Bond deals damage equal to enchanted creature\'s toughness to that creature\'s controller.',
        art: 'http://mythicspoiler.com/lea/cards/creaturebond.jpg'
      },
      {
        name: 'Drain Power',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Sorcery',
        effects: 'Tap all opponent\'s lands.  You add that mana to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/drainpower.jpg'
      },
      {
        name: 'Feedback',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Blue',
        supertype: 'Enchant Enchantment',
        effects: 'At the beginning of each upkeep, Feedback deals 1 damage to enchanted permanent\'s controller.',
        art: 'http://mythicspoiler.com/lea/cards/feedback.jpg'
      },
      {
        name: 'Flight',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature has flying.',
        art: 'http://mythicspoiler.com/lea/cards/flight.jpg'
      },
      {
        name: 'Invisibility',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature can\'t be blocked except by Walls.',
        art: 'http://mythicspoiler.com/lea/cards/invisibility.jpg'
      },
      {
        name: 'Jump',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Instant',
        effects: 'Target creature gains flying until end of turn.',
        art: 'http://mythicspoiler.com/lea/cards/jump.jpg'
      },
      {
        name: 'Lifetap',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchantment',
        effects: 'Whenever an opponent taps a Forest, you gain 1 life.',
        art: 'http://mythicspoiler.com/lea/cards/lifetap.jpg'
      },
      {
        name: 'Lord of Atlantis',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Summon Lord of Atlantis',
        effects: 'All Merfolk get +1/+1 and have islandwalk.',
        flavor: 'A master of tactics, the Lord of Atlantis makes his people bold in battle merely by arriving to lead them.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/lordofatlantis.jpg'
      },
      {
        name: 'Magical Hack',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Interrupt',
        effects: 'Change the text of any one card by replacing one basic land type with another.  For example, you can change "swampwalk" to "plainswalk."',
        art: 'http://mythicspoiler.com/lea/cards/magicalhack.jpg'
      },
      {
        name: 'Mahamoti Djinn',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'Blue',
        supertype: 'Summon Djinn',
        effects: 'Flying',
        flavor: 'Of royal blood among the spirits of the air, the Mahamoti Djinn rides on the wings of the winds.  As dangerous in a gambling hall as he is in battle, he is a master of trickery and misdirection.',
        power: '5',
        toughness: '6',
        art: 'http://mythicspoiler.com/lea/cards/mahamotidjinn.jpg'
      },
      {
        name: 'Mana Short',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Blue',
        supertype: 'Instant',
        effects: 'Tap all lands target opponent controls, and empty that player\'s mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/manashort.jpg'
      },
      {
        name: 'Merfolk of the Pearl Trident',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Summon Merfolk',
        flavor: 'Most human scholars believe that Merfolk are the survivors of sunken Atlantis, humans adapted to the water.  Merfolk, however, believe that humans sprang forth from Merfolk who adapted themselves in order to explore their last frontier.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/merfolkofthepearltrident.jpg'
      },
      {
        name: 'Phantasmal Forces',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Blue',
        supertype: 'Summon Phantasm',
        effects: 'Flying\nPhantasmal Forces\'s controller must pay {U} at the beginning of each upkeep or sacrifice Phantasmal Forces.',
        flavor: 'These beings embody the essence of true heroes long dead.  Summoned from the dreamrealms, they rise to meet their enemies.',
        power: '4',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/phantasmalforces.jpg'
      },
      {
        name: 'Phantasmal Terrain',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchant Land',
        effects: 'Enchanted land becomes a basic land type of the caster\'s choice.',
        art: 'http://mythicspoiler.com/lea/cards/phantasmalterrain.jpg'
      },
      {
        name: 'Phantom Monster',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Blue',
        supertype: 'Summon Phantasm',
        effects: 'Flying',
        flavor: '"While, like a ghastly rapid river,\nThrough the pale door,\nA hideous throng rush out forever,\nAnd laugh--but smile no more."\n--Edgar Allan Poe, "The Haunted House"',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/phantommonster.jpg'
      },
      {
        name: 'Pirate Ship',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Blue',
        supertype: 'Summon Ship',
        effects: '{T}: Pirate Ship deals 1 damage to target creature or player.\nPirate Ship can\'t attack unless defending player controls an Island.\nIf there are no Islands in play, sacrifice Pirate Ship.',
        power: '4',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/pirateship.jpg'
      },
      {
        name: 'Power Leak',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchant Enchantment',
        effects: 'Enchanted permanent has an upkeep cost of {2}.  If enchanted permanent\'s controller cannot pay this upkeep cost, Power Leak deals 1 damage to them for each {1} unpaid.',
        art: 'http://mythicspoiler.com/lea/cards/powerleak.jpg'
      },
      {
        name: 'Power Sink',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'Blue',
        supertype: 'Interrupt',
        effects: 'Counter target spell unless its controller pays {X}.  If that spell\'s controller can\'t, they must pay with whatever land they have, and the spell is still countered.',
        art: 'http://mythicspoiler.com/lea/cards/powersink.jpg'
      },
      {
        name: 'Prodigal Sorcerer',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Blue',
        supertype: 'Summon Wizard',
        effects: '{T}: Prodigal Sorcerer deals 1 damage to target creature or player.',
        flavor: 'Occasionally a member of the Institute of Arcane Study acquires a taste for worldly pleasures.  Seldom do they have trouble finding employment.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/prodigalsorcerer.jpg'
      },
      {
        name: 'Psionic Blast',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Blue',
        supertype: 'Instant',
        effects: 'Psionic Blast deals 4 damage to target creature or player and 2 damage to you.',
        art: 'http://mythicspoiler.com/lea/cards/psionicblast.jpg'
      },
      {
        name: 'Psychic Venom',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchant Land',
        effects: 'Whenever enchanted land becomes tapped, Psychic Venom deals 2 damage to that land\'s controller.',
        art: 'http://mythicspoiler.com/lea/cards/psychicvenom.jpg'
      },
      {
        name: 'Sea Serpent',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'Blue',
        supertype: 'Summon Serpent',
        effects: 'Sea Serpent can\'t attack unless defending player controls an Island.\nAt the beginning of your upkeep, if there are no Islands in play, sacrifice Sea Serpent.',
        flavor: 'Legend has it that serpents used to be bigger, but how could that be?',
        power: '5',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/seaserpent.jpg'
      },
      {
        name: 'Siren\'s Call',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Instant',
        effects: 'All creatures target opponent controls attack this turn if able.  At end of combat, destroy all non-Wall creatures that didn\'t attack.  Creatures with summoning sickness are not affected.',
        art: 'http://mythicspoiler.com/lea/cards/sirenscall.jpg'
      },
      {
        name: 'Sleight of Mind',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Interrupt',
        effects: 'Change the text of one card by replacing a color word with another.  For example, change "Counter target red spell" to "Counter target black spell."  This does not change the target spell\'s color.',
        art: 'http://mythicspoiler.com/lea/cards/sleightofmind.jpg'
      },
      {
        name: 'Spell Blast',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'Blue',
        supertype: 'Interrupt',
        effects: 'Counter target spell with converted mana cost X.',
        art: 'http://mythicspoiler.com/lea/cards/spellblast.jpg'
      },
      {
        name: 'Stasis',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchantment',
        effects: 'Players do not untap during their untap steps.  At the beginning of your upkeep, pay {U} or sacrifice Stasis.',
        art: 'http://mythicspoiler.com/lea/cards/stasis.jpg'
      },
      {
        name: 'Steal Artifact',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Blue',
        supertype: 'Enchant Artifact',
        effects: 'You control enchanted artifact.',
        art: 'http://mythicspoiler.com/lea/cards/stealartifact.jpg'
      },
      {
        name: 'Thoughtlace',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Interrupt',
        effects: 'Change the color of any card to blue.',
        art: 'http://mythicspoiler.com/lea/cards/thoughtlace.jpg'
      },
      {
        name: 'Time Walk',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Blue',
        supertype: 'Sorcery',
        effects: 'Take an extra turn after this one.',
        art: 'http://mythicspoiler.com/lea/cards/timewalk.jpg'
      },
      {
        name: 'Timetwister',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Blue',
        supertype: 'Sorcery',
        effects: 'Each player shuffles their hand and graveyard into their library, then draws seven cards.  Exile Timetwister.',
        art: 'http://mythicspoiler.com/lea/cards/timetwister.jpg'
      },
      {
        name: 'Twiddle',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Instant',
        effects: 'Tap or untap target artifact, creature, or land.',
        art: 'http://mythicspoiler.com/lea/cards/twiddle.jpg'
      },
      {
        name: 'Unsummon',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Blue',
        supertype: 'Instant',
        effects: 'Return target creature to its owner\'s hand.',
        art: 'http://mythicspoiler.com/lea/cards/unsummon.jpg'
      },
      {
        name: 'Vesuvian Doppelganger',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Blue',
        supertype: 'Summon Doppelganger',
        effects: 'Vesuvian Doppelganger enters the battlefield as a copy of any creature on the battlefield.\nAt the beginning of your upkeep, you may have Vesuvian Doppelganger become a copy of target creature.',
        power: '*',
        toughness: '*',
        art: 'http://mythicspoiler.com/lea/cards/vesuviandoppelganger.jpg'
      },
      {
        name: 'Volcanic Eruption',
        set: 'Limited Edition Alpha',
        cost: '4+',
        color: 'Blue',
        supertype: 'Sorcery',
        effects: 'Destroy X target Mountains.  Volcanic Eruption deals X damage to each creature and each player.',
        art: 'http://mythicspoiler.com/lea/cards/volcaniceruption.jpg'
      },
      {
        name: 'Wall of Air',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Blue',
        supertype: 'Summon Wall',
        effects: 'Flying',
        flavor: '"This \'standing windstorm\' can hold us off indefinitely?  Ridiculous!"  Saying nothing, she put a pinch of salt on the table.  With a bang, she clapped her hands, and the salt disappeared, blown away.',
        power: '1',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/wallofair.jpg'
      },
      {
        name: 'Wall of Water',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Blue',
        supertype: 'Summon Wall',
        effects: '{U}: Wall of Water gets +1/+0 until end of turn.',
        flavor: 'A deafening roar arose as the fury of an enormous vertical river supplanted our serenity.  Eddies turned into whirling geysers, leveling everything in their path.',
        power: '0',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/wallofwater.jpg'
      },
      {
        name: 'Water Elemental',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Blue',
        supertype: 'Summon Elemental',
        flavor: 'Unpredictable as the sea itself, Water Elementals shift without warning from tranquility to tempest.  Capricious and fickle, they flow restlessly from one shape to another, expressing their moods with their physical forms.',
        power: '5',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/waterelemental.jpg'
      },
      {
        name: 'Animate Dead',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Enchant Dead Creature',
        effects: 'Return target creature card from any graveyard to the battlefield under your control with this spell attached to it.  That creature gets -1/-0.',
        art: 'http://mythicspoiler.com/lea/cards/animatedead.jpg'
      },
      {
        name: 'Bad Moon',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Enchantment',
        effects: 'All black creatures get +1/+1.',
        art: 'http://mythicspoiler.com/lea/cards/badmoon.jpg'
      },
      {
        name: 'Black Knight',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Summon Knight',
        effects: 'Protection from white, first strike',
        flavor: 'Battle doesn\'t need a purpose; the battle is its own purpose.  You don\'t ask why a plague spreads or a field burns.  Don\'t ask why I fight.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/blackknight.jpg'
      },
      {
        name: 'Bog Wraith',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Black',
        supertype: 'Summon Wraith',
        effects: 'Swampwalk',
        flavor: '\'Twas in the bogs of Cannelbrae\nMy mate did meet an early grave\n\'Twas nothing left for us to save\nIn the peat-filled bogs of Cannelbrae.',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/bogwraith.jpg'
      },
      {
        name: 'Contract from Below',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Sorcery',
        effects: 'Discard your hand and draw eight cards, adding the first card drawn to your ante.  Remove this card from your deck before playing if you are not playing for ante.',
        art: 'http://mythicspoiler.com/lea/cards/contractfrombelow.jpg'
      },
      {
        name: 'Cursed Land',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Black',
        supertype: 'Enchant Land',
        effects: 'Cursed Land deals 1 damage to enchanted land\'s controller during that player\'s upkeep.',
        art: 'http://mythicspoiler.com/lea/cards/cursedland.jpg'
      },
      {
        name: 'Dark Ritual',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Interrupt',
        effects: 'Add {BBB} to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/darkritual.jpg'
      },
      {
        name: 'Darkpact',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Sorcery',
        effects: 'Swap the top card of your library with either card of the ante.  Remove this card from your deck before playing if you are not playing for ante.',
        art: 'http://mythicspoiler.com/lea/cards/darkpact.jpg'
      },
      {
        name: 'Deathgrip',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Enchantment',
        effects: '{BB}: Counter target green spell.  This action may be played as an interrupt.',
        art: 'http://mythicspoiler.com/lea/cards/deathgrip.jpg'
      },
      {
        name: 'Deathlace',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Interrupt',
        effects: 'Change the color of any card to black.',
        art: 'http://mythicspoiler.com/lea/cards/deathlace.jpg'
      },
      {
        name: 'Demonic Attorney',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Sorcery',
        effects: 'If target opponent does not concede the game immediately, each player must ante an additional card from the top of their library.  Remove this card before playing if you are not playing for ante.',
        art: 'http://mythicspoiler.com/lea/cards/demonicattorney.jpg'
      },
      {
        name: 'Demonic Hordes',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Black',
        supertype: 'Summon Demons',
        effects: '{T}: Destroy target land.  Pay {BBB} during your upkeep or Demonic Hordes becomes tapped, and you sacrifice a land of target opponent\'s choice.',
        flavor: 'Created to destroy Dominaria, Demons can sometimes be bent to a more focused purpose.',
        power: '5',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/demonichordes.jpg'
      },
      {
        name: 'Demonic Tutor',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Sorcery',
        effects: 'Search your library for a card and put it into your hand, then shuffle your library.',
        art: 'http://mythicspoiler.com/lea/cards/demonictutor.jpg'
      },
      {
        name: 'Drain Life',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Sorcery',
        effects: 'Drain Life deals 1 damage to target creature or player for each {B} paid in addition to the base casting cost.  You gain life equal to the damage dealt this way.  You cannot gain more life than target creature\'s toughness.',
        art: 'http://mythicspoiler.com/lea/cards/drainlife.jpg'
      },
      {
        name: 'Drudge Skeletons',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Summon Skeletons',
        effects: '{B}: Regenerate Drudge Skeletons. (Tap it and remove it from combat.  Prevent all damage dealt to it.)',
        flavor: 'Bones scattered around us joined to form misshapen bodies.  We struck at them repeatedly--they fell, but soon formed again, with the same mocking look on their faceless skulls.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/drudgeskeletons.jpg'
      },
      {
        name: 'Evil Presence',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Enchant Land',
        effects: 'Enchanted land is a Swamp.',
        art: 'http://mythicspoiler.com/lea/cards/evilpresence.jpg'
      },
      {
        name: 'Fear',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature has fear. (It can only be blocked by artifact creatures and black creatures.)',
        art: 'http://mythicspoiler.com/lea/cards/fear.jpg'
      },
      {
        name: 'Frozen Shade',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Shade',
        effects: '{B}: Frozen Shade gets +1/+1 until end of turn.',
        flavor: '"There are some qualities--some incorporate things,\nThat have a double life, which thus is made\nA type of twin entity which springs\nFrom matter and light, evinced in solid and shade."\n--Edgar Allen Poe, "Silence"',
        power: '0',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/frozenshade.jpg'
      },
      {
        name: 'Gloom',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Enchantment',
        effects: 'White spells cost {3} more to cast.\nAbilities of Circles of Protection cost {3} more to activate.',
        art: 'http://mythicspoiler.com/lea/cards/gloom.jpg'
      },
      {
        name: 'Howl from Beyond',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'Black',
        supertype: 'Instant',
        effects: 'Target creature gets +X/+0 until end of turn.',
        art: 'http://mythicspoiler.com/lea/cards/howlfrombeyond.jpg'
      },
      {
        name: 'Hypnotic Specter',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Specter',
        effects: 'Flying\nWhenever this creature deals damage to a player, that player discards a card.',
        flavor: '"...There was no trace?  Of aught on that illumined face..."\n--Samuel Coleridge, "Phantom"',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/hypnoticspecter.jpg'
      },
      {
        name: 'Lich',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Black',
        supertype: 'Enchantment',
        effects: 'Your life total becomes 0.  Whenever you would gain life, instead you draw that many cards.  Whenever you take damage from any source, instead sacrifice that many permanents.  You lose the game when this enchantment is destroyed or when you have no permanents to sacrifice.',
        art: 'http://mythicspoiler.com/lea/cards/lich.jpg'
      },
      {
        name: 'Lord of the Pit',
        set: 'Limited Edition Alpha',
        cost: '7',
        color: 'Black',
        supertype: 'Summon Demon',
        effects: 'Flying, trample\nAt the beginning of your upkeep, you may sacrifice another creature.  If you don\'t, Lord of the Pit deals 7 damage to you.',
        power: '7',
        toughness: '7',
        art: 'http://mythicspoiler.com/lea/cards/lordofthepit.jpg'
      },
      {
        name: 'Mind Twist',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'Black',
        supertype: 'Sorcery',
        effects: 'Target opponent discards X cards.',
        art: 'http://mythicspoiler.com/lea/cards/mindtwist.jpg'
      },
      {
        name: 'Nether Shadow',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Summon Shadow',
        effects: 'Haste\nIf this creature is in your graveyard with at least three creatures above it, you may cast this creature from your graveyard.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/nethershadow.jpg'
      },
      {
        name: 'Nettling Imp',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Imp',
        effects: '{T}: Target creature an opponent controls must attack this turn if able.  If that creature cannot, destroy it at end of turn.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/nettlingimp.jpg'
      },
      {
        name: 'Nightmare',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'Black',
        supertype: 'Summon Nightmare',
        effects: 'Flying\nNightmare\'s power and toughness are each equal to the number of Swamps its controller has on the battlefield.',
        flavor: 'The Nightmare arises from its lair in the swamps.  As the poisoned land spreads, so does the Nightmare\'s rage and terrifying strength.',
        power: '*',
        toughness: '*',
        art: 'http://mythicspoiler.com/lea/cards/nightmare.jpg'
      },
      {
        name: 'Paralyze',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Enchant Creature',
        effects: 'Tap enchanted creature.  It doesn\'t untap during its controller\'s untap step unless that player pays {4}.',
        art: 'http://mythicspoiler.com/lea/cards/paralyze.jpg'
      },
      {
        name: 'Pestilence',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Black',
        supertype: 'Enchantment',
        effects: '{B}: Pestilence deals 1 damage to each creature and each player.  Sacrifice Pestilence at end of turn if there are no creatures on the battlefield.',
        art: 'http://mythicspoiler.com/lea/cards/pestilence.jpg'
      },
      {
        name: 'Plague Rats',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Rats',
        effects: 'Plague Rats\'s power and toughness are each equal to the number of creatures on the battlefield named Plague Rats.',
        flavor: '"Should you a Rat to madness tease\nWhy ev\'n a Rat may plague you..."\n--Samuel Coleridge, "Recantation"',
        power: '*',
        toughness: '*',
        art: 'http://mythicspoiler.com/lea/cards/plaguerats.jpg'
      },
      {
        name: 'Raise Dead',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Sorcery',
        effects: 'Return target creature card from your graveyard to your hand.',
        art: 'http://mythicspoiler.com/lea/cards/raisedead.jpg'
      },
      {
        name: 'Royal Assassin',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Assassin',
        effects: '{T}: Destroy target tapped creature.',
        flavor: 'Trained in the arts of stealth, royal assassins choose their victims carefully, relying on timing and precision rather than brute force.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/royalassassin.jpg'
      },
      {
        name: 'Sacrifice',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Interrupt',
        effects: 'As an additional cost to cast this spell, sacrifice a creature.\nAdd a number of {B} to your mana pool equal to the sacrificed creature\'s converted mana cost.',
        art: 'http://mythicspoiler.com/lea/cards/sacrifice.jpg'
      },
      {
        name: 'Scathe Zombies',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Zombies',
        flavor: '"They groaned, they stirred, they all uprose,\nNor spake, nor moved their eyes;\nIt had been strange, even in a dream,\nTo have seen those dead men rise."\n--Samuel Coleridge, "The Rime of the Ancient Mariner"',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/scathezombies.jpg'
      },
      {
        name: 'Scavenging Ghoul',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Black',
        supertype: 'Summon Ghoul',
        effects: 'At the end of each turn, put a regeneration counter on Scavenging Ghoul for each creature that died this turn.\nRemove a regeneration counter: Regenerate Scavenging Ghoul.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/scavengingghoul.jpg'
      },
      {
        name: 'Sengir Vampire',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Black',
        supertype: 'Summon Vampire',
        effects: 'Flying\nWhenever a Vampire you control deals damage to a creature, if that creature would die this turn, put a +1/+1 counter on Sengir Vampire.',
        power: '4',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/sengirvampire.jpg'
      },
      {
        name: 'Simulacrum',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Instant',
        effects: 'Prevent all damage dealt to you this turn, and instead apply that damage to target creature you control.',
        art: 'http://mythicspoiler.com/lea/cards/simulacrum.jpg'
      },
      {
        name: 'Sinkhole',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Sorcery',
        effects: 'Destroy target land.',
        art: 'http://mythicspoiler.com/lea/cards/sinkhole.jpg'
      },
      {
        name: 'Terror',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Instant',
        effects: 'Destroy target nonblack, non-artifact creature.',
        art: 'http://mythicspoiler.com/lea/cards/terror.jpg'
      },
      {
        name: 'Unholy Strength',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gets +2/+1.',
        art: 'http://mythicspoiler.com/lea/cards/unholystrength.jpg'
      },
      {
        name: 'Wall of Bone',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Wall',
        effects: '{B}: Regenerate Wall of Bone.',
        flavor: 'The Wall of Bone is said to be an aspect of the Great Wall in Hel, where the bones of all sinners wait for Ragnarok, when Hela will call them forth for the final battle.',
        power: '1',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/wallofbone.jpg'
      },
      {
        name: 'Warp Artifact',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Enchant Artifact',
        effects: 'At the beginning of each upkeep, enchanted artifact deals 1 damage to its controller.',
        art: 'http://mythicspoiler.com/lea/cards/warpartifact.jpg'
      },
      {
        name: 'Weakness',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gets -2/-1.',
        art: 'http://mythicspoiler.com/lea/cards/weakness.jpg'
      },
      {
        name: 'Will-O-The-Wisp',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Black',
        supertype: 'Summon Will-O-The-Wisp',
        effects: 'Flying\n{B}: Regenerate Will-O-The-Wisp.',
        flavor: '"About, about in reel and rout\nThe death-fires danced at night;\nThe water, like a witch\'s oils,\nBurnt green and blue and white."\n--Samuel Coleridge, "The Rime of the Ancient Mariner"',
        power: '0',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/willothewisp.jpg'
      },
      {
        name: 'Word of Command',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Black',
        supertype: 'Instant',
        effects: 'You may look at an opponent\'s hand and choose a nonland card.  That player must cast that spell if possible.  This spell can\'t be countered after looking at that player\'s hand.',
        art: 'http://mythicspoiler.com/lea/cards/wordofcommand.jpg'
      },
      {
        name: 'Zombie Master',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Lord',
        effects: 'All Zombies gain swampwalk and have "{B}: Regenerate this creature."',
        flavor: 'They say the Zombie Master controlled these foul creatures even before his own death, but now that he is one of them, nothing can make them betray him.',
        power: '2',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/zombiemaster.jpg'
      },
      {
        name: 'Burrowing',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gains mountainwalk.',
        art: 'http://mythicspoiler.com/lea/cards/burrowing.jpg'
      },
      {
        name: 'Chaoslace',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Interrupt',
        effects: 'Change the color of target card to red until end of turn.',
        art: 'http://mythicspoiler.com/lea/cards/chaoslace.jpg'
      },
      {
        name: 'Disintegrate',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'Red',
        supertype: 'Sorcery',
        effects: 'Disintegrate deals X damage to target creature.  If that creature would die this way, exile it instead.',
        art: 'http://mythicspoiler.com/lea/cards/disintegrate.jpg'
      },
      {
        name: 'Dragon Whelp',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Red',
        supertype: 'Summon Dragon',
        effects: 'Flying\n{R}: Dragon Whelp gets +1/+0 until end of turn.  If this ability is activated more than three times this turn, destroy Dragon Whelp at end of turn.',
        flavor: '"...O to be a dragon...of silkworm size or immense..."\nMarianne Moore, "O to Be a Dragon"',
        power: '2',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/dragonwhelp.jpg'
      },
      {
        name: 'Dwarven Demolition Team',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Dwarves',
        effects: '{T}: Destroy target Wall.',
        flavor: 'Foolishly, Najib retreated to his castle at El-Abar; the next morning he was dead.  In just one night, the dwarven forces had reduced the mighty walls to mere rubble.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/dwarvendemolitionteam.jpg'
      },
      {
        name: 'Dwarven Warriors',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Dwarves',
        effects: '{T}: Target creature with power 2 or less can\'t be blocked this turn.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/dwarvenwarriors.jpg'
      },
      {
        name: 'Earth Elemental',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Red',
        supertype: 'Summon Elemental',
        flavor: 'Earth elementals have the eternal strength of stone and the endurance of mountains.  Primordially connected to the land they inhabit, they take a long-term view of things, scorning the impetuous haste of short-lived mortal creatures.',
        power: '4',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/earthelemental.jpg'
      },
      {
        name: 'Earthbind',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Enchant Flying Creature',
        effects: 'Earthbind deals 2 damage to enchanted creature.\nEnchanted creature loses flying.',
        art: 'http://mythicspoiler.com/lea/cards/earthbind.jpg'
      },
      {
        name: 'Earthquake',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'Red',
        supertype: 'Sorcery',
        effects: 'Earthquake deals X damage to each creature without flying and each player.',
        art: 'http://mythicspoiler.com/lea/cards/earthquake.jpg'
      },
      {
        name: 'False Orders',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Instant',
        effects: 'You decide if and how target creature an opponent controls blocks this turn.',
        art: 'http://mythicspoiler.com/lea/cards/falseorders.jpg'
      },
      {
        name: 'Fire Elemental',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Red',
        supertype: 'Summon Elemental',
        flavor: 'Fire Elementals are ruthless infernos, annihilating and consuming their foes in frenzied holocaust.  Crackling and blazing, they sear swift, terrible paths, leaving the land charred and scorched in their wake.',
        power: '5',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/fireelemental.jpg'
      },
      {
        name: 'Fireball',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'Red',
        supertype: 'Sorcery',
        effects: 'Fireball deals X damage divided evenly between any number of targets.  Pay an additional {1} for each target beyond the first.',
        art: 'http://mythicspoiler.com/lea/cards/fireball.jpg'
      },
      {
        name: 'Firebreathing',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature has "{R}: This creature gets +1/+0 until end of turn."',
        flavor: '"And topples round the dreary west\nA looming bastion fringed with fire."\n--Alfred, Lord Tennyson, "In Memoriam"',
        art: 'http://mythicspoiler.com/lea/cards/firebreathing.jpg'
      },
      {
        name: 'Flashfires',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Red',
        supertype: 'Sorcery',
        effects: 'Destroy all Plains.',
        art: 'http://mythicspoiler.com/lea/cards/flashfires.jpg'
      },
      {
        name: 'Fork',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Red',
        supertype: 'Interrupt',
        effects: 'Copy target instant or sorcery spell.  You may choose new targets for the copy.',
        art: 'http://mythicspoiler.com/lea/cards/fork.jpg'
        // Fork me?  Fork YOU!
      },
      {
        name: 'Goblin Balloon Brigade',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Summon Goblins',
        effects: '{R}: Goblins you control gain flying until end of turn.',
        flavor: '"From up here we can drop rocks and arrows and more rocks!" "Uh, yeah boss, but how do we get down?"',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/goblinballoonbrigade.jpg'
      },
      {
        name: 'Goblin King',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Goblin King',
        effects: 'Goblins you control gain mountainwalk and get +1/+1.',
        flavor: 'To become king of the Goblins, one must assassinate the previous king.  Thus, only the most foolish seek positions of leadership.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/goblinking.jpg'
      },
      {
        name: 'Granite Gargoyle',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Gargoyle',
        effects: 'Flying\n{R}: Granite Gargoyle gets +0/+1 until end of turn.',
        flavor: '"While most overworlders fortunately don\'t realize this, Gargoyles can be most delicious, provided you have the appropriate tools to carve them."\n--The Underworld Cookbook, by Asmoranomardicadaistinaculdacar',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/granitegargoyle.jpg'
      },
      {
        name: 'Gray Ogre',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Ogre',
        flavor: 'The Ogre philosopher Gnerdel believed the purpose of life was to live as high on the food chain as possible.  She refused to eat vegetarians, and preferred to live entirely on creatures that preyed on sentient beings.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/grayogre.jpg'
      },
      {
        name: 'Hill Giant',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Red',
        supertype: 'Summon Giant',
        flavor: 'Fortunately, Hill Giants have large blind spots in which a human can easily hide.  Unfortunately, these blind spots are beneath the bottoms of their feet.',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/hillgiant.jpg'
      },
      {
        name: 'Hurloon Minotaur',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Minotaur',
        flavor: 'The Minotaurs of the Hurloon Mountains are known for their love of battle.  They are also known for their hymns to the dead, sung for friend and foe alike.  These hymns can last for days, filling the mountain valleys with their low, haunting sounds.',
        power: '2',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/hurloonminotaur.jpg'
      },
      {
        name: 'Ironclaw Orcs',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Red',
        supertype: 'Summon Orcs',
        effects: 'Ironclaw Orcs can\'t block creatures with power greater than 1.',
        flavor: 'Generations of genetic weeding have given rise to the deviously cowardly Ironclaw clan.  To say that Orcs in general are vicious, depraved, and ignoble does not do justice to the Ironclaw.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/ironclaworcs.jpg'
      },
      {
        name: 'Keldon Warlord',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Red',
        supertype: 'Summon Lord',
        effects: 'Keldon Warlord\'s power and toughness are each equal to the number of non-Wall creatures you control.',
        power: '*',
        toughness: '*',
        art: 'http://mythicspoiler.com/lea/cards/keldonwarlord.jpg'
      },
      {
        name: 'Lightning Bolt',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Instant',
        effects: 'Lightning Bolt deals 3 damage to any target.',
        art: 'http://mythicspoiler.com/lea/cards/lightningbolt.jpg'
      },
      {
        name: 'Mana Flare',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Enchantment',
        effects: 'Whenever a player taps a land for mana, that player adds to his mana pool one mana of any type that land could produce.',
        art: 'http://mythicspoiler.com/lea/cards/manaflare.jpg'
      },
      {
        name: 'Manabarbs',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Red',
        supertype: 'Enchantment',
        effects: 'Whenever a player taps a land for mana, Manabarbs deals 1 damage to that player.',
        art: 'http://mythicspoiler.com/lea/cards/manabarbs.jpg'
      },
      {
        name: 'Mons\'s Goblin Raiders',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Summon Goblins',
        flavor: 'The intricate dynamics of Rundvelt Goblin affairs are often confused with anarchy.  The chaos, however, is the chaos of a thundercloud, and direction will sporadically and violently appear.  Pashalik Mons and his raiders are the thunderhead that leads in the storm.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/monssgoblinraiders.jpg'
      },
      {
        name: 'Orcish Artillery',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Orcs',
        effects: '{T}: Orcish Artillery deals 2 damage to any target and 3 damage to you.',
        flavor: 'In a rare display of ingenuity, the Orcs have invented an incredibly destructive weapon.  Most Orcish artillerists are those who dared criticize its effectiveness.',
        power: '1',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/orcishartillery.jpg'
      },
      {
        name: 'Orcish Oriflamme',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Red',
        supertype: 'Enchantment',
        effects: 'Attacking creatures you control get +1/+0.',
        art: 'http://mythicspoiler.com/lea/cards/orcishoriflamme.jpg'
      },
      {
        name: 'Power Surge',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Red',
        supertype: 'Enchantment',
        effects: 'Before untapping lands at the start of the turn, active player takes 1 damage for each land untapped from the previous turn.',
        art: 'http://mythicspoiler.com/lea/cards/powersurge.jpg'
      },
      {
        name: 'Raging River',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Red',
        supertype: 'Enchantment',
        effects: 'Whenever you attack, defending creatures without flying must be divided by their controller into Left or Right sides of the River.  You then choose which side of the River to place attacking creatures.  Attacking creatures you control can only be blocked by creatures with flying and creatures on the same side of the River.',
        art: 'http://mythicspoiler.com/lea/cards/ragingriver.jpg'
      },
      {
        name: 'Red Elemental Blast',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Interrupt',
        effects: 'Choose one --\n\t* Counter target blue spell.\n\t* Destroy target blue permanent.',
        art: 'http://mythicspoiler.com/lea/cards/redelementalblast.jpg'
      },
      {
        name: 'Roc of Kher Ridges',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Red',
        supertype: 'Summon Roc',
        effects: 'Flying',
        flavor: 'We encountered a valley topped with immense boulders and eerie rock formations.  Suddenly one of these boulders toppled from its perch and sprouted gargantuan wings, casting a shadow of darkness and sending us fleeing in terror.',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/rocofkherridges.jpg'
      },
      {
        name: 'Rock Hydra',
        set: 'Limited Edition Alpha',
        cost: '3+',
        color: 'Red',
        supertype: 'Summon Hydra',
        effects: 'Rock Hydra enters the battlefield with X +1/+1 counters on it.  For each point of damage dealt to Rock Hydra, prevent that damage and remove a +1/+1 counter unless you pay {R}.\nAt the beginning of your upkeep, you may pay {RRR}.  If you do, put a +1/+1 counter on Rock Hydra.  You may pay this cost multiple times.',
        power: '*',
        toughness: '*',
        art: 'http://mythicspoiler.com/lea/cards/rockhydra.jpg'
      },
      {
        name: 'Sedge Troll',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Troll',
        effects: '{B}: Regenerate Sedge Troll.\nSedge Troll gets +1/+1 if its controller controls a Swamp.',
        flavor: 'The stench in the hovel was overwhelming; something loathsome was cooking.  Occasionally, something surfaced in the thick paste, but my host would casually push it down before I could make out what it was.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/sedgetroll.jpg'
      },
      {
        name: 'Shatter',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Red',
        supertype: 'Instant',
        effects: 'Destroy target artifact.',
        art: 'http://mythicspoiler.com/lea/cards/shatter.jpg'
      },
      {
        name: 'Shivan Dragon',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'Red',
        supertype: 'Summon Dragon',
        effects: 'Flying\n{R}: Shivan Dragon gets +1/+0 until end of turn.',
        flavor: 'While it\'s true most Dragons are cruel, the Shivan Dragon seems to take particular glee in the misery of others, often tormenting its victims much like a cat plays with a mouse before delivering the final blow.',
        power: '5',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/shivandragon.jpg'
      },
      {
        name: 'Smoke',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Red',
        supertype: 'Enchantment',
        effects: 'Each player can untap only one creature during each of their untap steps.',
        art: 'http://mythicspoiler.com/lea/cards/smoke.jpg'
      },
      {
        name: 'Stone Giant',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Red',
        supertype: 'Summon Giant',
        effects: '{T}: Target creature you control with toughness less than Stone Giant\'s power gains flying until end of turn.  Destroy that creature at end of turn.',
        flavor: 'What goes up, must come down.',
        power: '3',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/stonegiant.jpg'
      },
      {
        name: 'Stone Rain',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Sorcery',
        effects: 'Destroy target land.',
        art: 'http://mythicspoiler.com/lea/cards/stonerain.jpg'
      },
      {
        name: 'Tunnel',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Red',
        supertype: 'Instant',
        effects: 'Destroy target Wall.',
        art: 'http://mythicspoiler.com/lea/cards/tunnel.jpg'
      },
      {
        name: 'Two-Headed Giant of Foriys',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Red',
        supertype: 'Summon Giant',
        effects: 'Trample\nThis creature may block an additional creature each combat.',
        flavor: 'None know if this Giant is the result of aberrant magics, Siamese twins, or a mentalist\'s schizophrenia.',
        power: '4',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/twoheadedgiantofforiys.jpg'
      },
      {
        name: 'Uthden Troll',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Troll',
        effects: '{R}: Regenerate Uthden Troll',
        flavor: '"Oi oi oi, me gotta hurt in \'ere,\nOi oi oi, me smell a ting is near,\nGonna bosh \'n gonna nosh \'n da hurt\'ll disappear."\n--Traditional',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/uthdentroll.jpg'
      },
      {
        name: 'Wall of Fire',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Wall',
        effects: '{R}: Wall of Fire gets +1/+0 until end of turn.',
        flavor: 'Conjured from the bowels of hell, the fiery wall forms an impossible barrier, searing the soul of any creature attempting to pass through its terrible bursts of flame.',
        power: '0',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/walloffire.jpg'
      },
      {
        name: 'Wall of Stone',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Wall',
        flavor: 'The Earth herself lends her strength to these walls of living stone, which possess the stability of ancient mountains.  These mighty bulwarks thwart ground-based troops, providing welcome relief for weary warriors who defend the land.',
        power: '0',
        toughness: '8',
        art: 'http://mythicspoiler.com/lea/cards/wallofstone.jpg'
      },
      {
        name: 'Wheel of Fortune',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Red',
        supertype: 'Sorcery',
        effects: 'Each player discards their hand and draws seven cards.',
        art: 'http://mythicspoiler.com/lea/cards/wheeloffortune.jpg'
      },
      {
        name: 'Aspect of Wolf',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Green',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature\'s power and toughness are increased by half the number of Forests you control, rounding down for power and rounding up for toughness.',
        art: 'http://mythicspoiler.com/lea/cards/aspectofwolf.jpg'
      },
      {
        name: 'Berserk',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Instant',
        effects: 'Target creature gets +X/+0 and gains trample, where X is its power.  If that creature attacks this turn, its controller sacrifices it at end of turn.',
        art: 'http://mythicspoiler.com/lea/cards/berserk.jpg'
      },
      {
        name: 'Birds of Paradise',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Summon Mana Birds',
        effects: 'Flying\n{T}: Add one mana of any color.',
        power: '0',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/birdsofparadise.jpg'
      },
      {
        name: 'Camouflage',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Instant',
        effects: 'You may rearrange your attackers face-down, revealing which is which only after blockers are assigned.  If this results in illegal blocks, those blockers can\'t block this turn.',
        art: 'http://mythicspoiler.com/lea/cards/camouflage.jpg'
      },
      {
        name: 'Channel',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Green',
        supertype: 'Sorcery',
        effects: 'Until end of turn, you may pay 1 life to add {1} to your mana pool.  This damage can\'t be prevented.',
        art: 'http://mythicspoiler.com/lea/cards/channel.jpg'
      },
      {
        name: 'Cockatrice',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Green',
        supertype: 'Summon Cockatrice',
        effects: 'Flying\nWhenever Cockatrice blocks or becomes blocked by a non-Wall creature, destroy that creature at end of combat.',
        power: '2',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/cockatrice.jpg'
      },
      {
        name: 'Craw Wurm',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'Green',
        supertype: 'Summon Wurm',
        flavor: 'The most terrifying thing about the Craw Wurm is probably the horrible crashing sound it makes as it speeds through the forest.  This noise is so loud it echoes through the trees and seems to come from all directions at once.',
        power: '6',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/crawwurm.jpg'
      },
      {
        name: 'Elvish Archers',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Green',
        supertype: 'Summon Elves',
        effects: 'First strike',
        flavor: 'I tell you, there was so many arrows flying about, you couldn\'t hardly see the sun!  So I says to young Angus, "Well, at least now we\'re fighting in the shade!"',
        power: '2',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/elvisharchers.jpg'
      },
      {
        name: 'Fastbond',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Enchantment',
        effects: 'You may play as many lands as you wish each turn.  Fastbond deals 1 damage to you for each land beyond the first played each turn.',
        art: 'http://mythicspoiler.com/lea/cards/fastbond.jpg'
      },
      {
        name: 'Fog',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Instant',
        effects: 'Prevent all combat damage that would be dealt this turn.',
        art: 'http://mythicspoiler.com/lea/cards/fog.jpg'
      },
      {
        name: 'Force of Nature',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'Green',
        supertype: 'Summon Force',
        effects: 'Trample\nAt the beginning of your upkeep, you must pay {GGGG} or Force of Nature deals 8 damage to you.',
        power: '8',
        toughness: '8',
        art: 'http://mythicspoiler.com/lea/cards/forceofnature.jpg'
      },
      {
        name: 'Fungusaur',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Green',
        supertype: 'Summon Fungusaur',
        effects: 'Whenever Fungusaur is dealt damage, put a +1/+1 counter on it. (It must survive the damage to get a +1/+1 counter.)',
        flavor: 'Rather than sheltering her young, the female Fungusaur often injures her own offspring, thereby ensuring their rapid growth.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/fungusaur.jpg'
      },
      {
        name: 'Gaea\'s Liege',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'Green',
        supertype: 'Summon Gaea\'s Liege',
        effects: 'Whenever Gaea\'s Liege attacks, its power and toughness are each equal to the number of Forests defending player controls.\nWhenever Gaea\'s Liege blocks, its power and toughness are each equal to the number of Forests you control.\n{T}: Target land becomes a Forest until Gaea\'s Liege leaves the battlefield.',
        power: '*',
        toughness: '*',
        art: 'http://mythicspoiler.com/lea/cards/gaeasliege.jpg'
      },
      {
        name: 'Giant Growth',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Instant',
        effects: 'Target creature gets +3/+3 until end of turn.',
        art: 'http://mythicspoiler.com/lea/cards/giantgrowth.jpg'
      },
      {
        name: 'Giant Spider',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Green',
        supertype: 'Summon Spider',
        effects: 'Reach',
        flavor: 'While it possesses potent venom, the Giant Spider often chooses not to paralyze its victims.  Perhaps the creature enjoys the gentle rocking motion caused by its captives\' struggles to escape its web.',
        power: '2',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/giantspider.jpg'
      },
      {
        name: 'Grizzly Bears',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Green',
        supertype: 'Summon Bears',
        flavor: 'Don\'t try to outrun one of Dominaria\'s Grizzlies; it\'ll catch you, knock you down, and eat you.  Of course, you could run up a tree.  In that case, you\'ll get a nice view before the bear knocks the tree down and eats you.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/grizzlybears.jpg'
      },
      {
        name: 'Hurricane',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'Green',
        supertype: 'Sorcery',
        effects: 'Hurricane deals X damage to each creature with flying and each player.',
        art: 'http://mythicspoiler.com/lea/cards/hurricane.jpg'
      },
      {
        name: 'Ice Storm',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Green',
        supertype: 'Sorcery',
        effects: 'Destroy target land.',
        art: 'http://mythicspoiler.com/lea/cards/icestorm.jpg'
      },
      {
        name: 'Instill Energy',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature has haste.\nYou may untap enchanted creature one additional time during your turn.',
        art: 'http://mythicspoiler.com/lea/cards/instillenergy.jpg'
      },
      {
        name: 'Ironroot Treefolk',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Green',
        supertype: 'Summon Treefolk',
        flavor: 'The mating habits of Treefolk, particularly the stalwart Ironroot Treefolk, are truly absurd.  Molasses comes to mind.  It\'s amazing the species can survive at all given such protracted periods of mate selection, conjugation, and gestation.',
        power: '3',
        toughness: '5',
        art: 'http://mythicspoiler.com/lea/cards/ironroottreefolk.jpg'
      },
      {
        name: 'Kudzu',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Green',
        supertype: 'Enchant Land',
        effects: 'When enchanted land becomes tapped, destroy it.  That land\'s controller attaches Kudzu to a land of their choosing.  If there are no lands in play, that player sacrifices Kudzu.',
        art: 'http://mythicspoiler.com/lea/cards/kudzu.jpg'
      },
      {
        name: 'Ley Druid',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Green',
        supertype: 'Summon Cleric',
        effects: '{T}: Untap target land.',
        flavor: 'After years of training, the Druid becomes one with nature, drawing power from the land and returning it when needed.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/leydruid.jpg'
      },
      {
        name: 'Lifeforce',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Green',
        supertype: 'Enchantment',
        effects: '{GG}: Counter target black spell.',
        art: 'http://mythicspoiler.com/lea/cards/lifeforce.jpg'
      },
      {
        name: 'Lifelace',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Interrupt',
        effects: 'Change the color of target card to green.',
        art: 'http://mythicspoiler.com/lea/cards/lifelace.jpg'
      },
      {
        name: 'Living Artifact',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Enchant Artifact',
        effects: 'Whenever you lose life, put that many counters on enchanted artifact.\nAt the beginning of your upkeep, you may remove a counter from enchanted artifact to gain 1 life.  Activate this ability only once each turn.',
        art: 'http://mythicspoiler.com/lea/cards/livingartifact.jpg'
      },
      {
        name: 'Living Lands',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Green',
        supertype: 'Enchantment',
        effects: 'All Forests on the battlefield are 1/1 creatures.',
        art: 'http://mythicspoiler.com/lea/cards/livinglands.jpg'
      },
      {
        name: 'Llanowar Elves',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Summon Elves',
        effects: '{T}: Add {G}.',
        flavor: 'Whenever the Llanowar Elves gather the fruits of their forest, they leave one plant of each type untouched, considering that nature\'s portion.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/llanowarelves.jpg'
      },
      {
        name: 'Lure',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Green',
        supertype: 'Enchant Creature',
        effects: 'All creatures able to block enchanted creature must do so.',
        art: 'http://mythicspoiler.com/lea/cards/lure.jpg'
      },
      {
        name: 'Natural Selection',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Instant',
        effects: 'You may look at the top three cards of target library.  You may put them back in any order or shuffle that library.',
        art: 'http://mythicspoiler.com/lea/cards/naturalselection.jpg'
      },
      {
        name: 'Regeneration',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Green',
        supertype: 'Enchant Creature',
        effects: '{G}: Regenerate enchanted creature.',
        art: 'http://mythicspoiler.com/lea/cards/regeneration.jpg'
      },
      {
        name: 'Regrowth',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Green',
        supertype: 'Sorcery',
        effects: 'Return target card from your graveyard to your hand.',
        art: 'http://mythicspoiler.com/lea/cards/regrowth.jpg'
      },
      {
        name: 'Scryb Sprites',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Summon Sprites',
        effects: 'Flying',
        flavor: 'The only sound was the gentle clicking of the Faeries\' wings.  Then those intruders who were still standing turned and fled.  One thing was certain: they didn\'t think the Scryb were funny anymore.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/scrybsprites.jpg'
      },
      {
        name: 'Shanodin Dryads',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Summon Dryads',
        effects: 'Forestwalk',
        flavor: 'Moving without sound, swift figures pass through branches and undergrowth completely unhindered.  One with the trees around them, the Dryads of Shanodin Forest are seen only when they wish to be.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/shanodindryads.jpg'
      },
      {
        name: 'Stream of Life',
        set: 'Limited Edition Alpha',
        cost: '2+',
        color: 'Green',
        supertype: 'Sorcery',
        effects: 'Target player gains X life.',
        art: 'http://mythicspoiler.com/lea/cards/streamoflife.jpg'
      },
      {
        name: 'Thicket Basilisk',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Green',
        supertype: 'Summon Basilisk',
        effects: 'Whenever Thicket Basilisk blocks or becomes blocked by a non-Wall creature, destroy that creature at end of combat.',
        flavor: 'Moss-covered statues littered the area, a macabre monument to the Basilisk\'s power.',
        power: '2',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/thicketbasilisk.jpg'
      },
      {
        name: 'Timber Wolves',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Summon Wolves',
        effects: 'Bands', // AKA Banding, is a rule for combat.  Can attack in a group, but if one is blocked, all are blocked.
        flavor: 'Though many think of Wolves as solitary predators, they are actually extremely social animals.  During a hunt they often call to each other, which can be quite unsettling for their prey.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/lea/cards/timberwolves.jpg'
      },
      {
        name: 'Tranquility',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Green',
        supertype: 'Sorcery',
        effects: 'Destroy all enchantments.',
        art: 'http://mythicspoiler.com/lea/cards/tranquility.jpg'
      },
      {
        name: 'Tsunami',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Green',
        supertype: 'Sorcery',
        effects: 'Destroy all Islands.',
        art: 'http://mythicspoiler.com/lea/cards/tsunami.jpg'
      },
      {
        name: 'Verduran Enchantress',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Green',
        supertype: 'Summon Enchantress',
        effects: 'Whenever you cast an enchantment spell, you may draw a card.',
        flavor: 'Some say magic was first practiced by women, who have always felt strong ties to the land.',
        power: '0',
        toughness: '2',
        art: 'http://mythicspoiler.com/lea/cards/verduranenchantress.jpg'
      },
      {
        name: 'Wall of Brambles',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Green',
        supertype: 'Summon Wall',
        effects: '{G}: Regenerate Wall of Brambles',
        flavor: '"What else, when chaos draws all forces inward to shape a single leaf."\n--Conrad Aiken',
        power: '2',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/wallofbrambles.jpg'
      },
      {
        name: 'Wall of Ice',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Green',
        supertype: 'Summon Wall',
        flavor: '"And through the drifts the snowy cliffs\nDid send a dismal sheen:\nNor shapes of men nor beasts we ken--\nThe ice was all between."\n--Samuel Coleridge, "The Rime of the Ancient Mariner"',
        power: '0',
        toughness: '7',
        art: 'http://mythicspoiler.com/lea/cards/wallofice.jpg'
      },
      {
        name: 'Wall of Wood',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Summon Wall',
        flavor: 'Everybody knows that to ward off trouble, you knock on wood.  But usually it\'s better to make a wall out of the wood and let trouble do the knocking.',
        power: '0',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/wallofwood.jpg'
      },
      {
        name: 'Wanderlust',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Green',
        supertype: 'Enchant Creature',
        effects: 'Wanderlust deals 1 damage to enchanted creature\'s controller during that player\'s upkeep.',
        art: 'http://mythicspoiler.com/lea/cards/wanderlust.jpg'
      },
      {
        name: 'War Mammoth',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Green',
        supertype: 'Summon Mammoth',
        effects: 'Trample',
        flavor: 'I didn\'t think Mammoths could ever hold a candle to a well-trained battle horse.  Then one day I turned my back on a drunken soldier.  His blow never landed; Mi\'cha flung the brute over ten meters.',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/warmammoth.jpg'
      },
      {
        name: 'Web',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gets +0/+2 and has reach.',
        art: 'http://mythicspoiler.com/lea/cards/web.jpg'
      },
      {
        name: 'Wild Growth',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Green',
        supertype: 'Enchant Land',
        effects: 'Whenever enchanted land becomes tapped for mana, add {G} in addition to the mana that land provides.',
        art: 'http://mythicspoiler.com/lea/cards/wildgrowth.jpg'
      },
      {
        name: 'Ankh of Mishra',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Whenever a player plays a land, Ankh of Mishra deals 2 damage to that player.',
        art: 'http://mythicspoiler.com/lea/cards/ankhofmishra.jpg'
      },
      {
        name: 'Basalt Monolith',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Basalt Monolith doesn\'t untap during its controller\'s untap step.\n{T}: Add {3}.\n{3}: Untap Basalt Monolith.',
        art: 'http://mythicspoiler.com/lea/cards/basaltmonolith.jpg'
      },
      {
        name: 'Black Lotus', // Most valuable MtG card in the game, valued at ~$25k!  One of the Power 9!
        set: 'Limited Edition Alpha',
        cost: '0',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{T}, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/blacklotus.jpg'
      },
      {
        name: 'Black Vise',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'At the beginning of each opponent\'s upkeep, if that player has more than four cards in hand, Black Vise deals 1 damage to that player for each card beyond four.',
        art: 'http://mythicspoiler.com/lea/cards/blackvise.jpg'
      },
      {
        name: 'Celestial Prism',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Add one mana of any color to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/celestialprism.jpg'
      },
      {
        name: 'Chaos Orb',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Flip Chaos Orb onto the battlefield from a height of at least one foot.  Chaos Orb must make one full rotation or it is sacrificed with no effect.  When it lands, destroy any permanent Chaos Orb is touching, then sacrifice Chaos Orb.',
        art: 'http://mythicspoiler.com/lea/cards/chaosorb.jpg'
      },
      {
        name: 'Clockwork Beast',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Clockwork Beast enters the battlefield with seven +1/+0 counters on it.\nWhenever Clockwork Beast attacks or blocks, remove a +1/+0 counter.\nAt the beginning of your upkeep, you may pay {1}.  If you do, put a +1/+0 counter on Clockwork Beast, then tap it.',
        power: '0',
        toughness: '4',
        art: 'http://mythicspoiler.com/lea/cards/clockworkbeast.jpg'
      },
      {
        name: 'Conservator',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{3}: Prevent the next 2 damage dealt to you.',
        art: 'http://mythicspoiler.com/lea/cards/conservator.jpg'
      },
      {
        name: 'Copper Tablet',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'At the beginning of each player\'s upkeep, Copper Tablet deals 1 damage to that player.',
        art: 'http://mythicspoiler.com/lea/cards/coppertablet.jpg'
      },
      {
        name: 'Crystal Rod',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Until end of turn, whenever a player casts a blue spell, you gain 1 life.',
        art: 'http://mythicspoiler.com/lea/cards/crystalrod.jpg'
      },
      {
        name: 'Cyclopean Tomb',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'At the beginning of each upkeep, you may pay {2}.  If you do, target land becomes a Swamp.\nAt the beginning of each upkeep after Cyclopean Tomb leaves the battlefield, revert one land originally changed by Cyclopean Tomb.',
        art: 'http://mythicspoiler.com/lea/cards/cyclopeantomb.jpg'
      },
      {
        name: 'Dingus Egg',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Whenever a land is destroyed, Dingus Egg deals 2 damage to that land\'s controller.',
        art: 'http://mythicspoiler.com/lea/cards/dingusegg.jpg'
      },
      {
        name: 'Disrupting Scepter',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{3}: Target opponent discards a card.  Activate this ability only during your turn.',
        art: 'http://mythicspoiler.com/lea/cards/disruptingscepter.jpg'
      },
      {
        name: 'Forcefield',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Prevent all but 1 damage dealt to you by target unblocked creature.',
        art: 'http://mythicspoiler.com/lea/cards/forcefield.jpg'
      },
      {
        name: 'Gauntlet of Might',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Red creatures you control get +1/+1.\nWhenever you tap a Mountain for mana, add an additional {R} to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/gauntletofmight.jpg'
      },
      {
        name: 'Glasses of Urza',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'You may look at an opponent\'s hand at any time.',
        art: 'http://mythicspoiler.com/lea/cards/glassesofurza.jpg'
      },
      {
        name: 'Helm of Chatzuk',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Target creature gains banding until end of turn.',
        art: 'http://mythicspoiler.com/lea/cards/helmofchatzuk.jpg'
      },
      {
        name: 'Howling Mine',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Each player draws an additional card during their draw step.',
        art: 'http://mythicspoiler.com/lea/cards/howlingmine.jpg'
      },
      {
        name: 'Icy Manipulator',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Tap target artifact, creature, or land.',
        art: 'http://mythicspoiler.com/lea/cards/icymanipulator.jpg'
      },
      {
        name: 'Illusionary Mask',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{X}: You may play a creature face-down for X.  This cost is only to hide the true casting cost of the face-down creature.  You may turn the creature face-up at any time for its casting cost.  Whenever the face-down creature deals damage, takes damage, or becomes tapped, turn it face-up and pay its casting cost.',
        art: 'http://mythicspoiler.com/lea/cards/illusionarymask.jpg'
      },
      {
        name: 'Iron Star',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Until end of turn, whenever a player casts a red spell, you gain 1 life.',
        art: 'http://mythicspoiler.com/lea/cards/ironstar.jpg'
      },
      {
        name: 'Ivory Cup',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Until end of turn, whenever a player casts a white spell, you gain 1 life.',
        art: 'http://mythicspoiler.com/lea/cards/ivorycup.jpg'
      },
      {
        name: 'Jade Monolith',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: You may redirect any damage dealt to target creature to yourself.',
        art: 'http://mythicspoiler.com/lea/cards/jademonolith.jpg'
      },
      {
        name: 'Jade Statue',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Jade Statue becomes a 3/6 artifact creature until end of turn.  Activate this ability only at the beginning of the combat step.',
        flavor: '"Some of the other guys dared me to touch it, but I knew it weren\'t no ordinary hunk o\' rock."\n--Norin the Wary',
        art: 'http://mythicspoiler.com/lea/cards/jadestatue.jpg'
      },
      {
        name: 'Jayemdae Tome',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{4}: Draw a card.',
        art: 'http://mythicspoiler.com/lea/cards/jayemdaetome.jpg'
      },
      {
        name: 'Juggernaut',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Juggernaut must attack each turn if able, and it cannot be blocked by Walls.',
        flavor: 'We had taken refuge in a small cave, thinking the entrance was too narrow for it to follow.  To our horror, its gigantic head smashed into the mountainside, ripping itself a new entrance.',
        power: '5',
        toughness: '3',
        art: 'http://mythicspoiler.com/lea/cards/juggernaut.jpg'
      },
      {
        name: 'Kormus Bell',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'All Swamps in play are 1/1 colorless creatures.  They\'re still lands.',
        art: 'http://mythicspoiler.com/lea/cards/kormusbell.jpg'
      },
      {
        name: 'Library of Leng',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'You have no maximum hand size.\nWhenever an effect would cause you to discard a card, you may discard that card to the top of your library instead of your graveyard.  If the discard is random, you may look at that card before deciding where to discard it.',
        art: 'http://mythicspoiler.com/lea/cards/libraryofleng.jpg'
      },
      {
        name: 'Living Wall',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Counts as a Wall.\n{1}: Regenerate Living Wall.',
        flavor: 'Some fiendish mage had created a horrifying wall of living flesh, patched together from a jumble of still-recognizable body parts.  As we sought to hew our way through it, some unknown power healed the gaping wounds we cut, denying us passage.',
        power: '0',
        toughness: '6',
        art: 'http://mythicspoiler.com/lea/cards/livingwall.jpg'
      },
      {
        name: 'Mana Vault',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Mana Vault does not untap during your untap step.\n{4}: Untap Mana Vault.\n{T}: Add {3} to your mana pool.\nAt the beginning of your upkeep, if Mana Vault is tapped, it deals 1 damage to you.',
        art: 'http://mythicspoiler.com/lea/cards/manavault.jpg'
      },
      {
        name: 'Meekstone',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Creatures with power 3 or greater don\'t untap during their controller\'s untap step.',
        art: 'http://mythicspoiler.com/lea/cards/meekstone.jpg'
      },
      {
        name: 'Mox Emerald',
        set: 'Limited Edition Alpha',
        cost: '0',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{T}: Add {G} to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/moxemerald.jpg'
      },
      {
        name: 'Mox Jet',
        set: 'Limited Edition Alpha',
        cost: '0',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{T}: Add {B} to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/moxjet.jpg'
      },
      {
        name: 'Mox Pearl',
        set: 'Limited Edition Alpha',
        cost: '0',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{T}: Add {W} to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/moxpearl.jpg'
      },
      {
        name: 'Mox Ruby',
        set: 'Limited Edition Alpha',
        cost: '0',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{T}: Add {R} to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/moxruby.jpg'
      },
      {
        name: 'Mox Sapphire',
        set: 'Limited Edition Alpha',
        cost: '0',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{T}: Add {U} to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/moxsapphire.jpg'
      },
      {
        name: 'Nevinyrral\'s Disk',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Nevinyrral\'s Disk enters the battlefield tapped.\n{1}, {T}: Destroy all artifacts, creatures, and enchantments.',
        art: 'http://mythicspoiler.com/lea/cards/nevinyrralsdisk.jpg'
      },
      {
        name: 'Obsianus Golem',
        set: 'Limited Edition Alpha',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        flavor: '"The foot stone is connected to the ankle stone, the ankle stone is connected to the leg stone..."\n--Song of the Artificer',
        power: '4',
        toughness: '6',
        art: 'http://mythicspoiler.com/lea/cards/obsianusgolem.jpg'
      },
      {
        name: 'Rod of Ruin',
        set: 'Limited Edition Alpha',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{3}: Rod of Ruin deals 1 damage to any target.',
        art: 'http://mythicspoiler.com/lea/cards/rodofruin.jpg'
      },
      {
        name: 'Sol Ring',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{T}: Add {2} to your mana pool.',
        art: 'http://mythicspoiler.com/lea/cards/solring.jpg'
      },
      {
        name: 'Soul Net',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Until end of turn, whenever a creature is destroyed, you gain 1 life unless that creature is regenerated.',
        art: 'http://mythicspoiler.com/lea/cards/soulnet.jpg'
      },
      {
        name: 'Sunglasses of Urza',
        set: 'Limited Edition Alpha',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'White mana in your mana pool may be used as either white or red mana.',
        art: 'http://mythicspoiler.com/lea/cards/sunglassesofurza.jpg'
      },
      {
        name: 'The Hive',
        set: 'Limited Edition Alpha',
        cost: '5',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{5}: Create a colorless 1/1 Giant Wasp artifact creature token with flying.',
        art: 'http://mythicspoiler.com/lea/cards/thehive.jpg'
      },
      {
        name: 'Throne of Bone',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Until end of turn, whenever a player casts a black spell, you gain 1 life.',
        art: 'http://mythicspoiler.com/lea/cards/throneofbone.jpg'
      },
      {
        name: 'Time Vault',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Time Vault enters the battlefield tapped.\nTime Vault doesn\'t untap during its controller\'s untap step.\nSkip your turn: Untap Time Vault.\n{T}: Take an additional turn after this one.',
        art: 'http://mythicspoiler.com/lea/cards/timevault.jpg'
      },
      {
        name: 'Winter Orb',
        set: 'Limited Edition Alpha',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Players can only untap up to one land during each of their untap steps.',
        art: 'http://mythicspoiler.com/lea/cards/winterorb.jpg'
      },
      {
        name: 'Wooden Sphere',
        set: 'Limited Edition Alpha',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Until end of turn, whenever a player casts a green spell, you gain 1 life.',
        art: 'http://mythicspoiler.com/lea/cards/woodensphere.jpg'
      },
      {
        name: 'Badlands',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both a Mountain and a Swamp.\n{T}: Add {R} or {B}.',
        art: 'http://mythicspoiler.com/lea/cards/badlands.jpg'
      },
      {
        name: 'Bayou',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both a Swamp and a Forest.\n{T}: Add {B} or {G}.',
        art: 'http://mythicspoiler.com/lea/cards/bayou.jpg'
      },
      {
        name: 'Plateau',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both a Mountain and a Plains.\n{T}: Add {R} or {W}.',
        art: 'http://mythicspoiler.com/lea/cards/plateau.jpg'
      },
      {
        name: 'Savannah',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both a Forest and a Plains.\n{T}: Add {G} or {W}.',
        art: 'http://mythicspoiler.com/lea/cards/savannah.jpg'
      },
      {
        name: 'Scrubland',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both a Plains and a Swamp.\n{T}: Add {W} or {B}.',
        art: 'http://mythicspoiler.com/lea/cards/scrubland.jpg'
      },
      {
        name: 'Taiga',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both a Mountain and a Forest.\n{T}: Add {R} or {G}.',
        art: 'http://mythicspoiler.com/lea/cards/taiga.jpg'
      },
      {
        name: 'Tropical Island',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both an Island and a Forest.\n{T}: Add {U} or {G}.',
        art: 'http://mythicspoiler.com/lea/cards/tropicalisland.jpg'
      },
      {
        name: 'Tundra',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both a Plains and an Island.\n{T}: Add {W} or {U}.',
        art: 'http://mythicspoiler.com/lea/cards/tundra.jpg'
      },
      {
        name: 'Underground Sea',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both an Island and a Swamp.\n{T}: Add {U} or {B}.',
        art: 'http://mythicspoiler.com/lea/cards/undergroundsea.jpg'
      },
      {
        name: 'Volcanic Island',
        set: 'Limited Edition Alpha',
        color: 'Colorless',
        supertype: 'Land',
        effects: 'Counts as both an Island and a Mountain.\n{T}: Add {U} or {R}.',
        art: 'http://mythicspoiler.com/lea/cards/volcanicisland.jpg'
      }
    ]);
  });
};