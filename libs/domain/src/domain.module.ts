import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { UserService } from './services/user.service';
import { InvoiceService } from './services/invoice.service';

@Module({
    imports: [TypeOrmModule.forFeature(entities)],
    providers: [DomainService, UserService, InvoiceService],
    exports: [
        DomainService,
        TypeOrmModule.forFeature(entities),
        UserService,
        InvoiceService,
    ],
})
export class DomainModule {}
