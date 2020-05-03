import * as Knex from "knex";

const table = 'entertainer';

export async function up(knex: Knex): Promise<any> {
    return knex.raw(`
        
        CREATE TYPE categoryEnum AS ENUM (
            'CLOWN',
            'MAGICIAN',
            'JUGGLER'
        );
        

        CREATE TYPE shiftEnum AS ENUM (
            'MORNING',
            'AFTERNOON',
            'NIGHT'
        );

        CREATE TYPE dayOfWeekEnum AS ENUM (
            'MONDAY',
            'TUESDAY',
            'WEDNESDAY',
            'THURSDAY',
            'FRIDAY',
            'SATURDAY',
            'SUNDAY'
        );

        CREATE TABLE ${table} (
            id int NOT NULL,
            category categoryEnum,
            shiftsAvailable shiftEnum array,
            daysOfWeekAvailable dayOfWeekEnum array,
            price numeric, 
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
