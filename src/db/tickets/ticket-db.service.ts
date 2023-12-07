import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { TicketRepository } from 'src/db/tickets/ticket-db.repository';
import { CreateTicketsInput } from 'src/tickets/dto/create-tickets.input';
import { UpdateTicketslInput } from 'src/tickets/dto/update-tickets.input';

@Injectable()
export class TicketsDbService {
  constructor(private readonly ticketRepo: TicketRepository) {}

  async createTicket(createTicketInput: CreateTicketsInput) {
    try {
      return this.ticketRepo.createTicket(createTicketInput);
    } catch (error) {
      if (error.code === 'P2002' || error.code === 'P2011') {
        throw new BadRequestException(
          'Ticket with the provided details already exists.',
        );
      } else {
        throw new InternalServerErrorException(
          'Error while creating the ticket.',
        );
      }
    }
  }

  async getAllTicketsForAUser(userID: number) {
    try {
      return this.ticketRepo.getAllTicketsForAUser(userID);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while fetching tickets for the user',
      );
    }
  }

  async getSingleTicket(ticketID: number) {
    try {
      const ticket = await this.ticketRepo.getSingleTicket(ticketID);

      if (!ticket) {
        throw new NotFoundException(`Ticket with ID ${ticketID} not found.`);
      }

      return ticket;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while fetching the ticket',
      );
    }
  }

  async updateTicket(ticketID: number, updateTicketDto: UpdateTicketslInput) {
    try {
      return this.ticketRepo.updateTicket(ticketID, updateTicketDto);
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

  async deleteTicket(ticketID: number) {
    try {
      return this.ticketRepo.deleteTicket(ticketID);
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
