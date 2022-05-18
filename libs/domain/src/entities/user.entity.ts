import BaseEntity from './base/base.entity';
import { Column, DeepPartial, Entity, OneToMany } from 'typeorm';
import Invoice from './invoice.entity';

/** Сущность пользователя
 * */
@Entity()
export default class User extends BaseEntity {
    constructor(data: DeepPartial<User> = {}) {
        super(data);
    }

    // region Plain
    /** Имя пользователя
     * */
    @Column('varchar', { nullable: false, length: 255 })
    username: string;

    /** Email
     * */
    @Column('varchar', { nullable: false, length: 255 })
    email: string;
    // endregion

    // region Relations
    @OneToMany(() => Invoice, (invoice) => invoice.user, { nullable: true, onDelete: 'NO ACTION' })
    invoices?: Invoice[];
    // endregion
}
