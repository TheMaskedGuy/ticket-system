import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import {Prisma} from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller('faqs')
@ApiTags('FAQs')
export class FaqsController {
  constructor(private readonly faqsService: FaqsService) {}

  @Post()
  createFaq(@Body() createFaqDto: Prisma.FAQCreateInput) {
    return this.faqsService.createFaq(createFaqDto);
  }

  @Get()
  getAllActiveFaqs() {
    return this.faqsService.getAllActiveFaqs();
  }

  @Put(':id')
  updateFaq(@Param('id') id: string, @Body() updateFaqDto: Prisma.FAQUpdateInput) {
    return this.faqsService.updateFaq(+id, updateFaqDto);
  }

  @Delete(':id')
  deleteFaq(@Param('id') id: string) {
    return this.faqsService.deleteFaq(+id);
  }
}
