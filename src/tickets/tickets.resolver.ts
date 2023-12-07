import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Ticket } from './entities/tickets.entity';
import { TicketsService } from './tickets.service';
import { CreateTicketsInput } from './dto/create-tickets.input';
import { UpdateTicketslInput } from './dto/update-tickets.input';

@Resolver(() => Ticket)
export class TicketResolver {
  constructor(private readonly ticketService: TicketsService) {}

  @Mutation(() => Ticket, { name: 'Create a ticket' })
  createTicket(
    @Args('createTicketInput') createTicketInput: CreateTicketsInput,
  ) {
    return this.ticketService.createTicket(createTicketInput);
  }

  @Query(() => [Ticket], { name: 'Get all tickets for a user' })
  getAllTicketsForAUser(@Args('userID', { type: () => Int }) userID: number) {
    return this.ticketService.getAllTicketsForAUser(userID);
  }

  @Query(() => Ticket, { name: 'Get a specific ticket' })
  getSingleTicket(@Args('ticketID', { type: () => Int }) ticketID: number) {
    return this.ticketService.getSingleTicket(ticketID);
  }

  @Mutation(() => Ticket, { name: 'Update a specific ticket' })
  updateTicket(
    @Args('ticketID', { type: () => Int }) ticketID: number,
    @Args('updateTicketInput') updateTicketInput: UpdateTicketslInput,
  ) {
    return this.ticketService.updateTicket(ticketID, updateTicketInput);
  }

  @Mutation(() => Ticket)
  removeTicket(@Args('ticketID', { type: () => Int }) ticketID: number) {
    return this.ticketService.deleteTicket(ticketID);
  }
}
