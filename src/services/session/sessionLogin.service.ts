import AppDataSource from '../../data-source';
import { compare } from 'bcryptjs';
import { AppError } from '../../errors/AppErrors';
import { ISessionLogin } from '../../interfaces/sessions';
import { User } from '../../entities/user.entity';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const sessionLoginService = async ({
    email,
    password
}: ISessionLogin): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) throw new AppError('Incorrect email or password', 403);

    const matchPassword = await compare(password, user.password);

    if (!matchPassword) throw new AppError('Incorrect email or password', 403);

    const token = jwt.sign(
        {
            isAdm: user.isAdm
        },
        process.env.SECRET_KEY as string,
        {
            subject: user.id,
            expiresIn: '2h'
        }
    );

    return token;
};

export default sessionLoginService;
