import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import { AcquiringService } from '../acquiring.service';
import { InvoiceDto, UserDto } from '@lib/base-helper';
import User from '@lib/domain/entities/user.entity';
import Invoice from '@lib/domain/entities/invoice.entity';

@Controller('api')
export class BaseController {
    constructor(
        private readonly acquiringService: AcquiringService
    ) {
    }

    @Post('/create-user')
    async createUser(@Body() userDto: UserDto): Promise<User> {
        return this.acquiringService.createUser(userDto);
    }

    @Post('/create-invoice/:userId')
    async createInvoice(@Param() param, @Body() invoiceDto: InvoiceDto): Promise<Invoice> {
        return this.acquiringService.createInvoice(param.userId, invoiceDto);
    }
}
