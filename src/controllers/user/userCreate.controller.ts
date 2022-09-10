import { Request, Response } from 'express';
import { IUserRequest } from '../../interfaces/users';

import userCreateService from '../../services/user/userCreate.service';

const userCreateController = async (req: Request, res: Response) => {
    const { email, isAdm, name, passwordUser }: IUserRequest = req.body;

    const createdUser = await userCreateService({
        email,
        isAdm,
        name,
        passwordUser
    });

    return res.status(201).json(createdUser);
};

export default userCreateController;
