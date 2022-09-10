import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppErrors';

const isAdmOrOwnerMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { userIsAdm } = req.userData;

    if (!userIsAdm) throw new AppError('Unauthorized!', 403);

    next();
    return new AppError('Missing authorization!', 401);
};

export default isAdmOrOwnerMiddleware;
