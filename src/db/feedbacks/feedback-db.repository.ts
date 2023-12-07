import { Injectable } from '@nestjs/common';
import { DBService } from '../db.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FeedbackRepository {
  constructor(private readonly prisma: DBService) {}

  async createFeedback(createFeedbackDto: Prisma.FeedbackUncheckedCreateInput) {
    return this.prisma.feedback.create({
      data: createFeedbackDto,
    });
  }

  async getAllFeedbacks() {
    return this.prisma.feedback.findMany({});
  }

  async getSingleFeedback(feedbackID: number) {
    return this.prisma.feedback.findUnique({ where: { feedbackID } });
  }
}
