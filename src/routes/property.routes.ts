import { Router } from 'express';

import propertyCreateController from '../controllers/property/propertyCreate.controller';
import propertyListController from '../controllers/property/propertyListcontroller';
import authTokenMiddleware from '../middlewares/authToken.middleware';
import isAdmOrOwnerMiddleware from '../middlewares/isAdmOrOwner.middleware';

const routes = Router();

export const propertyRoutes = () => {
    routes.post(
        '/',
        authTokenMiddleware,
        isAdmOrOwnerMiddleware,
        propertyCreateController
    );
    routes.get('/', propertyListController);

    return routes;
};
