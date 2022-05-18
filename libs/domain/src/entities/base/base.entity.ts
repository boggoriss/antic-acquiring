import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

/** Базовая сущность
 * */
export default class BaseEntity {
    constructor(object: unknown = {}) {
        Object.assign(this, object);
    }

    @PrimaryColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
