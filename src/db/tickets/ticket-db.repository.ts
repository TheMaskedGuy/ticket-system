import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { DBService } from '../db.service';
import { Ticket } from '@prisma/client';
import { CreateTicketsInput } from 'src/tickets/dto/create-tickets.input';
import { UpdateTicketslInput } from 'src/tickets/dto/update-tickets.input';

@Injectable()
export class TicketRepository {
  constructor(private readonly prisma: DBService) {}

  async createTicket(createTicketsInput: CreateTicketsInput): Promise<Ticket> {
    try {
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
    } catch (error) {
      if (error.code === 'P2002' || error.code === 'P2011') {
        // Unique constraint violation
        throw new BadRequestException('Ticket with the provided details already exists.');
      } else {
        throw new InternalServerErrorException('Error while creating the ticket.');
      }
    }
  }

  async getAllTicketsForAUser(userID: number): Promise<Ticket[]> {
    try {
      return await this.prisma.ticket.findMany({ where: { userID } });
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching tickets for the user.');
    }
  }

  async getSingleTicket(ticketID: number): Promise<Ticket | null> {
    try {
      const ticket = await this.prisma.ticket.findUnique({
        where: { ticketID },
      });

      if (!ticket) {
        throw new NotFoundException(`Ticket with ID ${ticketID} not found.`);
      }

      return ticket;
    } catch (error) {
      throw new InternalServerErrorException('Error while fetching the ticket.');
    }
  }

  async updateTicket(ticketID: number, updateTicketslInput: UpdateTicketslInput): Promise<Ticket> {
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
        throw new InternalServerErrorException('Error while updating the ticket.');
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
        throw new InternalServerErrorException('Error while deleting the ticket.');
      }
    }
  }
}
