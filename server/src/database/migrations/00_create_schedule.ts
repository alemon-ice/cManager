import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('schedules', table => {
    table.increments('id').primary();
    table.string('title', 60).notNullable();
    table.string('description', 200);
    table.date('date').notNullable();
    table.time('start_time').notNullable();
    table.time('end_time').notNullable();
    table.boolean('is_important').defaultTo(false).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('schedules');
}
