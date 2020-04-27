import {Request, Response, NextFunction} from 'express';
import {queries} from '../database/queries';

export class UserController {
    static async get(req: Request, res: Response, next: NextFunction) {
        queries.getAll().then(
            (events: any) => {
                res.json(events);
            }
        );
    }
}
