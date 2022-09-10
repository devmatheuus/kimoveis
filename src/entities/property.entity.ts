import {
    Entity,
    Column,
    PrimaryColumn,
    OneToOne,
    JoinTable,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Address } from './address.entity';
import { Category } from './category.entity';

@Entity('properties')
export class Properties {
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column({ default: false })
    sold: boolean;

    @Column('decimal')
    value: number;

    @Column()
    size: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    addressId: string;

    @Column()
    categoryId: string;

    @OneToOne(() => Address, { eager: true })
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, { eager: true })
    @JoinTable()
    category: Category;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
