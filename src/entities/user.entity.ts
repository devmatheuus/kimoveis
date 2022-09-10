import { Entity, Column, PrimaryColumn, JoinTable, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
export class User {
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    isAdm: boolean;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
