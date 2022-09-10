import { Request, Response } from 'express';
import userSoftDeleteService from '../../services/user/userSoftDelete.service';

const userSoftDeleteController = async (req: Request, res: Response) => {
    const { id } = req.params;

    await userSoftDeleteService(id);

    return res.status(204).json({ message: 'User deleted!' });
};

export default userSoftDeleteController;
