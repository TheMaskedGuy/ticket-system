import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TicketRepository } from 'src/db/tickets/ticket-db.repository';
import { CreateTicketsInput } from './dto/create-tickets.input';
import { UpdateTicketslInput } from './dto/update-tickets.input';
import { TicketsDbService } from 'src/db/tickets/ticket-db.service';

@Injectable()
export class TicketsService {
  constructor(private readonly tktService: TicketsDbService) {}

  async createTicket(createTicketInput: CreateTicketsInput) {
    return this.tktService.createTicket(createTicketInput);
  }

  async getAllTicketsForAUser(userID: number) {
    return this.tktService.getAllTicketsForAUser(userID);
  }

  async getSingleTicket(ticketID: number) {
    return this.tktService.getSingleTicket(ticketID);
  }

  async updateTicket(ticketID: number, updateTicketDto: UpdateTicketslInput) {
    return this.tktService.updateTicket(ticketID, updateTicketDto);
  }

  async deleteTicket(ticketID: number) {
    return this.tktService.deleteTicket(ticketID);
  }
}
