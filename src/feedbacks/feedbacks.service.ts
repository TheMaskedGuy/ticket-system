import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FeedbackRepository } from 'src/db/feedbacks/feedback-db.repository';

@Injectable()
export class FeedbacksService {
  constructor(private readonly feedbackRepo: FeedbackRepository) {}

  async createFeedback(createFeedbackDto: Prisma.FeedbackUncheckedCreateInput) {
    return this.feedbackRepo.createFeedback(createFeedbackDto);
  }

  async getAllFeedbacks() {
    return this.feedbackRepo.getAllFeedbacks();
  }

  async getSingleFeedback(feedbackID: number) {
    return this.feedbackRepo.getSingleFeedback(feedbackID);
  }
}
