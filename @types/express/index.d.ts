import * as express from 'express';
import { IUserData } from '../../src/interfaces/users';

declare global {
    namespace Express {
        interface Request {
            userData: IUserData;
        }
    }
}
