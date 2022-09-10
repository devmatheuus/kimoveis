import { Request, Response } from 'express';
import scheduleListPropertyService from '../../services/schedule/scheduleListProperty.service';

const scheduleListPropertyController = async (req: Request, res: Response) => {
    const { id } = req.params;

    const schedule = await scheduleListPropertyService(id);

    return res.json(schedule);
};

export default scheduleListPropertyController;
