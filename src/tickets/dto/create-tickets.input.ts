import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Priority, Status } from '@prisma/client';

@InputType()
export class CreateTicketsInput {
  @Field(() => Int)
  userID: number;

  @Field()
  subject: string;

  @Field()
  description: string;

  @Field(() => Status,{ nullable: true })
  status: Status;

  @Field(() => Priority, { nullable: true })
  priority?: Priority;

  @Field(() => Int, { nullable: true })
  assignedTo?: number;
}
