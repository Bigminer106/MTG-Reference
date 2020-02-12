exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Card_List').del()
  .then(function () {
    // Inserts seed entries
    return knex('Card_List').insert([
      {
        name: 'Argivian Archaeologist',
        set: 'Antiquities',
        cost: '3',
        color: 'White',
        supertype: 'Summon Archaeologist',
        effects: '{WW}, {T}: Return target artifact card from your graveyard to your hand.',
        flavor: 'Fascinated by the lore of ancient struggles, the Archaeologist searches incessantly for remnants of an earlier, more powerful era.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/argivianarchaeologist.jpg'
      },
      {
        name: 'Argivian Blacksmith',
        set: 'Antiquities',
        cost: '3',
        color: 'White',
        supertype: 'Summon Smith',
        effects: '{T}: Prevent up to 2 damage to target artifact creature.',
        flavor: 'Through years of study and training, the Blacksmiths of Argive became adept at reassembling the mangled remains of the strange, mechanical creatures abounding in their native land.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/atq/cards/argivianblacksmith.jpg'
      },
      {
        name: 'Artifact Ward',
        set: 'Antiquities',
        cost: '1',
        color: 'White',
        supertype: 'Enchant Creature',
        effects: 'Enchanted creature has protection from artifacts.',
        art: 'http://mythicspoiler.com/atq/cards/artifactward.jpg'
      },
      {
        name: 'Circle of Protection: Artifacts',
        set: 'Antiquities',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        effects: '{2}: Prevent all damage dealt to you from one artifact source.  If further sources deal damage to you, you must pay {2} for each to prevent their damage.',
        art: 'http://mythicspoiler.com/atq/cards/circleofprotectionartifacts.jpg'
      },
      {
        name: 'Damping Field',
        set: 'Antiquities',
        cost: '3',
        color: 'White',
        supertype: 'Enchantment',
        effects: 'Players can\'t untap more than one artifact during each of their untap steps.',
        flavor: 'Eventually, mages learned to harness the power of natural damping fields and use it for their own ends.',
        art: 'http://mythicspoiler.com/atq/cards/dampingfield.jpg'
      },
      {
        name: 'Martyrs of Korlis',
        set: 'Antiquities',
        cost: '5',
        color: 'White',
        supertype: 'Summon Bodyguard',
        effects: 'While Martyrs of Korlis is untapped, any damage dealt to you by artifact sources is applied to Martyrs of Korlis instead.  Only one Bodyguard of your choice can take damage for you in this way each turn.',
        power: '1',
        toughness: '6',
        art: 'http://mythicspoiler.com/atq/cards/martyrsofkorlis.jpg'
      },
      {
        name: 'Reverse Polarity',
        set: 'Antiquities',
        cost: '2',
        color: 'White',
        supertype: 'Instant',
        effects: 'All damage dealt to you this turn by artifact sources is retroactively added to your life total instead of subtracted.  Any further damage applied to you this turn still subtracts from your life total normally.',
        art: 'http://mythicspoiler.com/atq/cards/reversepolarity.jpg'
      },
      {
        name: 'Drafna\'s Restoration',
        set: 'Antiquities',
        cost: '1',
        color: 'Blue',
        supertype: 'Sorcery',
        effects: 'Return any number of artifacts from target player\'s graveyard to the top of that player\'s library in any order.',
        flavor: 'Drafna, founder of the College of Lat-Nam, could create a working model from even the smallest remnants of a newly unearthed artifact.',
        art: 'http://mythicspoiler.com/atq/cards/drafnasrestoration.jpg'
      },
      {
        name: 'Energy Flux',
        set: 'Antiquities',
        cost: '3',
        color: 'Blue',
        supertype: 'Enchantment',
        effects: 'All artifacts have an upkeep cost of {2} in addition to any other upkeep costs.  If the upkeep cost for an artifact is not paid, sacrifice that artifact.',
        art: 'http://mythicspoiler.com/atq/cards/energyflux.jpg'
      },
      {
        name: 'Hurkyl\'s Recall',
        set: 'Antiquities',
        cost: '2',
        color: 'Blue',
        supertype: 'Instant',
        effects: 'Return all artifacts target player controls to that player\'s hand.',
        flavor: 'This spell, attributed to Drafna, was actually the work of his wife Hurkyl.',
        art: 'http://mythicspoiler.com/atq/cards/hurkylsrecall.jpg'
      },
      {
        name: 'Power Artifact',
        set: 'Antiquities',
        cost: '2',
        color: 'Blue',
        supertype: 'Enchant Artifact',
        effects: 'The activation costs of all abilities of enchanted artifact are reduced by {2}.  This effect cannot reduce the activation cost below {1}.',
        art: 'http://mythicspoiler.com/atq/cards/powerartifact.jpg'
      },
      {
        name: 'Reconstruction',
        set: 'Antiquities',
        cost: '1',
        color: 'Blue',
        supertype: 'Sorcery',
        effects: 'Return target artifact card from your graveyard to your hand.',
        flavor: 'Tedious research made the Sages of the College of Lat-Nam adept in repairing broken artifacts.',
        art: 'http://mythicspoiler.com/atq/cards/reconstruction.jpg'
      },
      {
        name: 'Sage of Lat-Nam',
        set: 'Antiquities',
        cost: '2',
        color: 'Blue',
        supertype: 'Summon Sage',
        effects: '{T}: Draw a card, then sacrifice an artifact.',
        power: '1',
        toughness: '2',
        art: 'http://mythicspoiler.com/atq/cards/sageoflatnam.jpg'
      },
      {
        name: 'Transmute Artifact',
        set: 'Antiquities',
        cost: '2',
        color: 'Blue',
        supertype: 'Sorcery',
        effects: 'Search your library for an artifact card and put it onto the battlefield, then sacrifice an artifact.  If the new artifact has a higher converted mana cost than the sacrificed one, you must pay the difference or sacrifice the new artifact.  Then shuffle your library.',
        art: 'http://mythicspoiler.com/atq/cards/transmuteartifact.jpg'
      },
      {
        name: 'Artifact Possession',
        set: 'Antiquities',
        cost: '3',
        color: 'Black',
        supertype: 'Enchant Artifact',
        effects: 'Whenever enchanted artifact becomes tapped or its activation cost(s) paid, Artifact Possession deals 2 damage to that artifact\'s controller.',
        flavor: 'Any black mage could coax a Thraxodemon to inhabit a magical device.',
        art: 'http://mythicspoiler.com/atq/cards/artifactpossession.jpg'
      },
      {
        name: 'Gate to Phyrexia',
        set: 'Antiquities',
        cost: '2',
        color: 'Black',
        supertype: 'Enchantment',
        effects: 'At the beginning of your upkeep, sacrifice a creature.  When you do, destroy target artifact.',
        flavor: '"The warm rain of grease on my face immediately made it clear I had entered Phyrexia."\n--Jarsyl, diary',
        art: 'http://mythicspoiler.com/atq/cards/gatetophyrexia.jpg'
      },
      {
        name: 'Haunting Wind',
        set: 'Antiquities',
        cost: '4',
        color: 'Black',
        supertype: 'Enchantment',
        effects: 'Whenever an artifact becomes tapped or its activation cost(s) paid, Haunting Wind deals 1 damage to that artifact\'s controller.',
        flavor: 'These devices lured so many spirits that sometimes entire battlefields would become haunted at once.',
        art: 'http://mythicspoiler.com/atq/cards/hauntingwind.jpg'
      },
      {
        name: 'Phyrexian Gremlins',
        set: 'Antiquities',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Gremlins',
        effects: 'You may choose not to untap Phyrexian Gremlins during your untap step.\n{T}: Tap target artifact.  For as long as Phyrexian Gremlins remains tapped, that artifact doesn\'t untap during its controller\'s untap step.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/phyrexiangremlins.jpg'
      },
      {
        name: 'Priest of Yawgmoth',
        set: 'Antiquities',
        cost: '2',
        color: 'Black',
        supertype: 'Summon Cleric',
        effects: '{T}, Sacrifice an artifact: Add a number of {B} to your mana pool equal to the converted mana cost of the sacrificed artifact.',
        power: '1',
        toughness: '2',
        art: 'http://mythicspoiler.com/atq/cards/priestofyawgmoth.jpg'
      },
      {
        name: 'Xenic Poltergeist',
        set: 'Antiquities',
        cost: '3',
        color: 'Black',
        supertype: 'Summon Poltergeist',
        effects: '{T}: Until your next turn, target noncreature artifact becomes an artifact creature with power and toughness each equal to its converted mana cost.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/xenicpoltergeist.jpg'
      },
      {
        name: 'Yawgmoth Demon',
        set: 'Antiquities',
        cost: '6',
        color: 'Black',
        supertype: 'Summon Demon',
        effects: 'Flying, first strike\nAt the beginning of your upkeep, sacrifice an artifact.  If you can\'t, tap Yawgmoth Demon and it deals 2 damage to you.',
        power: '6',
        toughness: '6',
        art: 'http://mythicspoiler.com/atq/cards/yawgmothdemon.jpg'
      },
      {
        name: 'Artifact Blast',
        set: 'Antiquities',
        cost: '1',
        color: 'Red',
        supertype: 'Interrupt',
        effects: 'Counter target artifact spell.',
        flavor: 'The first line of defense against Urza and Mishra, the Artifact Blast achieved widespread fame until an unlucky mage discovered it was useless on the devices the brothers had already created.',
        art: 'http://mythicspoiler.com/atq/cards/artifactblast.jpg'
      },
      {
        name: 'Atog',
        set: 'Antiquities',
        cost: '2',
        color: 'Red',
        supertype: 'Summon Atog',
        effects: 'Sacrifice an artifact: Atog gets +2/+2 until end of turn.',
        power: '1',
        toughness: '2',
        art: 'http://mythicspoiler.com/atq/cards/atog.jpg'
      },
      {
        name: 'Detonate',
        set: 'Antiquities',
        cost: '2+',
        color: 'Red',
        supertype: 'Sorcery',
        effects: 'Destroy target artifact with converted mana cost X.  Detonate deals X damage to that artifact\'s controller.',
        art: 'http://mythicspoiler.com/atq/cards/detonate.jpg'
      },
      {
        name: 'Dwarven Weaponsmith',
        set: 'Antiquities',
        cost: '2',
        color: 'Red',
        supertype: 'Summon Dwarves',
        effects: 'At the beginning of your upkeep, you may sacrifice an artifact and tap Dwarven Weaponsmith.  If you do, put a +1/+1 counter on target creature.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/dwarvenweaponsmith.jpg'
      },
      {
        name: 'Goblin Artisans',
        set: 'Antiquities',
        cost: '1',
        color: 'Red',
        supertype: 'Summon Goblins',
        effects: 'Whenever you cast an artifact spell, you may tap Goblin Artisans.  If you do, target opponent flips a coin.  If that player wins the flip, your artifact spell is countered.  Otherwise, you draw a card.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/goblinartisans.jpg'
      },
      {
        name: 'Orcish Mechanics',
        set: 'Antiquities',
        cost: '3',
        color: 'Red',
        supertype: 'Summon Orcs',
        effects: '{T}, Sacrifice an artifact: Orcish Mechanics deals 2 damage to any target.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/orcishmechanics.jpg'
      },
      {
        name: 'Shatterstorm',
        set: 'Antiquities',
        cost: '4',
        color: 'Red',
        supertype: 'Sorcery',
        effects: 'Destroy all artifacts.',
        flavor: 'Chains of leaping fire and sizzling lightning laid waste to the artificers\' handiwork, sparing not a single device.',
        art: 'http://mythicspoiler.com/atq/cards/shatterstorm.jpg'
      },
      {
        name: 'Argothian Pixies',
        set: 'Antiquities',
        cost: '2',
        color: 'Green',
        supertype: 'Summon Faeries',
        effects: 'Protection from artifacts',
        flavor: 'After the rape of Argoth Forest during the rule of the artificers, the Pixies of Argoth bent their magic to more practical ends.',
        power: '2',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/argothianpixies.jpg'
      },
      {
        name: 'Argothian Treefolk',
        set: 'Antiquities',
        cost: '5',
        color: 'Green',
        supertype: 'Summon Treefolk',
        effects: 'Prevent all damage dealt to Argothian Treefolk from artifact sources.',
        flavor: 'Haunting cries we hear in our dreams\nAs the forest dies, a death from machines',
        power: '3',
        toughness: '5',
        art: 'http://mythicspoiler.com/atq/cards/argothiantreefolk.jpg'
      },
      {
        name: 'Citanul Druid',
        set: 'Antiquities',
        cost: '2',
        color: 'Green',
        supertype: 'Summon Druid',
        effects: 'Whenever an opponent casts an artifact spell, put a +1/+1 counter on Citanul Druid.',
        flavor: 'Driven mad by the fall of Argoth, the Citanul Druids found peace only in battle.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/citanuldruid.jpg'
      },
      {
        name: 'Crumble',
        set: 'Antiquities',
        cost: '1',
        color: 'Green',
        supertype: 'Instant',
        effects: 'Destroy target artifact.  Its controller gains life equal to its converted mana cost.',
        flavor: 'The spirits of Argoth grant new life to those who repent the folly of enslaving their labors to devices.',
        art: 'http://mythicspoiler.com/atq/cards/crumble.jpg'
      },
      {
        name: 'Gaea\'s Avenger',
        set: 'Antiquities',
        cost: '3',
        color: 'Green',
        supertype: 'Summon Gaea\'s Avenger',
        effects: 'Gaea\'s Avenger\'s power and toughness are each equal to the number of artifacts your opponents control plus 1.',
        flavor: 'After the destruction of Argoth, Gaea was willing to instill a portion of her own powers into some of her more vengeful followers.',
        power: '*+1',
        toughness: '*+1',
        art: 'http://mythicspoiler.com/atq/cards/gaeasavenger.jpg'
      },
      {
        name: 'Powerleech',
        set: 'Antiquities',
        cost: '2',
        color: 'Green',
        supertype: 'Enchantment',
        effects: 'Whenever an artifact an opponent controls becomes tapped, or that player pays its activation cost(s), you gain 1 life.',
        flavor: 'The Forest of Argoth has developed a resistance to mechanical intrusion.',
        art: 'http://mythicspoiler.com/atq/cards/powerleech.jpg'
      },
      {
        name: 'Titania\'s Song',
        set: 'Antiquities',
        cost: '4',
        color: 'Green',
        supertype: 'Enchantment',
        effects: 'All noncreature artifacts in play become artifact creatures with power and toughness equal to their converted mana costs.  They lose all other abilities.',
        art: 'http://mythicspoiler.com/atq/cards/titaniassong.jpg'
      },
      {
        name: 'Amulet of Kroog',
        set: 'Antiquities',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Prevent 1 damage to any target.',
        flavor: 'Among the first allies Urza gained were the people of Kroog.  As a sign of friendship, Urza gave the healers of the city potent amulets; afterwards, thousands journeyed to Kroog in hope of healing, greatly adding to the city\'s glory.',
        art: 'http://mythicspoiler.com/atq/cards/amuletofkroog.jpg'
      },
      {
        name: 'Armageddon Clock',
        set: 'Antiquities',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'At the beginning of your upkeep, put a time counter on Armageddon Clock, then each player takes damage equal to the number of time counters on Armageddon Clock.  Any player may pay {4} at the beginning of their upkeep to remove a counter from Armageddon Clock.',
        art: 'http://mythicspoiler.com/atq/cards/armageddonclock.jpg'
      },
      {
        name: 'Ashnod\'s Altar',
        set: 'Antiquities',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Sacrifice a creature: Add {2}.',
        art: 'http://mythicspoiler.com/atq/cards/ashnodsaltar.jpg'
      },
      {
        name: 'Ashnod\'s Battle Gear',
        set: 'Antiquities',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'You may choose not to untap Ashnod\'s Battle Gear during your untap step.\n{2}, {T}: Target creature you control gets +2/-2 for as long as Ashnod\'s Battle Gear remains tapped.',
        flavor: 'This horrid invention clearly illustrates why Mishra\'s lieutenant was feared as much by her troops as by her foes.',
        art: 'http://mythicspoiler.com/atq/cards/ashnodsbattlegear.jpg'
      },
      {
        name: 'Ashnod\'s Transmogrant',
        set: 'Antiquities',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Sacrifice Ashnod\'s Transmogrant: Put a +1/+1 counter on target nonartifact creature.  It becomes an artifact creature in addition to its other types.',
        flavor: 'Ashnod found few willing to trade their humanity for the power she offered them.',
        art: 'http://mythicspoiler.com/atq/cards/ashnodstransmogrant.jpg'
      },
      {
        name: 'Battering Ram',
        set: 'Antiquities',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Bands when attacking\nWhenever Battering Ram becomes blocked by a Wall, destroy that creature at end of combat.',
        flavor: 'By the time Mishra was defeated, no mage was foolish enough to rely heavily on walls.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/batteringram.jpg'
      },
      {
        name: 'Bronze Tablet',
        set: 'Antiquities',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Bronze Tablet enters the battlefield tapped.\n{4}: Exchange control of Bronze Tablet and target permanent an opponent controls.  That opponent may counter this effect by paying 10 life.  If that player does, sacrifice Bronze Tablet.',
        art: 'http://mythicspoiler.com/atq/cards/bronzetablet.jpg'
      },
      {
        name: 'Candelabra of Tawnos',
        set: 'Antiquities',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{X}: Untap X lands.',
        flavor: 'Tawnos learned quickly from Urza that utter simplicity often lead to wondrous, yet subtle utility.',
        art: 'http://mythicspoiler.com/atq/cards/candelabraoftawnos.jpg'
      },
      {
        name: 'Clay Statue',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: '{2}: Regenerate Clay Statue.',
        flavor: 'Tawnos won fame as Urza\'s greatest assistant.  After he created these warriors, Urza ended his apprenticeship, promoting him directly to the rank of master.',
        power: '3',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/claystatue.jpg'
      },
      {
        name: 'Clockwork Avian',
        set: 'Antiquities',
        cost: '5',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Clockwork Avian enters the battlefield with four +1/+0 counters on it.\nFlying\nWhenever Clockwork Avian attacks or blocks, remove a +1/+0 counter.  Lost counters may be replaced by paying {1} for each counter.  If you do this, tap Clockwork Avian.',
        power: '0',
        toughness: '4',
        art: 'http://mythicspoiler.com/atq/cards/clockworkavian.jpg'
      },
      {
        name: 'Colossus of Sardia',
        set: 'Antiquities',
        cost: '9',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Trample\nColossus of Sardia doesn\'t untap during your untap step.\nYou may pay {9} during your upkeep to untap Colossus of Sardia.',
        flavor: 'From the Sardian Mountains wakes ancient doom:\nWarrior born from a rocky womb',
        power: '9',
        toughness: '9',
        art: 'http://mythicspoiler.com/atq/cards/colossusofsardia.jpg'
      },
      {
        name: 'Coral Helm',
        set: 'Antiquities',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{3}, Discard a card at random: Target creature gets +2/+2 until end of turn.  Activate this ability only if you have at least one card in hand.',
        art: 'http://mythicspoiler.com/atq/cards/coralhelm.jpg'
      },
      {
        name: 'Cursed Rack',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Maximum hand size for all opponents is reduced to four.',
        flavor: 'Ashnod invented several torture techniques that could make victims even miles away beg for mercy as if the End had come.',
        art: 'http://mythicspoiler.com/atq/cards/cursedrack.jpg'
      },
      {
        name: 'Dragon Engine',
        set: 'Antiquities',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: '{2}: Dragon Engine gets +1/+0 until end of turn.',
        flavor: 'Those who believed the city of Kroog would never fall to Mishra\'s forces severely underestimated the might of his war machines.',
        power: '1',
        toughness: '3',
        art: 'http://mythicspoiler.com/atq/cards/dragonengine.jpg'
      },
      {
        name: 'Feldon\'s Cane',
        set: 'Antiquities',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Exile Feldon\'s Cane: Shuffle your graveyard into your library.',
        flavor: 'Feldon found the first of these canes frozen in the Ronom Glacier.',
        art: 'http://mythicspoiler.com/atq/cards/feldonscane.jpg'
      },
      {
        name: 'Golgothian Sylex',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{1}: Exile all cards from the Antiquities expansion.',
        flavor: 'From their earliest educations, the brothers had known that no human contrivance could stand against the true masters of Dominaria.',
        art: 'http://mythicspoiler.com/atq/cards/golgothiansylex.jpg'
      },
      {
        name: 'Grapeshot Catapult',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: '{T}: Grapeshot Catapult deals 1 damage to target creature with flying.',
        flavor: 'For years, scholars debated whether these were Urza\'s or Mishra\'s creations.  Recent research suggests that they were invented by the brothers\' original master, Tocasia, and that both used these devices.',
        power: '2',
        toughness: '3',
        art: 'http://mythicspoiler.com/atq/cards/grapeshotcatapult.jpg'
      },
      {
        name: 'Ivory Tower',
        set: 'Antiquities',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'At the beginning of your upkeep, you gain 1 life for each card in your hand above four.',
        flavor: 'Valuing scholarship above all else, the inhabitants of the Ivory Tower reward those who sacrifice power for knowledge.',
        art: 'http://mythicspoiler.com/atq/cards/ivorytower.jpg'
      },
      {
        name: 'Jalum Tome',
        set: 'Antiquities',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Draw a card, then discard a card.',
        flavor: 'This timeworn relic was responsible for many of Urza\'s victories, though he never fully comprehended its mystical runes.',
        art: 'http://mythicspoiler.com/atq/cards/jalumtome.jpg'
      },
      {
        name: 'Millstone',
        set: 'Antiquities',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Target player puts the top two cards of their library into their graveyard.',
        flavor: 'More than one mage was driven insane by the sound of the Millstone relentlessly grinding away.',
        art: 'http://mythicspoiler.com/atq/cards/millstone.jpg'
      },
      {
        name: 'Mishra\'s War Machine',
        set: 'Antiquities',
        cost: '7',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Bands\nAt the beginning of your upkeep, discard a card.  If you can\'t, tap Mishra\'s War Machine and it deals 3 damage to you.',
        power: '5',
        toughness: '5',
        art: 'http://mythicspoiler.com/atq/cards/mishraswarmachine.jpg'
      },
      {
        name: 'Obelisk of Undoing',
        set: 'Antiquities',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{6}: Return any number of nonland permanents you control to your hand.',
        flavor: 'The Battle of Tomakul taught Urza not to rely on fickle reinforcements.',
        art: 'http://mythicspoiler.com/atq/cards/obeliskofundoing.jpg'
      },
      {
        name: 'Onulet',
        set: 'Antiquities',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'When Onulet is put into the graveyard from the battlefield, its controller gains 2 life.',
        flavor: 'An early inspiration for Urza, Tocasia\'s Onulets contained magical essences that could be cannibalized after they stopped functioning.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/atq/cards/onulet.jpg'
      },
      {
        name: 'Ornithopter',
        set: 'Antiquities',
        cost: '0',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Flying',
        flavor: 'Many scholars believe that these creatures were the result of Urza\'s first attempt at mechanical life, perhaps in his early days as an apprentice to Tocasia.',
        power: '0',
        toughness: '2',
        art: 'http://mythicspoiler.com/atq/cards/ornithopter.jpg'
      },
      {
        name: 'Primal Clay',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'As Primal Clay enters the battlefield, choose one--\n\t* Primal Clay enters the battlefield as a 1/6 Wall with defender\n\t* Primal Clay enters the battlefield as a 3/3 creature\n\t* Primal Clay enters the battlefield as a 2/2 creature with flying\nPrimal Clay remains the chosen type until removed from the battlefield.',
        power: '*',
        toughness: '*',
        art: 'http://mythicspoiler.com/atq/cards/primalclay.jpg'
      },
      {
        name: 'Rakalite',
        set: 'Antiquities',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Prevent 1 damage dealt to any target.  Return Rakalite to your hand at the beginning of the next end step.',
        flavor: 'Urza was the first to understand that the war would not be lost for lack of power, but for lack of troops.',
        art: 'http://mythicspoiler.com/atq/cards/rakalite.jpg'
      },
      {
        name: 'Rocket Launcher',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Summoning Sickness\n{2}, Sacrifice Rocket Launcher: It deals 1 damage to any target.',
        flavor: 'What these devices lack in subtlety, they made up in strength.',
        art: 'http://mythicspoiler.com/atq/cards/rocketlauncher.jpg'
      },
      {
        name: 'Shapeshifter',
        set: 'Antiquities',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'You may choose Shapeshifter\'s power and toughness from 0 to 6 as it enters the battlefield.  You may change these at the beginning of your upkeep.',
        flavor: '"Born like a Phoenix from the Flame,\nBut neither Bulk nor Shape the same."\n--Jonathan Swift, "Vanbrug\'s House"',
        power: '*',
        toughness: '*',
        art: 'http://mythicspoiler.com/atq/cards/shapeshifter.jpg'
      },
      {
        name: 'Staff of Zegon',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{3}: Target creature gets -2/-0 until end of turn.',
        flavor: 'Though Mishra was impressed by the staves Ashnod had created for Zegon\'s defense, he understood they only hinted at her full potential.',
        art: 'http://mythicspoiler.com/atq/cards/staffofzegon.jpg'
      },
      {
        name: 'Su-Chi',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'When Su-Chi dies, add {4} to your mana pool.',
        flavor: 'Flawed copies of relics from the Thran Empire, the Su-Chi were inherently unstable, but provided useful knowledge for Tocasia\'s students.',
        power: '4',
        toughness: '4',
        art: 'http://mythicspoiler.com/atq/cards/suchi.jpg'
      },
      {
        name: 'Tablet of Epityr',
        set: 'Antiquities',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Whenever an artifact you control goes to the graveyard, you may pay {1}.  If you do, you gain 1 life.',
        flavor: 'Originally considered the work of Urza, this tablet was created by forgers seeking to imitate Urza\'s masterpieces.',
        art: 'http://mythicspoiler.com/atq/cards/tabletofepityr.jpg'
      },
      {
        name: 'Tawnos\'s Coffin',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'You may choose not to untap Tawnos\'s Coffin during your untap step.\n{3}, {T}: Exile target creature until Tawnos\'s Coffin untaps or leaves the battlefield.',
        art: 'http://mythicspoiler.com/atq/cards/tawnosscoffin.jpg'
      },
      {
        name: 'Tawnos\'s Wand',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: '{2}: Target creature with power 2 or less can\'t be blocked this turn.',
        art: 'http://mythicspoiler.com/atq/cards/tawnosswand.jpg'
      },
      {
        name: 'Tawnos\'s Weaponry',
        set: 'Antiquities',
        cost: '2',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'You may choose not to untap Tawnos\'s Weaponry during your untap step.\n{2}, {T}: Target creature gets +1/+1 for as long as Tawnos\'s Weaponry remains tapped.',
        flavor: 'When Urza\'s war machines became too costly, Tawnos\'s weaponry replaced them.',
        art: 'http://mythicspoiler.com/atq/cards/tawnossweaponry.jpg'
      },
      {
        name: 'Tetravus',
        set: 'Antiquities',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Flying\nTetravus enters the battlefield with three +1/+1 counters on it.\nAt the beginning of your upkeep, you may remove any number of +1/+1 counters from Tetravus.  These counters become 1/1 colorless Tetravite artifact creature tokens with flying.\nAt the beginning of your upkeep, you may exile any number of Tetravite creatures to put a +1/+1 counter on Tetravus for each Tetravite exiled this way.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/tetravus.jpg'
      },
      {
        name: 'The Rack',
        set: 'Antiquities',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'At the beginning of each opponent\'s upkeep, if that player has fewer than three cards in his or her hand, The Rack deals 1 damage to that player for each card below three.',
        flavor: 'Invented in Mishra\'s earlier days, The Rack was once his most feared creation.',
        art: 'http://mythicspoiler.com/atq/cards/therack.jpg'
      },
      {
        name: 'Triskelion',
        set: 'Antiquities',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Triskelion enters the battlefield with three +1/+1 counters on it.\nRemove a +1/+1 counter from Triskelion: It deals 1 damage to any target.',
        flavor: 'A brainchild of Tawnos, the Triskelion proved its versatility and usefulness in many of the later battles between the brothers.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/atq/cards/triskelion.jpg'
      },
      {
        name: 'Urza\'s Avenger',
        set: 'Antiquities',
        cost: '6',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: '{0}: Urza\'s Avenger gets -1/-1 and your choice of banding, flying, first strike, or trample until end of turn.',
        flavor: 'Unable to settle on just one design, Urza decided to create one versatile being.',
        power: '4',
        toughness: '4',
        art: 'http://mythicspoiler.com/atq/cards/urzasavenger.jpg'
      },
      {
        name: 'Urza\'s Chalice',
        set: 'Antiquities',
        cost: '1',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Any time a player casts an artifact spell, you may pay {1}.  If you do, you gain 1 life.',
        flavor: 'When sorely wounded or tired, Urza would often retreat to the workshops of his apprentices.  They were greatly amazed at how much better he looked each time he took a sip of water.',
        art: 'http://mythicspoiler.com/atq/cards/urzaschalice.jpg'
      },
      {
        name: 'Urza\'s Miter',
        set: 'Antiquities',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Whenever an artifact you control is destroyed, you may pay {3}.  If you do, draw a card.',
        art: 'http://mythicspoiler.com/atq/cards/urzasmiter.jpg'
      },
      {
        name: 'Wall of Spears',
        set: 'Antiquities',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'First strike, defender',
        flavor: 'Even the most conservative generals revised their tactics after the Battle of Sarinth, during which a handful of peasant-pikemen held off a trio of rampaging Craw Wurms.',
        power: '2',
        toughness: '3',
        art: 'http://mythicspoiler.com/atq/cards/wallofspears.jpg'
      },
      {
        name: 'Weakstone',
        set: 'Antiquities',
        cost: '4',
        color: 'Colorless',
        supertype: 'Artifact',
        effects: 'Attacking creatures get -1/-0.',
        flavor: 'During the brothers\' childhood, Tocasia took them to explore the sacred cave of Koilos.  There, in the Hall of Tagsin, Mishra discovered the mysterious Weakstone.',
        art: 'http://mythicspoiler.com/atq/cards/weakstone.jpg'
      },
      {
        name: 'Yotian Soldier',
        set: 'Antiquities',
        cost: '3',
        color: 'Colorless',
        supertype: 'Artifact Creature',
        effects: 'Vigilance',
        flavor: 'After Kroog was destroyed while most of its defenders were at his side, Urza vowed that none of his allies would ever need to fear for their own defense again, even when laying siege to a city far from their homes.',
        power: '1',
        toughness: '4',
        art: 'http://mythicspoiler.com/atq/cards/yotiansoldier.jpg'
      },
      {
        name: 'Mishra\'s Factory',
        set: 'Antiquities',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Choose one--\n\t* Add {1}.\n\t* Target Assembly-Worker gets +1/+1 until end of turn.\n{1}: Mishra\'s Factory becomes a 2/2 Assembly-Worker artifact creature until end of turn.  It\'s still a land.',
        art: 'http://mythicspoiler.com/atq/cards/mishrasfactory.jpg'
      },
      {
        name: 'Mishra\'s Workshop',
        set: 'Antiquities',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Add {3} to your mana pool.  This mana can only be used to cast artifact spells.',
        flavor: 'Though he eventually came to despise Tocasia, Mishra listened well to her lessons on clarity of purpose.  Unlike his brother, he focused his mind on a single goal.',
        art: 'http://mythicspoiler.com/atq/cards/mishrasworkshop.jpg'
      },
      {
        name: 'Strip Mine',
        set: 'Antiquities',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Choose one--\n\t* Add {1}.\n\t* Sacrifice Strip Mine and destroy target land.',
        flavor: 'Unlike previous conflicts, the war between Urza and Mishra made Dominaria itself a casualty of war.',
        art: 'http://mythicspoiler.com/atq/cards/stripmine.jpg'
      },
      {
        name: 'Urza\'s Mine',
        set: 'Antiquities',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Add {1}.  If you control Urza\'s Mine, Urza\'s Tower, and Urza\'s Power Plant, add {2} instead.',
        flavor: 'Mines became common as cities during the days of the artificers.',
        art: 'http://mythicspoiler.com/atq/cards/urzasmine.jpg'
      },
      {
        name: 'Urza\'s Power Plant',
        set: 'Antiquities',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Add {1}.  If you control Urza\'s Mine, Urza\'s Tower, and Urza\'s Power Plant, add {2} instead.',
        flavor: 'Artifact contruction required immense resources.',
        art: 'http://mythicspoiler.com/atq/cards/urzaspowerplant.jpg'
      },
      {
        name: 'Urza\'s Tower',
        set: 'Antiquities',
        color: 'Colorless',
        supertype: 'Land',
        effects: '{T}: Add {1}.  If you control Urza\'s Mine, Urza\'s Tower, and Urza\'s Power Plant, add {3} instead.',
        flavor: 'Urza always put Tocasia\'s lessons on resource-gathering to effective use.',
        art: 'http://mythicspoiler.com/atq/cards/urzastower.jpg'
      }
    ]);
  });
};