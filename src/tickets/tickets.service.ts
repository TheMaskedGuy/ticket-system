import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TicketRepository } from 'src/db/tickets/ticket-db.repository';
import { CreateTicketsInput } from './dto/create-tickets.input';
import { UpdateTicketslInput } from './dto/update-tickets.input';

@Injectable()
export class TicketsService {
  constructor(private readonly ticketRepo: TicketRepository) {}

  async createTicket(createTicketDto: CreateTicketsInput) {
    return this.ticketRepo.createTicket(createTicketDto);
  }

  async getAllTicketsForAUser(userID: number) {
    return this.ticketRepo.getAllTicketsForAUser(userID);
  }

  async getSingleTicket(ticketID: number) {
    return this.ticketRepo.getSingleTicket(ticketID);
  }

  async updateTicket(ticketID: number, updateTicketDto: UpdateTicketslInput) {
    return this.ticketRepo.updateTicket(ticketID, updateTicketDto);
  }

  async deleteTicket(ticketID: number) {
    return this.ticketRepo.deleteTicket(ticketID);
  }
}
