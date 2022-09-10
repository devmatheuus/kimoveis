import AppDataSource from '../../data-source';
import { Category } from '../../entities/category.entity';

import { AppError } from '../../errors/AppErrors';
import { ICategoryRequest } from '../../interfaces/categories';

const categoryCreateService = async ({
    name
}: ICategoryRequest): Promise<Category> => {
    const categoryRepository = AppDataSource.getRepository(Category);

    const categoryAlreadyRegistered = await categoryRepository.findOne({
        where: { name }
    });

    if (categoryAlreadyRegistered) {
        throw new AppError('Category already registered!', 400);
    }

    const category = new Category();
    category.name = name;

    categoryRepository.create(category);
    await categoryRepository.save(category);

    return category;
};

export default categoryCreateService;
