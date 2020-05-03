import * as Knex from "knex";

const eventsSql = require('../src/datasets/events');
const table = 'event';

export async function seed(knex: Knex): Promise<any> {
    return knex.raw(`
        ${eventsSql}
    `);
};
