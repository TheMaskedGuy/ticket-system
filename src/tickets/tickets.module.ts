import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TicketRepository } from 'src/db/tickets/ticket-db.repository';
import { TicketResolver } from './tickets.resolver';
import { TicketsDbService } from 'src/db/tickets/ticket-db.service';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, TicketRepository, TicketsDbService, TicketResolver],
})
export class TicketsModule {}
