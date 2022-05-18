import { Module } from '@nestjs/common';
import { AcquiringService } from './acquiring.service';
import { DomainModule } from '@lib/domain';
import { EnotService } from '@lib/acquiring/enot/enot.service';
import { EnotController } from '@lib/acquiring/controllers/enot.controller';
import { BaseController } from '@lib/acquiring/controllers/base.controller';

@Module({
    imports: [DomainModule],
    providers: [EnotService, AcquiringService],
    controllers: [BaseController, EnotController],
    exports: [AcquiringService],
})
export class AcquiringModule {}
