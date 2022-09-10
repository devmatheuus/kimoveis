import { Request, Response } from 'express';
import { IPropertyRequest } from '../../interfaces/properties';

import propertyCreateService from '../../services/property/propertyCreate.service';

const propertyCreateController = async (req: Request, res: Response) => {
    const { address, categoryId, size, value }: IPropertyRequest = req.body;

    const property = await propertyCreateService({
        address,
        categoryId,
        size,
        value
    });

    return res.status(201).json(property);
};

export default propertyCreateController;
