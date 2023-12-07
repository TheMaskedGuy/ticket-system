import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FaqRepository } from 'src/db/faqs/faqs-db.repository';

@Injectable()
export class FaqsService {
  constructor(private readonly faqRepo: FaqRepository) {}

  createFaq(createFaqDto: Prisma.FAQCreateInput) {
    return this.faqRepo.createFaq(createFaqDto);
  }

  getAllActiveFaqs() {
    return this.faqRepo.getAllActiveFaqs();
  }

  updateFaq(faqID: number, updateFaqDto: Prisma.FAQUpdateInput) {
    return this.faqRepo.updateFaq(faqID, updateFaqDto);
  }

  deleteFaq(faqID: number) {
    return this.faqRepo.deleteFaq(faqID);
  }
}
