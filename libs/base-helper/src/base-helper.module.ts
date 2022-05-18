import { Module } from '@nestjs/common';
import { BaseHelperService } from './base-helper.service';

@Module({
  providers: [BaseHelperService],
  exports: [BaseHelperService],
})
export class BaseHelperModule {}
