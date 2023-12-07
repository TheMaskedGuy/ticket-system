import { Module } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { FaqsController } from './faqs.controller';
import { FaqRepository } from 'src/db/faqs/faqs-db.repository';

@Module({
  controllers: [FaqsController],
  providers: [FaqsService, FaqRepository],
})
export class FaqsModule {}
