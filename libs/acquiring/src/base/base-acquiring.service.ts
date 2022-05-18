import Invoice from '@lib/domain/entities/invoice.entity';

export interface IBaseAcquiringService<T> {
    pay: (T) => Promise<Invoice>;
}
