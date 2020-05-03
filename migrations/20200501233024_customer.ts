import * as Knex from "knex";

const table = 'customer';

export async function up(knex: Knex): Promise<any> {
    return knex.raw(`
        CREATE TABLE ${table} (
            id int NOT NULL,
            PRIMARY KEY (id),
            CONSTRAINT fk_users_id FOREIGN KEY (id) REFERENCES users (id)
        );
    `);
}


export async function down(knex: Knex): Promise<any> {
    return knex.raw(`
        DROP TABLE ${table};
    `);
}
