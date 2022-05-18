export type PayStatus = 'success' | 'fail';

export class EnotDataDto {
    /** Статус вывода.
     * */
    status: PayStatus;
    /** ID транзакции
     * */
    transaction_id: string;
    /** Номер выплаты в нашей системе (invoiceId?)
     * */
    order_id?: string;
    /** Сообщение ошибки (можно отдать клиенту) (только при возникновении ошибки)
     * */
    message?: string;
    /** Сервис для вывода средств
     * */
    service: string;
    /** Счет куда совершен вывод
     * */
    wallet: string;
    /** Сумма вывода
     * */
    sum: number;
    /** Комиссия
     * */
    commission: number;
}
