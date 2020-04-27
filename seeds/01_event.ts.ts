import * as Knex from "knex";

const events = require('../src/datasets/events');

export async function seed(knex: Knex): Promise<any> {
    return (
        knex('event').del().then(
            () => {
                return knex('event').insert(events);
            }
        )
    );
};
