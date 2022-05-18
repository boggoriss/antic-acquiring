import { Body, Controller, Post } from '@nestjs/common';
import { EnotService } from '@lib/acquiring/enot/enot.service';
import { EnotDataDto } from '@lib/acquiring/enot/enot-data.dto';

@Controller('enot')
export class EnotController {
    constructor(private readonly enotService: EnotService) {}

    /** Webhook для оплаты
     * */
    @Post('/pay')
    async pay(@Body() data: EnotDataDto) {
        return await this.enotService.pay(data);
    }
}
