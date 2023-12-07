import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbackRepository } from 'src/db/feedbacks/feedback-db.repository';

@Module({
  controllers: [FeedbacksController],
  providers: [FeedbacksService, FeedbackRepository],
})
export class FeedbacksModule {}
