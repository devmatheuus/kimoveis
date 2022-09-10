import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppErrors';
import { IUser, IUserRequest } from '../../interfaces/users';
import { hash } from 'bcryptjs';

const userCreateService = async ({
    email,
    isAdm,
    name,
    passwordUser
}: IUserRequest): Promise<IUser> => {
    const userRepository = AppDataSource.getRepository(User);

    const emailAlreadyExists = await userRepository.findOne({
        where: { email }
    });

    if (emailAlreadyExists) {
        throw new AppError('Email already registered!', 400);
    }

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = await hash(passwordUser, 10);
    user.isAdm = isAdm;
    user.createdAt = new Date();
    user.updatedAt = new Date();

    userRepository.create(user);
    await userRepository.save(user);

    const { password, ...userData } = user;

    return userData;
};

export default userCreateService;
