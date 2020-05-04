import * as Knex from "knex";

const customersSql = require('../src/datasets/customers');

export async function seed(knex: Knex): Promise<any> {
    return knex.raw(`
        ${customersSql}
    `);
};
