
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateTicketsInput } from './create-tickets.input';
import { Priority, Status } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateTicketslInput extends PartialType(
  CreateTicketsInput,
) {
  @Field(() => Int,{ nullable: true })
  @ApiProperty({required: false})
  userID?: number;

  @Field({ nullable: true })
  @ApiProperty({required: false})
  subject?: string;

  @Field({ nullable: true })
  @ApiProperty({required: false})
  description?: string;

  @Field(() => Status,{ nullable: true })
  @ApiProperty({required: false})
  status?: Status;

  @Field(() => Priority, { nullable: true })
  @ApiProperty({required: false})
  priority?: Priority;

  @Field(() => Int, { nullable: true })
  @ApiProperty({required: false})
  assignedTo?: number;

  @Field(() => Date, { nullable: true })
  @ApiProperty({required: false})
  closedAt?: Date;
}
