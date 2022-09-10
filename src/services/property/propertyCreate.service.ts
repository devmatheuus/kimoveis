import AppDataSource from '../../data-source';
import { Address } from '../../entities/address.entity';
import { Category } from '../../entities/category.entity';
import { Properties } from '../../entities/property.entity';
import { AppError } from '../../errors/AppErrors';
import { IPropertyRequest } from '../../interfaces/properties';

const propertyCreateService = async ({
    address,
    categoryId,
    size,
    value
}: IPropertyRequest) => {
    const propertyRepository = AppDataSource.getRepository(Properties);
    const addressRepository = AppDataSource.getRepository(Address);

    const addressAlreadyRegistered = await propertyRepository.findOne({
        where: { address }
    });

    if (addressAlreadyRegistered) {
        throw new AppError('Address already registered!', 400);
    }

    const { zipCode, state } = address;

    if (String(zipCode).length > 8) {
        throw new AppError('Zip code must have a maximum of 8 characters', 400);
    }

    if (String(state).length > 2) {
        throw new AppError('State must have a maximum of 2 characters', 400);
    }

    const categoryRepository = AppDataSource.getRepository(Category);

    const categories = await categoryRepository.findOne({
        where: { id: categoryId }
    });

    if (!categories) throw new AppError('Category not found!', 404);

    const newAddress = new Address();
    newAddress.city = address.city;
    newAddress.district = address.district;
    newAddress.number = address.number;
    newAddress.state = address.state;
    newAddress.zipCode = address.zipCode;

    addressRepository.create(newAddress);
    await addressRepository.save(newAddress);

    const property = new Properties();
    property.value = value;
    property.size = size;
    property.categoryId = categoryId;
    property.address = newAddress;
    property.category = categories;
    property.createdAt = new Date();
    property.updatedAt = new Date();

    propertyRepository.create(property);
    await propertyRepository.save(property);

    return property;
};

export default propertyCreateService;
