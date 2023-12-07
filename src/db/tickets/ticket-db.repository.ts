import { Injectable } from '@nestjs/common';
import { DBService } from '../db.service';
import { Ticket } from '@prisma/client';
import { CreateTicketsInput } from 'src/tickets/dto/create-tickets.input';
import { UpdateTicketslInput } from 'src/tickets/dto/update-tickets.input';

@Injectable()
export class TicketRepository {
  constructor(private readonly prisma: DBService) {}

  async createTicket(createTicketsInput: CreateTicketsInput): Promise<Ticket> {
    return await this.prisma.ticket.create({
      data: {
        userID: createTicketsInput.userID,
        subject: createTicketsInput.subject,
        description: createTicketsInput.description,
        assignedTo: createTicketsInput.assignedTo,
        status: createTicketsInput.status,
        priority: createTicketsInput.priority,
      },
    });
  }

  async getAllTicketsForAUser(userID: number) {
    return await this.prisma.ticket.findMany({ where: { userID } });
  }

  async getSingleTicket(ticketID: number) {
    return await this.prisma.ticket.findUnique({
      where: {
        ticketID,
      },
    });
  }

  async updateTicket(ticketID: number, updateTicketslInput: UpdateTicketslInput) {
    return await this.prisma.ticket.update({
      where: { ticketID },
      data: {
        userID: updateTicketslInput.userID,
        subject: updateTicketslInput.subject,
        description: updateTicketslInput.description,
        status: updateTicketslInput.status,
        priority: updateTicketslInput.priority,
        assignedTo: updateTicketslInput.assignedTo,
        closedAt: updateTicketslInput.closedAt,
      },
    });
  }

  async deleteTicket(ticketID: number) {
    return this.prisma.ticket.delete({ where: { ticketID } });
  }
}
