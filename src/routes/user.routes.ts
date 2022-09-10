import { Router } from 'express';

import userCreateController from '../controllers/user/userCreate.controller';
import userListController from '../controllers/user/userList.controller';
import userSoftDeleteController from '../controllers/user/userSoftDelete.controller';

import authTokenMiddleware from '../middlewares/authToken.middleware';
import isAdmOrOwnerMiddleware from '../middlewares/isAdmOrOwner.middleware';

const routes = Router();

export const userRoutes = () => {
    routes.post('/', userCreateController);
    routes.get(
        '/',
        authTokenMiddleware,
        isAdmOrOwnerMiddleware,
        userListController
    );
    routes.delete(
        '/:id',
        authTokenMiddleware,
        isAdmOrOwnerMiddleware,
        userSoftDeleteController
    );

    return routes;
};
