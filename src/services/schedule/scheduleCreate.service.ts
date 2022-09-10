import AppDataSource from '../../data-source';
import { Properties } from '../../entities/property.entity';
import { ScheduleUserProperties } from '../../entities/schedules-users-properties.entity';
import { AppError } from '../../errors/AppErrors';
import { IScheduleRequest } from '../../interfaces/schedules';
import formateData from '../../utils/formateDate';

const scheduleCreateService = async ({
    date,
    hour,
    propertyId,
    userId
}: IScheduleRequest) => {
    const scheduleRepository = AppDataSource.getRepository(
        ScheduleUserProperties
    );

    const propertyRepository = AppDataSource.getRepository(Properties);

    const property = await propertyRepository.findOne({
        where: { id: propertyId }
    });

    if (!property) throw new AppError('Property not found!', 404);

    const dateAlreadySet = await scheduleRepository.findOne({
        where: { date }
    });

    const verifyData = formateData(hour, date);

    if (dateAlreadySet) {
        const hourAlreadySet = await scheduleRepository.findOne({
            where: { hour }
        });

        if (hourAlreadySet) throw new AppError('Date not available!', 400);
    }

    const schedule = new ScheduleUserProperties();
    schedule.date = date;
    schedule.hour = hour;
    schedule.propertyId = propertyId;
    schedule.userId = userId;

    scheduleRepository.create(schedule);
    await scheduleRepository.save(schedule);

    return schedule;
};

export default scheduleCreateService;
