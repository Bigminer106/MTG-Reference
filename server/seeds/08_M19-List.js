exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Card_List').del()
  .then(() => {
    // Inserts seed entries
    return knex('Card_List').insert([
      {
        name: 'Aegis of the Heavens',
        set: 'Magic 2019 Core Set',
        cost: '2',
        color: 'White',
        supertype: 'Instant',
        effects: 'Target creature gets +1/+7 until end of turn.',
        flavor: 'Inner strength is never seen until it makes all the difference.',
        art: 'http://mythicspoiler.com/m19/cards/aegisoftheheavens1.jpg'
      },
      {
        name: 'Aethershield Harvester',
        set: 'Magic 2019 Core Set',
        cost: '4',
        color: 'White',
        supertype: 'Creature',
        rarity: 'Dwarf Artificer',
        effects: 'At the beginning of combat on your turn, target artifact creature you control gets +2/+2 and gains indestructible until end of turn. (Damage and effects that say "destroy" don\'t destroy it.)',
        flavor: 'Most smiths shape metal, but some prefer more delicate materials.',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/m19/cards/aethershieldartificer1.jpg'
      },
      {
        name: 'Ajani, Adversary of Tyrants',
        set: 'Magic 2019 Core Set',
        cost: '4',
        color: 'White',
        supertype: 'Legendary Planeswalker',
        subtype: 'Ajani',
        rarity: 'Mythic',
        effects: '+1: Put a +1/+1 counter on each of up to two target creatures.\n-2: Return target creature with converted mana cost 2 or less from your graveyard to the battlefield.\n-7: You get an emblem with, "At the beginning of your end step, create three 1/1 white Cat creature tokens with lifelink."',
        loyalty: '4',
        art: 'http://mythicspoiler.com/m19/cards/ajaniadversaryoftyrants1.jpg'
      },
      {
        name: 'Ajani\'s Last Stand',
        set: 'Magic 2019 Core Set',
        cost: '4',
        color: 'White',
        supertype: 'Enchantment',
        rarity: 'Rare',
        effects: 'Whenever a creature or planeswalker you control dies, you may sacrifice Ajani\'s Last Stand.  If you do, create a 4/4 white Avatar creature token with flying.\nWhen a spell or ability an opponent controls causes you to discard this card, if you control a Plains, create a 4/4 white Avatar creature token with flying.',
        art: 'http://mythicspoiler.com/m19/cards/ajanislaststand.jpg'
      },
      {
        name: 'Ajani\'s Pridemate',
        set: 'Magic 2019 Core Set',
        cost: '2',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Cat Warrior',
        rarity: 'Uncommon',
        effects: 'Whenever you gain life, you may put a +1/+1 counter on Ajani\'s Pridemate.',
        flavor: '"When one of us prospers, the pride prospers."\n--Jazal Goldmane',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/m19/cards/ajanispridemate.jpg'
      },
      {
        name: 'Ajani\'s Welcome',
        set: 'Magic 2019 Core Set',
        cost: '1',
        color: 'White',
        supertype: 'Enchantment',
        rarity: 'Uncommon',
        effects: 'Whenever a creature enters the battlefield under your control, you gain 1 life.',
        flavor: '"You cannot defend others if your own well-being is neglected."',
        art: 'http://mythicspoiler.com/m19/cards/ajaniswelcome.jpg'
      },
      {
        name: 'Angel of the Dawn',
        set: 'Magic 2019 Core Set',
        cost: '5',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Angel',
        rarity: 'Common',
        effects: 'Flying\nWhen Angel of the Dawn enters the battlefield, creatures you control get +1/+1 and gain vigilance until end of turn. (Attacking doesn\'t cause them to tap.)',
        flavor: 'She sings for all those who have been silenced.',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/m19/cards/angelofthedawn1.jpg'
      },
      {
        name: 'Cavalry Drillmaster',
        set: 'Magic 2019 Core Set',
        cost: '2',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Knight',
        rarity: 'Common',
        effects: 'When Cavalry Drillmaster enters the battlefield, target creature you control gets +2/+0 and gains first strike until end of turn. (It deals combat damage before creatures without first strike.)',
        power: '2',
        toughness: '1',
        art: 'http://mythicspoiler.com/m19/cards/cavalrydrillmaster.jpg'
      },
      {
        name: 'Cleansing Nova',
        set: 'Magic 2019 Core Set',
        cost: '5',
        color: 'White',
        supertype: 'Sorcery',
        rarity: 'Rare',
        effects: 'Choose one --\n\tDestroy all creatures.\n\tDestroy all artifacts and enchantments.',
        flavor: 'In their final moments, the demons gazed upon grace in its purest form.',
        art: 'http://mythicspoiler.com/m19/cards/cleansingnova.jpg'
      },
      {
        name: 'Daybreak Chaplain',
        set: 'Magic 2019 Core Set',
        cost: '2',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Cleric',
        rarity: 'Common',
        effects: 'Lifelink (Damage dealt by this creature also causes you to gain that much life.)',
        flavor: '"May the light shine through me to guide the lost."',
        power: '1',
        toughness: '3',
        art: 'http://mythicspoiler.com/m19/cards/daybreakchaplain1.jpg'
      },
      {
        name: 'Dwarven Priest',
        set: 'Magic 2019 Core Set',
        cost: '4',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Dwarf Cleric',
        rarity: 'Common',
        effects: 'When Dwarven Priest enters the battlefield, you gain 1 life for each creature you control.',
        flavor: '"These storied halls are under my protection."',
        power: '2',
        toughness: '4',
        art: 'http://mythicspoiler.com/m19/cards/dwarvenpriest1.jpg'
      },
      {
        name: 'Gallant Cavalry',
        set: 'Magic 2019 Core Set',
        cost: '4',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Knight',
        rarity: 'Common',
        effects: 'Vigilance (Attacking doesn\'t cause this creature to tap.)\nWhen Gallant Cavalry enters the battlefield, create a 2/2 white Knight creature token with vigilance.',
        flavor: '"Our duty does not stop at our borders."',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/m19/cards/gallantcavalry1.jpg'
      },
      {
        name: 'Herald of Faith',
        set: 'Magic 2019 Core Set',
        cost: '5',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Angel',
        rarity: 'Uncommon',
        effects: 'Flying\nWhenever Herald of Faith attacks, you gain 2 life.',
        flavor: 'The clerics prayed for salvation.  The soldiers prayed for victory.  Both prayers were answered.',
        power: '4',
        toughness: '3',
        art: 'http://mythicspoiler.com/m19/cards/heraldoffaith.jpg'
      },
      {
        name: 'Hieromancer\'s Cage',
        set: 'Magic 2019 Core Set',
        cost: '4',
        color: 'White',
        supertype: 'Enchantment',
        rarity: 'Uncommon',
        effects: 'When Hieromancer\'s Cage enters the battlefield, exile target nonland permanent an opponent controls until Hieromancer\'s Cage leaves the battlefield.',
        flavor: 'Law protects but also contains.',
        art: 'http://mythicspoiler.com/m19/cards/hieromancerscage.jpg'
      },
      {
        name: 'Inspired Charge',
        set: 'Magic 2019 Core Set',
        cost: '4',
        color: 'White',
        supertype: 'Instant',
        rarity: 'Common',
        effects: 'Creatures you control get +2/+1 until end of turn.',
        flavor: '"Impossible!  How could they overwhelm us?  We had barricades, war elephants... and they were hardly a tenth of our number!"\n--General Avitora',
        art: 'http://mythicspoiler.com/m19/cards/inspiredcharge1.jpg'
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
      {
        name: '',
        set: 'Magic 2019 Core Set',
        cost: '',
        color: 'White',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        loyalty: '',
        art: ''
      },
    ]);
  });
};
