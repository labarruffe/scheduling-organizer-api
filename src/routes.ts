import { Router } from "express";
import { UserController } from "./controllers/userController";
import { EventController } from "./controllers/eventController";

const router = Router();
router
    .get('/users', UserController.consultAgendaBy)
    .get('/users/categories', UserController.consultAvailableCategories)
    .post('/users', UserController.post)
    .post('/events', EventController.post)

export {router};
