import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Properties } from './property.entity';
import { User } from './user.entity';

@Entity('schedules_users_properties')
export class ScheduleUserProperties {
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column({ type: 'date' })
    date: string;

    @Column({ type: 'time' })
    hour: string;

    @Column()
    propertyId: string;

    @Column({ type: 'uuid' })
    userId: string;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user: User;

    @ManyToOne(() => Properties, { eager: true })
    @JoinColumn()
    property: Properties;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
