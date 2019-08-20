const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('Card_List');
  },
  getOne(id) {
    return knex('Card_List').where('id', id).first();
  },
  getColor(color) {
    return knex('Card_List').where('color', color);
  },
  getType(supertype) {
    return knex('Card_List').where('supertype', supertype);
  },
  getSubtype(subtype) {
    return knex('Card_list').where('subtype', subtype);
  },
  getSet(set) {
    return knex('Card_List').where('set', set);
  },
  getRarity(rarity) {
    return knex('Card_List').where('rarity', rarity);
  }
}
