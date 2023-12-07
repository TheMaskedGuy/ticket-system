import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Status, Priority } from '@prisma/client';


registerEnumType(Status, {
  name: 'Status',
});
registerEnumType(Priority, {
  name: 'Priority',
});

@ObjectType()
export class Ticket {
  @Field(() => Int)
  ticketID: number;

  @Field(() => Int)
  userID: number;

  @Field()
  subject: string;

  @Field()
  description: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Priority, {nullable: true})
  priority?: Priority;

  @Field(() => Int, {nullable: true})
  assignedTo?: number;

  @Field(() => Date, {nullable: true})
  createdAt?: Date;

  @Field(() => Date, {nullable: true})
  updatedAt?: Date;

  @Field(() => Date, {nullable: true})
  closedAt?: Date;
}
