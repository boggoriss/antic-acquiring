import { Column, DeepPartial, Entity, ManyToOne } from 'typeorm';
import BaseEntity from './base/base.entity';
import User from './user.entity';
import { JoinColumn } from 'typeorm';

/** Типы платежных систем
 * */
export const PaymentSystems = ['paddle', 'enot', 'capitalist'] as const;
export type PaymentSystemType = typeof PaymentSystems[number];
export const isPaymentSystemType = (x: any): x is PaymentSystemType => PaymentSystems.includes(x);
/** Сущность чека
 * */
@Entity()
export default class Invoice extends BaseEntity {
    constructor(data: DeepPartial<Invoice> = {}) {
        super(data);
    }

    // region Plain
    @Column('varchar', { nullable: false })
    paymentSystem: PaymentSystemType;

    @Column('boolean', { nullable: false, default: false })
    paid: boolean;

    @Column('bigint', { nullable: false })
    amount: number;

    @Column('uuid', { nullable: true })
    promoCodeId: string;

    @Column('uuid', { nullable: true })
    transactionId: string;
    // endregion

    // region Relations
    @ManyToOne(() => User, (user) => user.invoices, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn()
    user: User;

    @Column('uuid', { nullable: false })
    userId: string;
    // endregion
}
