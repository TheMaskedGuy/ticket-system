
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateTicketsInput } from './create-tickets.input';
import { Priority, Status } from '@prisma/client';

@InputType()
export class UpdateTicketslInput extends PartialType(
  CreateTicketsInput,
) {
  // @Field(() => Int)
  // ticketID: number;

  @Field(() => Int)
  userID: number;

  @Field()
  subject: string;

  @Field()
  description: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Priority, { nullable: true })
  priority?: Priority;

  @Field(() => Int, { nullable: true })
  assignedTo?: number;

  @Field(() => Date, { nullable: true })
  closedAt?: Date;
}
