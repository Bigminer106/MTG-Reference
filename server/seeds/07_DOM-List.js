exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Card_List').del()
  .then(function () {
    // Inserts seed entries
    return knex('Card_List').insert([
      {
        name: 'Karn, Scion of Urza',
        set: 'Dominaria',
        cost: '4',
        color: 'Colorless',
        supertype: 'Legendary Planeswalker',
        subtype: 'Karn',
        rarity: 'Mythic',
        effects: '+1: Reveal the top two cards of your library.  An opponent chooses one of them.  Put that card into your hand and exile the other with a silver counter on it.\n-1: Put a card you own with a silver counter on it from exile into your hand.\n-2: Create a 0/0 colorless Construct artifact creature with "This creature gets +1/+1 for each artifact you control.',
        loyalty: '5',
        art: 'http://mythicspoiler.com/dom/cards/karnscionofurza2.jpg'
      },
      {
        name: 'Adamant Will',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Instant',
        rarity: 'Common',
        effects: 'Target creature gets +2/+2 and gains indestructible until end of turn. (Damage and effects that say "destroy" don\'t destroy it.)',
        flavor: 'The shield took a year to craft, a month to enchant, and a decade to master -- all for one glorious moment.',
        art: 'http://mythicspoiler.com/dom/cards/adamantwill.jpg'
      },
      {
        name: 'Aven Sentry',
        set: 'Dominaria',
        cost: '4',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Bird Soldier',
        rarity: 'Common',
        effects: 'Flying',
        flavor: '"My flock flew from a distant continent ruined by cataclysm and war.  Benalia gave us shelter to end our exodus."',
        power: '3',
        toughness: '2',
        art: 'http://mythicspoiler.com/dom/cards/avensentry.jpg'
      },
      {
        name: 'Baird, Steward of Argive',
        set: 'Dominaria',
        cost: '4',
        color: 'White',
        supertype: 'Legendary Creature',
        subtype: 'Human Soldier',
        rarity: 'Uncommon',
        effects: 'Vigilance\nCreatures can\'t attack you or a planeswalker you control unless their controller pays {1} for each of those creatures.',
        flavor: '"The walls of Argive were built by a peaceful dynastic union that has guarded us against war for fifteen centuries.  The lesson is clear."',
        power: '2',
        toughness: '4',
        art: 'http://mythicspoiler.com/dom/cards/bairdstewardofargive2.jpg'
      },
      {
        name: 'Benalish Honor Guard',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Knight',
        rarity: 'Common',
        effects: 'Benalish Honor Guard gets +1/+0 for each legendary creature you control.',
        flavor: '"The true measure of all heroes is not what they achieve, but what they inspire."\n--Triumph of Gerrard',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/dom/cards/benalishhonorguard1.jpg'
      },
      {
        name: 'Benalish Marshal',
        set: 'Dominaria',
        cost: '3',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Knight',
        rarity: 'Rare',
        effects: 'Other creatures you control get +1/+1.',
        flavor: '"Some aspire to climb the mountain of Honor.  The Benalish are born upon its peak, and from there ascend among the stars."\n--History of Benalia',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/dom/cards/benalishmarshal3.jpg'
      },
      {
        name: 'Blessed Light',
        set: 'Dominaria',
        cost: '5',
        color: 'White',
        supertype: 'Instant',
        rarity: 'Common',
        effects: 'Exile target artifact or enchantment.',
        flavor: 'Enchanted by mage-smiths and blessed by priests, Benalish windows let in light and cast out darkness.',
        art: 'http://mythicspoiler.com/dom/cards/blessedlight.jpg'
      },
      {
        name: 'Board the Weatherlight',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Sorcery',
        rarity: 'Uncommon',
        effects: 'Look at the top five cards of your library.  You may reveal a historic card from among them and put it into your hand.  Put the rest on the bottom of your library in a random order.  (Artifacts, legendaries, and Sagas are historic.)',
        flavor: 'A new gathering for a new age.',
        art: 'http://mythicspoiler.com/dom/cards/boardtheweatherlight.jpg'
      },
      {
        name: 'Call the Cavalry',
        set: 'Dominaria',
        cost: '4',
        color: 'White',
        supertype: 'Sorcery',
        rarity: 'Common',
        effects: 'Create two 2/2 white Knight creature tokens with vigilance.',
        flavor: 'Benalish citizens born under the same constellations share a star-clan.  Their loyalty to each other interlaces the Seven Houses.',
        art: 'http://mythicspoiler.com/dom/cards/callthecavalry.jpg'
      },
      {
        name: 'Charge',
        set: 'Dominaria',
        cost: '1',
        color: 'White',
        supertype: 'Instant',
        rarity: 'Common',
        effects: 'Creatures you control get +1/+1 until end of turn.',
        flavor: '"Honor rides before us.  All we have to do is catch up."\n--Danitha Capashen',
        art: 'http://mythicspoiler.com/dom/cards/charge1.jpg'
      },
      {
        name: 'D\'Avenant Trapper',
        set: 'Dominaria',
        cost: '3',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Archer',
        rarity: 'Common',
        effects: 'Whenever you cast a historic spell, tap target creature an opponent controls.  (Artifacts, legendaries, and Sagas are historic.)',
        flavor: '"Go swiftly, clever arrow, and teach\nThe philosophy of stillness."\n--D\'Avenant verse',
        power: '3',
        toughness: '2',
        art: 'http://mythicspoiler.com/dom/cards/davenanttrapper.jpg'
      },
      {
        name: 'Danitha Capashen, Paragon',
        set: 'Dominaria',
        cost: '3',
        color: 'White',
        supertype: 'Legendary Creature',
        subtype: 'Human Knight',
        rarity: 'Uncommon',
        effects: 'First strike, vigilance, lifelink\nAura and equipment spells you cast cost {1} less to cast.',
        flavor: '"I will protect the less fortunate.  I will love bravely.  I will face despair and fight on.  As a Capashen, I can do no less."',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/dom/cards/danithacapashenparagon1.jpg'
      },
      {
        name: 'Daring Archaeologist',
        set: 'Dominaria',
        cost: '4',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Artificer',
        rarity: 'Rare',
        effects: 'When Daring Archaeologist enters the battlefield, you may return target artifact card from your graveyard to your hand.\nWhenever you cast a historic spell, put a +1/+1 counter on Daring Archaeologist.  (Artifacts, legendaries, and Sagas are historic.)',
        power: '3',
        toughness: '3',
        art: 'http://mythicspoiler.com/dom/cards/daringarchaeologist1.jpg'
      },
      {
        name: 'Dauntless Bodyguard',
        set: 'Dominaria',
        cost: '1',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Knight',
        rarity: 'Uncommon',
        effects: 'When Dauntless Bodyguard enters the battlefield, choose another creature you control.\nSacrifice Dauntless Bodyguard: The chosen creature gains indestructible until end of turn.',
        flavor: 'The Benalish aristocracy is hereditary, but the loyalty of its subjects is earned.',
        power: '2',
        toughness: '1',
        art: 'http://mythicspoiler.com/dom/cards/dauntlessbodyguard1.jpg'
      },
      {
        name: 'Dub',
        set: 'Dominaria',
        cost: '3',
        color: 'White',
        supertype: 'Enchantment',
        subtype: 'Aura',
        rarity: 'Common',
        effects: 'Enchanted creature gets +2/+2, has first strike, and is a Knight in addition to its other types.',
        flavor: '"Rise, knight of New Benalia."',
        art: 'http://mythicspoiler.com/dom/cards/dub1.jpg'
      },
      {
        name: 'Evra, Halcyon Witness',
        set: 'Dominaria',
        cost: '6',
        color: 'White',
        supertype: 'Legendary Creature',
        subtype: 'Avatar',
        rarity: 'Rare',
        effects: 'Lifelink\n{4}: Exchange your life total with Evra, Halcyon Witness\'s power.',
        flavor: '"Light from the Null Moon took form--a mirage made real, alone in grandeur, isolated in a world that once had been its own."\n--Fall of the Thran',
        power: '4',
        toughness: '4',
        art: 'http://mythicspoiler.com/dom/cards/evrahalcyonwitness1.jpg'
      },
      {
        name: 'Excavation Elephant',
        set: 'Dominaria',
        cost: '5',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Elephant',
        rarity: 'Common',
        effects: 'Kicker {1W} (You may pay an additional {1W} as you cast this spell.)\nWhen Excavation Elephant enters the battlefield, if it was kicked, return target artifact card from your graveyard to your hand.',
        power: '3',
        toughness: '5',
        art: 'http://mythicspoiler.com/dom/cards/excavationelephant.jpg'
      },
      {
        name: 'Fall of the Thran',
        set: 'Dominaria',
        cost: '6',
        color: 'White',
        supertype: 'Enchantment',
        subtype: 'Saga',
        rarity: 'Rare',
        effects: '(As this Saga enters and after your draw step, add a lore counter.  Sacrifice after III.)\nI: Destroy all lands.\nII & III: Each player returns two lands from their graveyard to the battlefield.',
        art: 'http://mythicspoiler.com/dom/cards/fallofthethran.jpg'
      },
      {
        name: 'Gideon\'s Reproach',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Instant',
        rarity: 'Common',
        effects: 'Gideon\'s Reproach deals 4 damage to target attacking or blocking creature.',
        flavor: 'On Amonkhet, Gideon lost both his sural and his faith in himself.  But he can still throw a punch, and he still knows a bad guy when he sees one.',
        art: 'http://mythicspoiler.com/dom/cards/gideonsreproach.jpg'
      },
      {
        name: 'Healing Grace',
        set: 'Dominaria',
        cost: '1',
        color: 'White',
        supertype: 'Instant',
        rarity: 'Common',
        effects: 'Prevent the next 3 damage that would be dealt to any target this turn by a source of your choice.  You gain 3 life.',
        flavor: '"Whatever faith you have in Serra, she has more in you."\n--Lyra Dawnbringer',
        art: 'http://mythicspoiler.com/dom/cards/healinggrace1.jpg'
      },
      {
        name: 'History of Benalia',
        set: 'Dominaria',
        cost: '3',
        color: 'White',
        supertype: 'Enchantment',
        subtype: 'Saga',
        rarity: 'Mythic',
        effects: '(As this Saga enters and after your draw step, add a lore counter.  Sacrifice after III.)\nI & II: Create a 2/2 white Knight creature token with vigilance.\nIII: Knights you control get +2/+1 until end of turn.',
        art: 'http://mythicspoiler.com/dom/cards/historyofbenalia1.jpg'
      },
      {
        name: 'Invoke the Divine',
        set: 'Dominaria',
        cost: '3',
        color: 'White',
        supertype: 'Instant',
        rarity: 'Common',
        effects: 'Destroy target artifact or enchantment.  You gain 4 life.',
        flavor: '"Let go of all that harms you.  Cast your burdens into the darkness, and build for the faithful a house of light."\n--Song of All, canto 1008',
        art: 'http://mythicspoiler.com/dom/cards/invokethedivine1.jpg'
      },
      {
        name: 'Knight of Grace',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Knight',
        rarity: 'Uncommon',
        effects: 'First strike\nHexproof from black (This creature can\'t be the target of black spells or abilities your opponents control.)\nKnight of Grace gets +1/+0 as long as any player controls a black permanent.',
        flavor: 'A light to pierce the shadows.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/dom/cards/knightofgrace2.jpg'
      },
      {
        name: 'Knight of New Benalia',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Knight',
        rarity: 'Common',
        flavor: 'The mage-smiths of New Benalia have perfected the art of blending fine steel and enchanted glass into weapons that are both beautiful and deadly.  Only elite knights are entrusted with these martial works of art.',
        power: '3',
        toughness: '1',
        art: 'http://mythicspoiler.com/dom/cards/knightofnewbenalia.jpg'
      },
      {
        name: 'Kwende, Pride of Femeref',
        set: 'Dominaria',
        cost: '4',
        color: 'White',
        supertype: 'Legendary Creature',
        subtype: 'Human Knight',
        rarity: 'Uncommon',
        effects: 'Double strike\nCreatures you control with first strike have double strike.',
        flavor: 'Descendant of a vanished land, student of a forgotten general, and master of blades no smith could forge anew.  He honors them all by living a life worthy of song.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/dom/cards/kwendeprideoffemeref1.jpg'
      },
      {
        name: 'Lyra Dawnbringer',
        set: 'Dominaria',
        cost: '5',
        color: 'White',
        supertype: 'Legendary Creature',
        subtype: 'Angel',
        rarity: 'Mythic',
        effects: 'Flying, first strike, lifelink\nOther Angels you control get +1/+1 and lifelink.',
        flavor: '"You are not alone.  You never were."',
        power: '5',
        toughness: '5',
        art: 'http://mythicspoiler.com/dom/cards/lyradawnbringer1.jpg'
      },
      {
        name: 'Mesa Unicorn',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Unicorn',
        rarity: 'Common',
        effects: 'Lifelink',
        flavor: 'The unicorns of Sursi are a manifestation of Serra\'s joy and compassion.  They frolic and dance like children, offering blessings to anyone they encounter.',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/dom/cards/mesaunicorn.jpg'
      },
      {
        name: 'On Serra\'s Wings',
        set: 'Dominaria',
        cost: '4',
        color: 'White',
        supertype: 'Legendary Enchantment',
        subtype: 'Aura',
        rarity: 'Uncommon',
        effects: 'Enchant creature\nEnchanted creature is legendary, gets +1/+1, and has flying, vigilance, and lifelink.',
        flavor: '"The spirit of Serra raised Brindri high and commanded her to keep the balance."\nSong of All, canto 524',
        art: 'http://mythicspoiler.com/dom/cards/onserraswings2.jpg'
      },
      {
        name: 'Pegasus Courser',
        set: 'Dominaria',
        cost: '3',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Pegasus',
        rarity: 'Common',
        effects: 'Flying\nWhenever Pegasus Courser attacks, another target attacking creature gains flying until end of turn.',
        flavor: 'A pegasus chooses its rider, bearing the worthy into the clouds and tossing all others to the ground.',
        power: '1',
        toughness: '3',
        art: 'http://mythicspoiler.com/dom/cards/pegasuscourser.jpg'
      },
      {
        name: 'Sanctum Spirit',
        set: 'Dominaria',
        cost: '4',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Spirit',
        rarity: 'Uncommon',
        effects: 'Lifelink\nDiscard a historic card: Sanctum Spirit gains indestructible until end of turn. (Artifacts, legendaries, and Sagas are historic)',
        flavor: '"When history becomes too mournful, even good souls may choose to forget."\n--Shalai, voice of Plenty',
        power: '3',
        toughness: '2',
        art: 'http://mythicspoiler.com/dom/cards/sanctumspirit.jpg'
      },
      {
        name: 'Seal Away',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        rarity: 'Uncommon',
        effects: 'Flash\nWhen Seal Away enters the battlefield, exile target tapped creature an opponent controls until Seal Away leaves the battlefield.',
        flavor: 'An ancient nemesis rendered harmless long ago.',
        art: 'http://mythicspoiler.com/dom/cards/sealaway1.jpg'
      },
      {
        name: 'Sergeant-at-Arms',
        set: 'Dominaria',
        cost: '3',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human Soldier',
        rarity: 'Common',
        effects: 'Kicker {2W} (You may pay an additional {2W} as you cast this spell.)\nWhen Sergeant-at-Arms enters the battlefield, if it was kicked, create two 1/1 white Soldier creature tokens.',
        flavor: 'Knights get the glory.  Soldiers get things done.',
        power: '2',
        toughness: '3',
        art: 'http://mythicspoiler.com/dom/cards/sergeantatarms.jpg'
      },
      {
        name: 'Serra Angel',
        set: 'Dominaria',
        cost: '5',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Angel',
        rarity: 'Uncommon',
        effects: 'Flying, vigilance',
        flavor: 'The angel remembers her past lives like dreams.  Her song held up meadows.  Her blade drove back darkness.  Her wings carried her across the ages.',
        power: '4',
        toughness: '4',
        art: 'http://mythicspoiler.com/dom/cards/serraangel1.jpg'
      },
      {
        name: 'Serra Disciple',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Bird Cleric',
        rarity: 'Common',
        effects: 'Flying, first strike\nWhenever you cast a historic spell, Serra Disciple gets +1/+1 until end of turn. (Artifacts, legendaries, and Sagas are historic)',
        flavor: 'Theologians now believe that the Ancestor was another divine form of Serra.',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/dom/cards/serradisciple.jpg'
      },
      {
        name: 'Shalai, Voice of Plenty',
        set: 'Dominaria',
        cost: '4',
        color: 'White',
        supertype: 'Legendary Creature',
        subtype: 'Angel',
        rarity: 'Rare',
        effects: 'Flying\nYou, planeswalkers you control, and other creatures you control have hexproof.\n{4GG}: Put a +1/+1 counter on each creature you control.',
        power: '3',
        toughness: '4',
        art: 'http://mythicspoiler.com/dom/cards/shalaivoiceofplenty1.jpg'
      },
      {
        name: 'Teshar, Ancestor\'s Apostle',
        set: 'Dominaria',
        cost: '4',
        color: 'White',
        supertype: 'Legendary Creature',
        subtype: 'Bird Cleric',
        rarity: 'Rare',
        effects: 'Flying\nWhenever you cast a historic spell, return target creature card with converted mana cost 3 or less from your graveyard to the battlefield. (Artifacts, legendaries, and Sagas are historic)',
        flavor: '"The Ancestor saved us for a purpose."',
        power: '2',
        toughness: '2',
        art: 'http://mythicspoiler.com/dom/cards/tesharancestorsapostle3.jpg'
      },
      {
        name: 'Tragic Poet',
        set: 'Dominaria',
        cost: '1',
        color: 'White',
        supertype: 'Creature',
        subtype: 'Human',
        rarity: 'Common',
        effects: '{T}, Sacrifice Tragic Poet: Return target enchantment card from your graveyard to your hand.',
        flavor: '"In a healing world I write--I, who will never be healed.  Let my last gift be one of memory: from a thousand lost thoughts, choose one, and remember my name."',
        power: '1',
        toughness: '1',
        art: 'http://mythicspoiler.com/dom/cards/tragicpoet.jpg'
      },
      {
        name: 'Triumph of Gerrard',
        set: 'Dominaria',
        cost: '2',
        color: 'White',
        supertype: 'Enchantment',
        subtype: 'Saga',
        rarity: 'Uncommon',
        effects: '(As this Saga enters and after your draw step, add a lore counter.  Sacrifice after III.)\nI & II: Put a +1/+1 counter on target creature you control with the greatest power.\nIII: Target creature you control with the greatest power gains flying, first strike, and lifelink until end of turn.',
        art: 'http://mythicspoiler.com/dom/cards/triumphofgerrard1.jpg'
      },
      {
        name: 'Urza\'s Ruinous Blast',
        set: 'Dominaria',
        cost: '5',
        color: 'White',
        supertype: 'Legendary Sorcery',
        rarity: 'Rare',
        effects: '(You may cast a legendary sorcery only if you control a legendary creature or planeswalker.)\nExile all nonland permanents that aren\'t legendary.',
        flavor: 'Centuries ago, one man\'s vengeance plunged the world into ice and darkness.',
        art: 'http://mythicspoiler.com/dom/cards/urzasruinousblast3.jpg'
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
      {
        name: '',
        set: 'Dominaria',
        cost: '',
        color: 'Blue',
        supertype: '',
        subtype: '',
        rarity: '',
        effects: '',
        flavor: '',
        power: '',
        toughness: '',
        art: ''
      },
    ]);
  });
};