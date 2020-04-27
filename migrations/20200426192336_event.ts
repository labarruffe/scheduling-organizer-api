import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('event', (table) => {
        table.increments();
        table.text('name');
        table.text('description');
        table.dateTime('datetime');
        table.integer('duration');
        table.text('place');
        table.boolean('isBlocker');
        table.text('owner');
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('event');
}
