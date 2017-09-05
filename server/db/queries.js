const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('card-list');
  },
  getOne(id) {
    return knex('card-list').where('id', id).first();
  },
  getColor(color) {
    return knex('card-list').where('color', color);
  },
  getType(supertype) {
    return knex('card-list').where('supertype', supertype);
  },
  getSet(set) {
    return knex('card-list').where('set', set);
  },
  getRare(rarity) {
    return knex('card-list').where('rarity', rarity);
  },
  update(id, card-list) {
    return knex('card-list').where('id', id).update(card-list)
  },
  create(card) {
    return knex('card-list').insert(card, '*');
  },
  delete(id) {
    return knex('card-list').where('id', id).del();
  }
}
