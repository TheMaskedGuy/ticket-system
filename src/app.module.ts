import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TicketsModule } from './tickets/tickets.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { FaqsModule } from './faqs/faqs.module';

@Module({
  imports: [PrismaModule, TicketsModule, FeedbacksModule, FaqsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
