import { Router } from 'express';

import sessionLoginController from '../controllers/session/sessionLogin.controller';

const routes = Router();

export const sessionRoutes = () => {
    routes.post('/', sessionLoginController);

    return routes;
};
