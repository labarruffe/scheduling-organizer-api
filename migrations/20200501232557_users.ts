import * as Knex from "knex";

const table = 'users';

export async function up(knex: Knex): Promise<any> {
    return knex.raw(`
        CREATE TABLE ${table} (
            id serial,
            name VARCHAR NOT NULL,
            email VARCHAR NOT NULL,
            password VARCHAR NOT NULL,
            PRIMARY KEY (id),
            UNIQUE (email)
        );
    `);
}


export async function down(knex: Knex): Promise<any> {
    return knex.raw(`
        DROP TABLE ${table};
    `);
}
