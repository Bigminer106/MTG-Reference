exports.up = function(knex, Promise) {
  return knex.schema.createTable('card-list', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('set').notNullable();
    table.text('cost').notNullable();
    table.text('color').notNullable();
    table.text('type').notNullable();
    table.text('supertype');
    table.text('subtype');
    table.text('rarity').notNullable();
    table.text('effects');
    table.text('art').notNullable();
    table.text('power');
    table.text('toughness');
    table.text('loyalty');
    table.text('flavor');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('card-list');
};
