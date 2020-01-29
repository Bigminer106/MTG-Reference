exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Card_List').del()
  .then(function () {
    // Inserts seed entries
    return knex('Card_List').insert([
      {
        name: '',
        set: 'Fate Reforged',
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
      }
    ]);
  });
};