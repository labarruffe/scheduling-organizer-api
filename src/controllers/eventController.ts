import { Request, Response, NextFunction } from 'express';
import * as query from '../database/queries';

export class EventController {
    static async post(req: Request, res: Response, next: NextFunction) {
        
        const entertainerId = req.query.entertainerid;
        const event: Event = req.body;

        query.EventQuery.create(entertainerId as string, event).then(
            () => {
                res.sendStatus(201);
            }
        )
    }
}
