import {knex} from './knex';

const queries = {
    getAll() {
        return knex('event');
    }
}

export {queries};
