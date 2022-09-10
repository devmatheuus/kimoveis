import { Request, Response } from 'express';
import { ICategory, ICategoryRequest } from '../../interfaces/categories';

import categoryCreateService from '../../services/category/categoryCreate.service';

const categoryCreateController = async (req: Request, res: Response) => {
    const { name }: ICategoryRequest = req.body;

    const category: ICategory = await categoryCreateService({ name });

    return res.status(201).json(category);
};

export default categoryCreateController;
