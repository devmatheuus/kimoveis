import { Request, Response } from 'express';
import { IUser } from '../../interfaces/users';
import userListService from '../../services/user/userList.service';

const userListController = async (req: Request, res: Response) => {
    const users: IUser[] = await userListService();

    return res.json(users);
};

export default userListController;
