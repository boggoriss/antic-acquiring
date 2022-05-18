import { PaymentSystemType } from '@lib/domain/entities';

export class InvoiceDto {
    paymentSystem: PaymentSystemType;

    amount: number;

    promoCodeId?: string;
}
