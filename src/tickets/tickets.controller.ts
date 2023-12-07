import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateTicketslInput } from './dto/update-tickets.input';
import { CreateTicketsInput } from './dto/create-tickets.input';
import { ResponseUtil } from './response.util';

@Controller('tickets')
@ApiTags('Ticket')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  async createTicket(@Body() createTicketDto: CreateTicketsInput) {
    const data = await this.ticketsService.createTicket(createTicketDto);
    return ResponseUtil.success(data, 'Created the ticket successfully!');
  }

  @Get('/users/:id')
  async getAllTicketsForAUser(@Param('id') id: string) {
    const data = await this.ticketsService.getAllTicketsForAUser(+id);
    return ResponseUtil.success(
      data,
      'Tickets fetched for the user successfully!',
    );
  }

  @Get(':id')
  async getSingleTicket(@Param('id') id: string) {
    const data = await this.ticketsService.getSingleTicket(+id);
    return ResponseUtil.success(data, 'Specific ticket fetched successfully!');
  }

  @Put(':id')
  async updateTicket(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketslInput,
  ) {
    const data = await this.ticketsService.updateTicket(+id, updateTicketDto);
    return ResponseUtil.success(data, 'Specific ticket updated successfully!');
  }

  @Delete(':id')
  async deleteTicket(@Param('id') id: string) {
    const data = await this.ticketsService.deleteTicket(+id);
    return ResponseUtil.success(data, 'Specific ticket deleted successfully!');
  }
}
