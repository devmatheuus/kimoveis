import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppErrors';

import jwt from 'jsonwebtoken';

const authTokenMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) throw new AppError('Missing authorization!', 401);

    jwt.verify(
        token as string,
        process.env.SECRET_KEY as string,
        (err: any, decoded: any) => {
            if (err) throw new AppError('Invalid token', 401);

            req.userData = {
                userEmail: decoded.email,
                userId: decoded.sub,
                userIsAdm: decoded.isAdm
            };
            next();
        }
    );
};

export default authTokenMiddleware;
