import { Router } from 'express';
import scheduleCreateController from '../controllers/schedule/scheduleCreate.controller';
import scheduleListPropertyController from '../controllers/schedule/scheduleListPropertyController';
import authTokenMiddleware from '../middlewares/authToken.middleware';
import isAdmOrOwnerMiddleware from '../middlewares/isAdmOrOwner.middleware';

const routes = Router();

export const schedulesRoutes = () => {
    routes.post('/', authTokenMiddleware, scheduleCreateController);
    routes.get(
        '/properties/:id',
        authTokenMiddleware,
        isAdmOrOwnerMiddleware,
        scheduleListPropertyController
    );

    return routes;
};
