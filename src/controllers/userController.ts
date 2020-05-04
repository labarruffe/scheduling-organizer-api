import { Request, Response, NextFunction } from 'express';
import * as query from '../database/queries';
import { Entertainer } from '../entities/entertainer';
import { Customer } from '../entities/customer';

export class UserController {

    static async post(req: Request, res: Response, next: NextFunction) {
        const type = req.query.type;

        switch (type) {
            case 'customer':
                let customer: Customer = req.body;
                await query.CustomerQuery.create(customer).then(
                    (customer: any) => {
                        res.sendStatus(201);                
                    }        
                )
                break;
            case 'entertainer':
                let entertainer: Entertainer = req.body;
                await query.EntertainerQuery.create(entertainer).then(
                    (entertainer: any) => {
                        res.sendStatus(201);                }
                )
                break;
        
            default:
                const msg = 'Type should exists and it should be customer or entertainer';
                console.log(msg);
                res.json({error: msg}).sendStatus(400);
                break;
        }
    }

    static async consultAgendaBy(req: Request, res: Response, next: NextFunction) {
        // TODO: tratar entrada do searchBy
        const entertainer = await query.EntertainerQuery.searchBy(Object.getOwnPropertyNames(req.query)[0], (req.query.id || req.query.email) as string).then(
            (result: any) => {
                return result.rows[0] as Entertainer;
            }
        );

        entertainer.events = await query.EntertainerQuery.searchEventBy('email', entertainer.email).then(
            (result: any) => {
                return result.rows;
            }
        ) 
        return res.json(entertainer).sendStatus(200);
    }

    static async consultAvailableCategories(req: Request, res: Response, next: NextFunction) {
        await query.EntertainerQuery.listCategories().then(
            (result: any) => {
                return res.json(result.rows).sendStatus(200);
            }
        ) 
    }
}
