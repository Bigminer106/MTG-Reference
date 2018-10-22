exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Card_List').del()
    .then(() => {
      // Inserts seed entries
      return knex('Card_List').insert([
        {
          name: '',
          set: 'Guilds of Ravnica',
          cost: '',
          color: '',
          supertype: '',
          subtype: '',
          rarity: '',
          flavor: '',
          power: '',
          toughness: '',
          loyalty: '',
          art: ''
        }
      ]);
    });
};