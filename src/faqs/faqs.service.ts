import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FaqsService {
  constructor(private readonly prisma: PrismaService) {}

  createFaq(createFaqDto: Prisma.FAQCreateInput) {
    return this.prisma.fAQ.create({
      data: createFaqDto,
    });
  }

  getAllActiveFaqs() {
    return this.prisma.fAQ.findMany({
      where: {
        isActive: true,
      },
    });
  }

  updateFaq(faqID: number, updateFaqDto: Prisma.FAQUpdateInput) {
    return this.prisma.fAQ.update({
      where: {
        faqID,
      },
      data: updateFaqDto,
    });
  }

  deleteFaq(faqID: number) {
    return this.prisma.fAQ.delete({where:{
      faqID
    }});
  }
}
