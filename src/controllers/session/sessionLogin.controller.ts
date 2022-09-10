import { Request, Response } from 'express';
import { ISessionLogin } from '../../interfaces/sessions';

import sessionLoginService from '../../services/session/sessionLogin.service';

const sessionLoginController = async (req: Request, res: Response) => {
    const { email, password }: ISessionLogin = req.body;

    const token = await sessionLoginService({ email, password });

    return res.json({ token });
};

export default sessionLoginController;
