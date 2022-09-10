import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppErrors';

const handleErrorMiddleware = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            code: err.statusCode
        });
    }

    return res.status(500).json({
        message: 'Internal server error'
    });
};

export default handleErrorMiddleware;
