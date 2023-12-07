import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TicketRepository } from 'src/db/tickets/ticket-db.repository';
import { TicketResolver } from './tickets.resolver';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, TicketRepository, TicketResolver],
})
export class TicketsModule {}
