exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Card_List').del()
  .then(function () {
    // Inserts seed entries
    return knex('Card_List').insert([
      {
        name: 'Abu Jafar',
        set: 'Arabian Nights',
        cost: '1',
        color: 'White',
        supertype: 'Summon Leper',
        effects: 'If this creature dies from combat damage, destroy all creatures blocking or blocked by it.  They cannot be regenerated.',
        power: '0',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/abujafar.jpg'
      },
      {
        name: 'Army of Allah',
        set: 'Arabian Nights',
        cost: '3',
        color: 'White',
        supertype: 'Instant',
        effects: 'Attacking creatures get +2/+0 until end of turn.',
        flavor: '"On the day of victory, no one is tired."\n--Arab proverb',
        art: 'http://mythicspoiler.com/arn/cards/armyofallah.jpg'
      },
      {
        name: 'Camel',
        set: 'Arabian Nights',
        cost: '1',
        color: 'White',
        supertype: 'Summon Camel',
        effects: 'Bands\nPrevent all damage dealt to this creature and all creatures in its band from Deserts.',
        flavor: 'Everyone knew Walid was a pious man, for he had been blessed with many sons, many jewels, and a great many camels.',
        power: '0',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/camel.jpg'
      },
      {
        name: 'Eye for an Eye',
        set: 'Arabian Nights',
        cost: '2',
        color: 'White',
        supertype: 'Instant',
        effects: 'Can only be cast after you have received damage from any source.\nEye for an Eye deals damage equal to the damage dealt by the chosen source.  Any damage prevented from that source is not prevented from Eye for an Eye.',
        art: 'http://mythicspoiler.com/arn/cards/eyeforaneye.jpg'
      },
      {
        name: 'Jihad',
        set: 'Arabian Nights',
        cost: '3',
        color: 'White',
        supertype: 'Enchantment',
        effects: 'When Jihad enters the battlefield, choose a color.\nAs long as an opponent controls a permanent of the chosen color, all white creatures get +2/+1.  If an opponent has no permanents of the chosen color, sacrifice Jihad.',
        art: 'http://mythicspoiler.com/arn/cards/jihad.jpg'
      },
      {
        name: 'King Suleiman',
        set: 'Arabian Nights',
        cost: '2',
        color: 'White',
        supertype: 'Summon King',
        effects: '{T}: Destroy target Djinn or Efreet.',
        flavor: '"We made tempestuous winds obedient to Solomon... And many of the devils We also made obedient to him."\n--The Qur\'an, 21:81',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/kingsuleiman.jpg'
      },
      {
        name: 'Moorish Cavalry',
        set: 'Arabian Nights',
        cost: '4',
        color: 'White',
        supertype: 'Summon Cavalry',
        effects: 'Trample',
        flavor: 'Members of the elite Moorish Cavalry are very particular about their mounts, choosing only those whose bloodlines have been pure for generations.',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/moorishcavalry.jpg'
      },
      {
        name: 'Piety',
        set: 'Arabian Nights',
        cost: '3',
        color: 'White',
        supertype: 'Instant',
        effects: 'Defending creatures get +0/+3 until end of turn.',
        flavor: '"Whoever obeys God and His Prophet, fears God and does his duty to Him, will surely find success."\n--The Qur\'an, 24:52',
        art: 'http://mythicspoiler.com/arn/cards/piety.jpg'
      },
      {
        name: 'Repentant Blacksmith',
        set: 'Arabian Nights',
        cost: '2',
        color: 'White',
        supertype: 'Summon Smith',
        effects: 'Protection from red',
        flavor: '"For my confession they burned me with fire\nAnd found that I was for endurance made."\n--The Arabian Nights, translated by Haddawy',
        power: '1',
        toughness: '2',
        art: 'http://mythicspoiler.com/arn/cards/repentantblacksmith.jpg'
      },
      {
        name: 'Shahrazad',
        set: 'Arabian Nights',
        cost: '2',
        color: 'White',
        supertype: 'Sorcery',
        effects: 'Players must leave game in progress and use remaining cards in their libraries as decks for a subgame of Magic.  When that subgame is over, players shuffle those cards back into their libraries and return to the game in progress.  The loser of the subgame subtracts their life total by half, rounding down.',
        art: 'http://mythicspoiler.com/arn/cards/shahrazad.jpg'
      },
      {
        name: 'War Elephant',
        set: 'Arabian Nights',
        cost: '4',
        color: 'White',
        supertype: 'Summon Elephant',
        effects: 'Trample, bands',
        flavor: '"When elephants fight, it is the grass that suffers."\n--Kikuyu proverb',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/arn/cards/warelephant.jpg'
      },
      {
        name: 'Dandan',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Blue',
        supertype: 'Summon Dandan',
        effects: 'Dandan can\'t attack unless an opponent controls an Island.\nIf you have no Islands in play, sacrifice Dandan.',
        power: '4',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/dandan.jpg'
      },
      {
        name: 'Fishliver Oil',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature has islandwalk.',
        flavor: '"Then the maiden bade him cast off his robes and cover his body with fishliver oil, that he might safely follow her into the sea."',
        art: 'http://mythicspoiler.com/arn/cards/fishliveroil.jpg'
      },
      {
        name: 'Flying Men',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Blue',
        supertype: 'Summon Flying Men',
        effects: 'Flying',
        flavor: '"Saffiyah clapped her hands, and twenty flying men appeared at her side, each well trained in the art of combat."',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/flyingmen.jpg'
      },
      {
        name: 'Giant Tortoise',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Blue',
        supertype: 'Summon Tortoise',
        effects: 'Giant Tortoise gets +0/+3 as long as it\'s untapped.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/gianttortoise.jpg'
      },
      {
        name: 'Island Fish Jasconius',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Blue',
        supertype: 'Summon Island Fish',
        effects: 'You must pay {UUU} during your untap step to untap this creature.\nThis creature can\'t attack unless an opponent controls an Island.\nIf you have no Islands in play, sacrifice Island Fish.',
        power: '6',
        toughness: '8',
        art: 'http://mythicspoiler.com/arn/cards/islandfishjasconius.jpg'
      },
      {
        name: 'Merchant Ship',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Blue',
        supertype: 'Summon Ship',
        effects: 'If Merchant Ship attacks and is not blocked, you gain 2 life.\nMerchant Ship can\'t attack unless an opponent controls an Island.\nIf you have no Islands in play, sacrifice Merchant Ship.',
        power: '0',
        toughness: '2',
        art: 'http://mythicspoiler.com/arn/cards/merchantship.jpg'
      },
      {
        name: 'Old Man of the Sea',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Blue',
        supertype: 'Summon Marid',
        effects: '{T}: Gain control of target creature with power less than or equal to Old Man of the Sea\'s power.  You lose control of that creature if Old Man of the Sea becomes untapped or if that creature\'s power becomes greater than the Old Man\'s.\nYou may choose not to untap Old Man of the Sea during your untap step.',
        power: '2',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/oldmanofthesea.jpg'
      },
      {
        name: 'Serendib Djinn',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Blue',
        supertype: 'Summon Djinn',
        effects: 'Flying\nAt the beginning of your upkeep, sacrifice a land.  If an Island is sacrificed this way, Serendib Djinn deals 3 damage to you.  If you can\'t sacrifice a land, sacrifice Serendib Djinn instead.',
        power: '5',
        toughness: '6',
        art: 'http://mythicspoiler.com/arn/cards/serendibdjinn.jpg'
      },
      {
        name: 'Serendib Efreet',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Blue',
        supertype: 'Summon Efreet',
        effects: 'Flying\nAt the beginning of your upkeep, Serendib Efreet deals 1 damage to you.',
        power: '3',
        toughness: '4',
        art: 'http://mythicspoiler.com/arn/cards/serendibefreet.jpg'
      },
      {
        name: 'Sindbad',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Blue',
        supertype: 'Summon Sindbad',
        effects: '{T}: Draw a card.  If that card is not a land, discard a card.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/sindbad.jpg'
      },
      {
        name: 'Unstable Mutation',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Blue',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature gets +3/+3.\nAt the beginning of your upkeep, put a -1/-1 counter on enchanted creature.',
        art: 'http://mythicspoiler.com/arn/cards/unstablemutation.jpg'
      },
      {
        name: 'Cuombajj Witches',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Black',
        supertype: 'Summon Witches',
        effects: '{T}: Cuombajj Witches deals 1 damage to any target.  Target opponent may also deal 1 damage to any target.',
        power: '1',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/cuombajjwitches.jpg'
      },
      {
        name: 'El-Hajjaj',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Black',
        supertype: 'Summon El-Hajjaj',
        effects: 'Lifelink',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/elhajjaj.jpg'
      },
      {
        name: 'Erg Raiders',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Black',
        supertype: 'Summon Raiders',
        effects: 'If you don\'t attack with Erg Raiders, they deal 2 damage to you at the end of the turn.',
        power: '2',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/ergraiders.jpg'
      },
      {
        name: 'Guardian Beast',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Black',
        supertype: 'Summon Guardian',
        effects: 'As long as Guardian Beast is untapped, noncreature artifacts you control have indestructible and shroud.',
        power: '2',
        toughness: '4',
        art: 'http://mythicspoiler.com/arn/cards/guardianbeast.jpg'
      },
      {
        name: 'Hasran Ogress',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Black',
        supertype: 'Summon Ogre',
        effects: 'Whenever Hasran Ogress attacks, you may pay {2}.  If you don\'t, Hasran Ogress deals 3 damage to you.',
        power: '3',
        toughness: '2',
        art: 'http://mythicspoiler.com/arn/cards/hasranogress.jpg'
      },
      {
        name: 'Junun Efreet',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Efreet',
        effects: 'Flying\nAt the beginning of your upkeep, pay {BB} or sacrifice Junun Efreet.',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/jununefreet.jpg'
      },
      {
        name: 'Juzam Djinn',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Black',
        supertype: 'Summon Djinn',
        effects: 'At the beginning of your upkeep, Juzam Djinn deals 1 damage to you.',
        flavor: '"Expect my visit when the darkness comes.  The night I think is best for hiding all."\n--Ouallada',
        power: '5',
        toughness: '5',
        art: 'http://mythicspoiler.com/arn/cards/juzamdjinn.jpg'
      },
      {
        name: 'Khabal Ghoul',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Ghoul',
        effects: 'At the end of each turn, put a +1/+1 counter on Khabal Ghoul for each creature that died this turn.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/khabalghoul.jpg'
      },
      {
        name: 'Oubliette',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Black',
        supertype: 'Enchantment',
        effects: 'When Oubliette enters the battlefield, exile target creature until Oubliette leaves the battlefield.',
        art: 'http://mythicspoiler.com/arn/cards/oubliette.jpg'
      },
      {
        name: 'Sorceress Queen',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Sorceress',
        effects: '{T}: Target creature has base power and toughness 0/2 until end of turn.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/sorceressqueen.jpg'
      },
      {
        name: 'Stone-Throwing Devils',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Black',
        supertype: 'Summon Devils',
        effects: 'First strike',
        flavor: 'Sometimes those with the most sin cast the first stones.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/stonethrowingdevils.jpg'
      },
      {
        name: 'Aladdin',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Red',
        supertype: 'Summon Aladdin',
        effects: '{1RR}, {T}: Gain control of target artifact until Aladdin leaves the battlefield.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/aladdin.jpg'
      },
      {
        name: 'Ali Baba',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Red',
        supertype: 'Summon Ali Baba',
        effects: '{R}: Tap target Wall.',
        flavor: '"When he reached the entrance to the cavern, he pronounced the words, \'Open, Sesame!\'"\n--The Arabian Nights, Junior Classics translation',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/alibaba.jpg'
      },
      {
        name: 'Ali from Cairo',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Red',
        supertype: 'Summon Ali from Cairo',
        effects: 'Any damage that would reduce you to less than 1 life instead reduces you to 1 life instead.  Prevent the remaining damage.',
        power: '0',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/alifromcairo.jpg'
      },
      {
        name: 'Bird Maiden',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Bird Maiden',
        effects: 'Flying',
        flavor: '"Four things that never meet do here unite\nTo shed my blood and ravage my heart,\nA radiant brow and tresses that beguile\nAnd rosy cheeks and a glittering smile."\n--The Arabian Nights, trans. Haddaway',
        power: '1',
        toughness: '2',
        art: 'http://mythicspoiler.com/arn/cards/birdmaiden.jpg'
      },
      {
        name: 'Desert Nomads',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Nomads',
        effects: 'Desertwalk\nProtection from Deserts',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/arn/cards/desertnomads.jpg'
      },
      {
        name: 'Hurr Jackal',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Red',
        supertype: 'Summon Jackal',
        effects: '{T}: Target creature can\'t regenerate this turn.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/hurrjackal.jpg'
      },
      {
        name: 'Kird Ape',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Red',
        supertype: 'Summon Ape',
        effects: 'Kird Ape gets +1/+2 as long as you control a Forest.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/kirdape.jpg'
      },
      {
        name: 'Magnetic Mountain',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Red',
        supertype: 'Enchantment',
        effects: 'Blue creatures don\'t untap during their controller\'s untap step.  Those players may pay {1} to untap target blue creature during their untap step.',
        art: 'http://mythicspoiler.com/arn/cards/magneticmountain.jpg'
      },
      {
        name: 'Mijae Djinn',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Djinn',
        effects: 'Whenever Mijae Djinn attacks, flip a coin; target opponent calls heads or tails.  If that player wins the flip, Mijae Djinn is tapped and removed from combat.',
        power: '6',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/mijaedjinn.jpg'
      },
      {
        name: 'Rukh Egg',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Red',
        supertype: 'Summon Egg',
        effects: 'Whenever Rukh Egg dies, create a 4/4 red Rukh creature token with flying.',
        power: '0',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/rukhegg.jpg'
      },
      {
        name: 'Ydwen Efreet',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Efreet',
        effects: 'Whenever Ydwen Efreet blocks, flip a coin; target opponent calls heads or tails.  If that player wins the flip, Ydwen Efreet can\'t block this turn.',
        power: '3',
        toughness: '6',
        art: 'http://mythicspoiler.com/arn/cards/ydwenefreet.jpg'
      },
      {
        name: 'Cyclone',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Green',
        supertype: 'Enchantment',
        effects: 'At the beginning of your upkeep, put a destruction counter on Cyclone.  You may pay {G} for each destruction counter on Cyclone.  If you do, Cyclone deals 1 damage to each creature and player for each destruction counter on it.  If you don\'t, sacrifice Cyclone.',
        art: 'http://mythicspoiler.com/arn/cards/cyclone.jpg'
      },
      {
        name: 'Desert Twister',
        set: 'Arabian Nights',
        cost: '6',
        color: 'Green',
        supertype: 'Sorcery',
        effects: 'Destroy target permanent.',
        art: 'http://mythicspoiler.com/arn/cards/deserttwister.jpg'
      },
      {
        name: 'Drop of Honey',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Green',
        supertype: 'Enchantment',
        effects: 'At the beginning of your upkeep, destroy target creature with the lowest power.  If there is a tie for lowest power, you choose which to destroy.\nIf there are no creatures in play, sacrifice Drop of Honey.',
        art: 'http://mythicspoiler.com/arn/cards/dropofhoney.jpg'
      },
      {
        name: 'Erhnam Djinn',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Green',
        supertype: 'Summon Djinn',
        effects: 'At the beginning of your upkeep, target creature an opponent controls gains forestwalk until your next turn.',
        power: '4',
        toughness: '5',
        art: 'http://mythicspoiler.com/arn/cards/erhnamdjinn.jpg'
      },
      {
        name: 'Ghazban Ogre',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Green',
        supertype: 'Summon Ogre',
        effects: 'At the beginning of your upkeep, the player with the highest life total gains control of Ghazban Ogre',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/arn/cards/ghazbanogre.jpg'
      },
      {
        name: 'Ifh-Biff Efreet',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Green',
        supertype: 'Summon Efreet',
        effects: 'Flying\nAny player may pay {G}.  If a player does, Ifh-Biff Efreet deals 1 damage to each player and each creature with flying.',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/ifhbiffefreet.jpg'
      },
      {
        name: 'Metamorphosis',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Green',
        supertype: 'Sorcery',
        effects: 'As an additional cost to cast Metamorphosis, sacrifice a creature.\nAdd mana of any one color to your mana pool equal to the converted mana cost of the sacrificed creature plus 1.  Use this mana only to cast creature spells.',
        art: 'http://mythicspoiler.com/arn/cards/metamorphosis.jpg'
      },
      {
        name: 'Nafs Asp',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Green',
        supertype: 'Summon Asp',
        effects: 'Whenever Nafs Asp deals combat damage to a player, that player must pay {1} at the beginning of their next upkeep or lose 1 life.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/nafsasp.jpg'
      },
      {
        name: 'Sandstorm',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Green',
        supertype: 'Instant',
        effects: 'Sandstorm deals 1 damage to each attacking creature.',
        flavor: 'Even the landscape turned against Sarsour, first rising up and pelting him, then rearranging itself so he could no longer find his way.',
        art: 'http://mythicspoiler.com/arn/cards/sandstorm.jpg'
      },
      {
        name: 'Singing Tree',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Green',
        supertype: 'Summon Singing Tree',
        effects: '{T}: Target attacking creature\'s base power becomes 0 until end of turn.',
        power: '0',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/singingtree.jpg'
      },
      {
        name: 'Wyluli Wolf',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Green',
        supertype: 'Summon Wolf',
        effects: '{T}: Target creature gets +1/+1 until end of turn.',
        flavor: '"When one wolf calls, others follow.  Who wants to fight creatures that eat scorpions?"\n--Maimun al-Wyluli, diary',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/arn/cards/wyluliwolf.jpg'
      },
      {
        name: 'Aladdin\'s Lamp',
        set: 'Arabian Nights',
        cost: '10',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{X}: Look at the top X cards of your library.  Put one of them into your hand and the rest on the bottom of your library in a random order.',
        art: 'http://mythicspoiler.com/arn/cards/aladdinslamp.jpg'
      },
      {
        name: 'Aladdin\'s Ring',
        set: 'Arabian Nights',
        cost: '8',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{8}: Aladdin\'s Ring deals 4 damage to any target.',
        flavor: '"After these words the magician drew a ring off his finger and put it on Aladdin\'s, saying: \'It is a talisman against all evil, so long as you obey me.\'"\n--The Arabian Nights, Junior Classics translation',
        art: 'http://mythicspoiler.com/arn/cards/aladdinsring.jpg'
      },
      {
        name: 'Bottle of Suleiman',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{4}, Sacrifice Bottle of Suleiman: Flip a coin, with target opponent calling the flip.  If that player chooses correctly, Bottle of Suleiman deals 5 damage to you.  Otherwise, create a colorless 5/5 Djinn artifact creature token with flying.',
        art: 'http://mythicspoiler.com/arn/cards/bottleofsuleiman.jpg'
      },
      {
        name: 'Brass Man',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Brass Man does not untap during your untap step.\nAt the beginning of your upkeep, you may pay {1}.  If you do, untap Brass Man.',
        power: '1',
        toughness: '3',
        art: 'http://mythicspoiler.com/arn/cards/brassman.jpg'
      },
      {
        name: 'City in a Bottle',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Exile all cards from Arabian Nights, except for City in a Bottle.  While City in a Bottle is in play, all cards from Arabian Nights are exiled.',
        art: 'http://mythicspoiler.com/arn/cards/cityinabottle.jpg'
      },
      {
        name: 'Dancing Scimitar',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Flying',
        flavor: 'Bobbing merrily from opponent to opponent, the scimitar began adding playful little flourishes to its strokes; it even turned a couple of somersaults.',
        power: '1',
        toughness: '5',
        art: 'http://mythicspoiler.com/arn/cards/dancingscimitar.jpg'
      },
      {
        name: 'Ebony Horse',
        set: 'Arabian Nights',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Untap target attacking creature you control and remove it from combat.  All creatures blocking it may not block another creature.',
        art: 'http://mythicspoiler.com/arn/cards/ebonyhorse.jpg'
      },
      {
        name: 'Flying Carpet',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Target creature gains flying until end of turn.  If that creature would die this turn, sacrifice Flying Carpet.',
        art: 'http://mythicspoiler.com/arn/cards/flyingcarpet.jpg'
      },
      {
        name: 'Jandor\'s Ring',
        set: 'Arabian Nights',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Discard a card, then draw a card.',
        art: 'http://mythicspoiler.com/arn/cards/jandorsring.jpg'
      },
      {
        name: 'Jandor\'s Saddlebags',
        set: 'Arabian Nights',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{3}: Untap target creature.',
        flavor: 'Each day of their journey, Jandor opened the saddlebags and found them full of mutton, quinces, cheese, date rolls, wine, and all manner of delicious and satisfying foods.',
        art: 'http://mythicspoiler.com/arn/cards/jandorssaddlebags.jpg'
      },
      {
        name: 'Jeweled Bird',
        set: 'Arabian Nights',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Draw a card and exchange Jeweled Bird with your contribution to the ante.  Your former contribution goes to your graveyard.',
        art: 'http://mythicspoiler.com/arn/cards/jeweledbird.jpg'
      },
      {
        name: 'Pyramids',
        set: 'Arabian Nights',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Choose one:\n\t* Counter target spell that targets a land you control.\n\t* Destroy target enchantment that is attached to any land.',
        art: 'http://mythicspoiler.com/arn/cards/pyramids.jpg'
      },
      {
        name: 'Ring of Ma\'Ruf',
        set: 'Arabian Nights',
        cost: '5',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{5}: Choose a card you own from outside the game and put that card into your hand.  Exile Ring of Ma\'Ruf.',
        art: 'http://mythicspoiler.com/arn/cards/ringofmaruf.jpg'
      },
      {
        name: 'Sandals of Abdallah',
        set: 'Arabian Nights',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Target creature gains islandwalk until end of turn.  If that creature would die this turn, sacrifice Sandals of Abdallah.',
        art: 'http://mythicspoiler.com/arn/cards/sandalsof.jpg'
      },
      {
        name: 'Bazaar of Baghdad',
        set: 'Arabian Nights',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Draw two cards, then discard three cards.',
        art: 'http://mythicspoiler.com/arn/cards/bazaarofbaghdad.jpg'
      },
      {
        name: 'Desert',
        set: 'Arabian Nights',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Add {1}.\n{T}: Desert deals 1 damage to target attacking creature.',
        art: 'http://mythicspoiler.com/arn/cards/desert.jpg'
      },
      {
        name: 'Diamond Valley',
        set: 'Arabian Nights',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}, Sacrifice a creature: You gain life equal to the sacrificed creature\'s toughness.',
        art: 'http://mythicspoiler.com/arn/cards/diamondvalley.jpg'
      },
      {
        name: 'Elephant Graveyard',
        set: 'Arabian Nights',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Add {1}.\n{T}: Regenerate target Elephant or Mammoth.',
        art: 'http://mythicspoiler.com/arn/cards/elephantgraveyard.jpg'
      },
      {
        name: 'Island of Wak-Wak',
        set: 'Arabian Nights',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Target flying creature\'s power becomes 0.',
        flavor: 'The Isle of Wak-Wak, home to a tribe of winged folk, is named for a peculiar fruit that grows there.  The fruit looks like a woman\'s head, and when ripe speaks the word "Wak."',
        art: 'http://mythicspoiler.com/arn/cards/islandofwakwak.jpg'
      },
      {
        name: 'Library of Alexandria',
        set: 'Arabian Nights',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Add {1}.\n{T}: Draw a card.  Activate this ability only if you have seven cards in hand.',
        art: 'http://mythicspoiler.com/arn/cards/libraryofalexandria.jpg'
      },
      {
        name: 'Oasis',
        set: 'Arabian Nights',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Prevent 1 damage dealt to target creature.',
        art: 'http://mythicspoiler.com/arn/cards/oasis.jpg'
      }
    ]);
  });
}