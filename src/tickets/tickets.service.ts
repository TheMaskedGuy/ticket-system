import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  async createTicket(createTicketDto: Prisma.TicketUncheckedCreateInput) {
    return this.prisma.ticket.create({
      data: createTicketDto,
    });
  }

  async getAllTicketsForAUser(userID: number) {
    return this.prisma.ticket.findMany({where:{userID}});
  }

  async getSingleTicket(ticketID: number) {
    return this.prisma.ticket.findUnique({
      where: {
        ticketID,
      },
    });
  }

  updateTicket(ticketID: number, updateTicketDto: Prisma.TicketUpdateInput) {
    return this.prisma.ticket.update({
      where: { ticketID },
      data: updateTicketDto,
    });
  }

 async deleteTicket(ticketID: number) {
    return this.prisma.ticket.delete({where: {ticketID}});
  }
}
