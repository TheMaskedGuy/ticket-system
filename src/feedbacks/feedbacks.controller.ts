import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller('feedbacks')
@ApiTags('FeedBack')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Post()
  createFeedback(@Body() createFeedbackDto: Prisma.FeedbackUncheckedCreateInput) {
    return this.feedbacksService.createFeedback(createFeedbackDto);
  }

  @Get()
  getAllFeedbacks() {
    return this.feedbacksService.getAllFeedbacks();
  }

  @Get(':id')
  getSingleFeedback(@Param('id') id: string) {
    return this.feedbacksService.getSingleFeedback(+id);
  }
}
