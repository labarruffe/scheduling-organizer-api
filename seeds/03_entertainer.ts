import * as Knex from "knex";

const entertainersSql = require('../src/datasets/entertainers');

export async function seed(knex: Knex): Promise<any> {
    return knex.raw(`
        ${entertainersSql}
    `);
};
