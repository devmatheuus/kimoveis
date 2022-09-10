import { Request, Response } from 'express';
import { IScheduleRequest } from '../../interfaces/schedules';
import scheduleCreateService from '../../services/schedule/scheduleCreate.service';

const scheduleCreateController = async (req: Request, res: Response) => {
    const { date, hour, propertyId }: IScheduleRequest = req.body;
    const { userId } = req.userData;

    const schedule = await scheduleCreateService({
        date,
        hour,
        propertyId,
        userId
    });

    return res.status(201).json({
        message: 'Schedule created!',
        schedule
    });
};

export default scheduleCreateController;
