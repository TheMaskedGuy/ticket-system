import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller('tickets')
@ApiTags('Ticket')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  createTicket(@Body() createTicketDto: Prisma.TicketUncheckedCreateInput) {
    return this.ticketsService.createTicket(createTicketDto);
  }

  @Get('/users/:id')
  getAllTicketsForAUser(@Param('id') id: string) {
    return this.ticketsService.getAllTicketsForAUser(+id);
  }

  @Get(':id')
  getSingleTicket(@Param('id') id: string) {
    return this.ticketsService.getSingleTicket(+id);
  }

  @Put(':id')
  updateTicket(@Param('id') id: string, @Body() updateTicketDto: Prisma.TicketUpdateInput) {
    return this.ticketsService.updateTicket(+id, updateTicketDto);
  }

  @Delete(':id')
  deleteTicket(@Param('id') id: string) {
    return this.ticketsService.deleteTicket(+id);
  }
}
