import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class FeedbacksService {
  constructor(private readonly prisma: PrismaService){}

  async createFeedback(createFeedbackDto: Prisma.FeedbackUncheckedCreateInput) {
    return this.prisma.feedback.create({
      data: createFeedbackDto,
    });
  }

  async getAllFeedbacks() {
    return this.prisma.feedback.findMany({});
  }

  async getSingleFeedback(feedbackID: number) {
     return this.prisma.feedback.findUnique({where:{feedbackID}});
  }

}
