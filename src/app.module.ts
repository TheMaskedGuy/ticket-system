import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from './db/db.module';
import { TicketsModule } from './tickets/tickets.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { FaqsModule } from './faqs/faqs.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { join } from 'path';
import { TestGrphQlModule } from './test-grph-ql/test-grph-ql.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
      sortSchema: true,
    }),
    DBModule, TicketsModule, FeedbacksModule, FaqsModule, TestGrphQlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
