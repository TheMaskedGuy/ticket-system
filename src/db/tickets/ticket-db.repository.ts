import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async getAllTicketsForAUser(userID: number): Promise<Ticket[]> {
    return await this.prisma.ticket.findMany({ where: { userID } });
  }

  async getSingleTicket(ticketID: number): Promise<Ticket | null> {
    return await this.prisma.ticket.findUnique({
      where: { ticketID },
    });
  }

  async updateTicket(
    ticketID: number,
    updateTicketslInput: UpdateTicketslInput,
  ): Promise<Ticket> {
    try {
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
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Ticket with ID ${ticketID} not found.`);
      } else {
        throw new InternalServerErrorException(
          'Error while updating the ticket.',
        );
      }
    }
  }

  async deleteTicket(ticketID: number): Promise<Ticket> {
    try {
      const result = await this.prisma.ticket.delete({ where: { ticketID } });

      if (result === null || result === undefined) {
        throw new NotFoundException(`Ticket with ID ${ticketID} not found.`);
      }
      return result;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Ticket with ID ${ticketID} not found.`);
      } else {
        throw new InternalServerErrorException(
          'Error while deleting the ticket.',
        );
      }
    }
  }
}
