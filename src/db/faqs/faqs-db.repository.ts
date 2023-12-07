import { Injectable } from "@nestjs/common";
import { DBService } from "../db.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class FaqRepository {
  constructor(private readonly prisma: DBService) {}

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
    return this.prisma.fAQ.delete({
      where: {
        faqID,
      },
    });
  }
}
