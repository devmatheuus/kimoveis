import { Request, Response } from 'express';
import categoryListWithPropertyService from '../../services/category/categoryListWithProperty.service';

const categoryListWithPropertyController = async (
    req: Request,
    res: Response
) => {
    const { id } = req.params;

    const categories = await categoryListWithPropertyService(id);

    return res.json(categories);
};

export default categoryListWithPropertyController;
