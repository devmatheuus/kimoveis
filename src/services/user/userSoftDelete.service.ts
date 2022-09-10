import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppErrors';

const userSoftDeleteService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { id } });

    if (!user) throw new AppError('User not found!', 404);

    if (!user.isActive) throw new AppError('User is already inactive!', 400);

    await userRepository.update(user.id, { isActive: false });

    return true;
};

export default userSoftDeleteService;
