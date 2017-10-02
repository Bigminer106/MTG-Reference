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
  getSet(set) {
    return knex('Card_List').where('set', set);
  },
  getRare(rarity) {
    return knex('Card_List').where('rarity', rarity);
  },
  update(id, Card_List) {
    return knex('Card_List').where('id', id).update(Card_List)
  },
  create(card) {
    return knex('Card_List').insert(card, '*');
  },
  delete(id) {
    return knex('Card_List').where('id', id).del();
  }
}
