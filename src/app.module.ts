import {  Module } from '@nestjs/common';
import { DBModule } from './db/db.module';
import { TicketsModule } from './tickets/tickets.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { FaqsModule } from './faqs/faqs.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
      sortSchema: true,
    }),
    DBModule, TicketsModule, FeedbacksModule, FaqsModule],
})
export class AppModule {}
