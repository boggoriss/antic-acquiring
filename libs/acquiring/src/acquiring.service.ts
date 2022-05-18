import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '@lib/domain/services/user.service';
import { InvoiceService } from '@lib/domain/services/invoice.service';
import User from '@lib/domain/entities/user.entity';
import { v4 as uuid } from 'uuid';
import Invoice, { isPaymentSystemType } from '@lib/domain/entities/invoice.entity';
import { InvoiceDto, UserDto } from '@lib/base-helper';

@Injectable()
export class AcquiringService {
    constructor(
        private readonly userService: UserService,
        private readonly invoiceService: InvoiceService,
    ) {
    }

    /** Создание пользователя (было нужно для теста)
     * */
    async createUser(userDto: UserDto): Promise<User> {
        return await this.userService.save({ id: uuid(), ...userDto });
    }

    /** Создание чека, прикрепленного к определенному пользователю.
     * */
    async createInvoice(userId: string, invoiceDto: InvoiceDto): Promise<Invoice> {
        const user = await this.userService.findOne(userId);
        if (isPaymentSystemType(invoiceDto.paymentSystem))
            return await this.invoiceService.save({ id: uuid(), userId, user, ...invoiceDto });
        else throw new BadRequestException();
    }

    // /** Чек оплачен.
    //  * */
    // async pay(invoiceId: string): Promise<Invoice> {
    //     const invoice = await this.invoiceService.findOne(invoiceId);
    //     return this.invoiceService.save({ ...invoice, paid: true });
    // }
}
