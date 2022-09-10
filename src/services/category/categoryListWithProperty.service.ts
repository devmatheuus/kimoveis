import AppDataSource from '../../data-source';
import { Category } from '../../entities/category.entity';
import { Properties } from '../../entities/property.entity';
import { AppError } from '../../errors/AppErrors';

const categoryListWithPropertyService = async (id: string) => {
    const categoryRepository = AppDataSource.getRepository(Category);
    const propertyRepository = AppDataSource.getRepository(Properties);

    const category = await categoryRepository.findOne({ where: { id } });

    if (!category) throw new AppError('Category not found!', 404);

    const categories = await categoryRepository.findOne({
        where: { id }
    });

    const properties = await propertyRepository.findOne({
        where: { categoryId: categories?.id }
    });

    const categoriesWithProperty = {
        ...categories,
        properties
    };

    return categoriesWithProperty;
};

export default categoryListWithPropertyService;
