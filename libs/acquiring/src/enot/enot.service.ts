import { InvoiceService } from '@lib/domain/services/invoice.service';
import { EnotDataDto } from './enot-data.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { IBaseAcquiringService } from '@lib/acquiring/base/base-acquiring.service';

@Injectable()
export class EnotService implements IBaseAcquiringService<EnotDataDto> {
    constructor(private readonly invoiceService: InvoiceService) {}

    async pay(data: EnotDataDto) {
        const invoice = await this.invoiceService.findOneOptionally({ where: { transactionId: data.transaction_id } });
        if (data.status != 'fail' && invoice && !invoice.paid)
            return await this.invoiceService.save({ ...invoice, paid: true });
        else throw new BadRequestException();
    }
}
