export async function up(knex) {
  return knex.schema.createTable('pokemons', (table) => {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('nome').notNullable();
    table.integer('nivel').notNullable();
    table.string('tipo').notNullable();
    table
      .uuid('treinador_id')
      .references('id')
      .inTable('treinadores')
      .onDelete('CASCADE');
  });
}

export async function down(knex) {
  return knex.schema.dropTable('pokemons');
}