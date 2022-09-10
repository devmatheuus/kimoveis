import { Router } from 'express';
import categoryCreateController from '../controllers/category/categoryCreate.controller';
import categoryListController from '../controllers/category/categoryList.controller';
import categoryListWithPropertyController from '../controllers/category/categoryListWithProperty.controller';
import authTokenMiddleware from '../middlewares/authToken.middleware';
import isAdmOrOwnerMiddleware from '../middlewares/isAdmOrOwner.middleware';

const routes = Router();

export const categoryRoutes = () => {
    routes.post(
        '/',
        authTokenMiddleware,
        isAdmOrOwnerMiddleware,
        categoryCreateController
    );
    routes.get('/', categoryListController);
    routes.get('/:id/properties', categoryListWithPropertyController);

    return routes;
};
