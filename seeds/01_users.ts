import * as Knex from "knex";

const usersSql = require('../src/datasets/users');

export async function seed(knex: Knex): Promise<any> {
    return knex.raw(`
        ${usersSql}
    `);
};
