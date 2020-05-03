import * as Knex from "knex";

const type = 'shiftEnum';

export async function up(knex: Knex): Promise<any> {
}


export async function down(knex: Knex): Promise<any> {
    return knex.raw(`
        DROP TYPE ${type} CASCADE;
    `);
}
