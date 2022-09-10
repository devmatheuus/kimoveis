import { AppError } from '../errors/AppErrors';

const formateData = (hour: string, date: string) => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const longDate = date.split('/');

    const year = +longDate[0];
    const month = +longDate[1] - 1;
    const day = +longDate[2];

    const formateHour = +hour.replace(':', ' ').split(' ')[0];
    const formateMinute = +hour.replace(':', ' ').split(' ')[1];

    const formateDate = new Date(year, month, day, formateHour, formateMinute);

    const nameOfDay = weekDays[formateDate.getDay()];
    const roundHour = formateDate.getHours();

    if (nameOfDay === 'Sun' || nameOfDay === 'Sat') {
        throw new AppError('Invalid day!', 400);
    }

    if (roundHour < 8 || roundHour > 18) {
        throw new AppError('Invalid hour!', 400);
    }
    const dateReturn = {
        nameOfDay,
        roundHour
    };

    return true;
};

export default formateData;
