import AppDataSource from '../../data-source';
import { Properties } from '../../entities/property.entity';
import { ScheduleUserProperties } from '../../entities/schedules-users-properties.entity';
import { AppError } from '../../errors/AppErrors';

const scheduleListPropertyService = async (id: string) => {
    const scheduleRepository = AppDataSource.getRepository(
        ScheduleUserProperties
    );

    const propertyRepository = AppDataSource.getRepository(Properties);

    const property = await propertyRepository.findOne({ where: { id } });

    if (!property) throw new AppError('Property not found!', 404);

    const schedule = await scheduleRepository.findOne({
        where: { propertyId: id }
    });

    if (!schedule) throw new AppError('No schedules registered', 404);

    const scheduleProperty = {
        schedules: [schedule],
        property
    };

    return scheduleProperty;
};

export default scheduleListPropertyService;
