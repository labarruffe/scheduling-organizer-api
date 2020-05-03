import * as Knex from "knex";

const table = 'event';

export async function up(knex: Knex): Promise<any> {
    return knex.raw(`
        CREATE TABLE ${table} (
            id serial,
            entertainer_id int NOT NULL,
            name VARCHAR NULL,
            description VARCHAR NULL,
            datetime timestamp NOT NULL,
            duration int NOT NULL,
            place VARCHAR NULL,
            isBlocker BOOLEAN,
            isOwner BOOLEAN,
            PRIMARY KEY (id),
            FOREIGN KEY (entertainer_id) REFERENCES entertainer (id) ON DELETE CASCADE
        );
    `);
}


export async function down(knex: Knex): Promise<any> {
    return knex.raw(`
        DROP TABLE ${table};
    `);
}
