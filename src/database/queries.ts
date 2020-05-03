import { knex } from './knex';
import { Customer } from '../entities/customer';
import { Entertainer } from '../entities/entertainer';

export class EntertainerQuery {
    private static userTable = 'users';
    private static entertainerTable = 'entertainer';
    private static eventTable = 'event';

    /** 
     * fieldName = id
     * or
     * fieldName = email
    */
    static async searchBy(fieldName: string, fieldValue: string): Promise<any> {
        return knex.raw(`select * from ${this.userTable} join ${this.entertainerTable} using (id) where ${fieldName} = '${fieldValue}'`);
    }

    static async searchEventBy(fieldName: string, fieldValue: string): Promise<any> {
        return knex.raw(`
            select eve.name, eve.description, eve.datetime, eve.duration, eve.place, eve.isBlocker, eve.isOwner
            from (
                select *
                from ${this.userTable} u 
                join ${this.entertainerTable} ent 
                using (id) 
                where ${fieldName} = '${fieldValue}'
            ) as uent
            join ${this.eventTable} eve on eve.entertainer_id  = uent.id;
        `);
    }
    
    static async create(entertainer: Entertainer): Promise<any> {
        await knex.raw(`insert into ${this.userTable} (name, email, password) values (:name, :email, :password);`, entertainer as any);
        return knex.raw(`insert into ${this.entertainerTable} (id, category, shiftsavailable, daysofweekavailable, price) 
            values (
                (select id from ${this.userTable} where email = '${entertainer.email}'), :category, :shiftsavailable, :daysofweekavailable, :price
            )`, entertainer as any
        );
    }

}

export class CustomerQuery {
    private static userTable = 'users';
    private static customerTable = 'customer';

    static async create(customer: Customer): Promise<any> {
        await knex.raw(`insert into ${this.userTable} (name, email, password) values (:name, :email, :password);`, customer as any);
        return knex.raw(`insert into ${this.customerTable} (id) 
            values (
                (select id from ${this.userTable} where email = '${customer.email}')
            )`
        );
    }
}

export class EventQuery {
    private static eventTable = 'event';

    static async create(entertainerId: string, event: Event): Promise<any> {
        return knex.raw(`
            insert into ${this.eventTable} (entertainer_id, name, description, datetime, duration, place, isBlocker, isOwner)
                values (${entertainerId}, :name, :description, :dateTime, :duration, :place, :isBlocker, :isOwner);`, event as any
        );
    }
}
