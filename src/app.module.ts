import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '@lib/domain';
import { AcquiringModule } from '@lib/acquiring';

@Module({
    imports: [TypeOrmModule.forRoot(config), AcquiringModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
