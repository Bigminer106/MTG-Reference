exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('card-list').del()
    .then(function () {
      // Inserts seed entries
      return knex('card-list').insert([
        // {
        //   name: '',
        //   set: 'Aether Revolt',
        //   cost: '',
        //   color: '',
        //   supertype: '',
        //   subtype: '',
        //   rarity: '',
        //   effects: '',
        //   art: '',
        //   power: '',
        //   toughness: '',
        //   flavor: '',
        //   loyalty: ''
        // },
      ]);
    });
};
