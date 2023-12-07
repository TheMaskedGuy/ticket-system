import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Priority, Status } from '@prisma/client';

@InputType()
export class CreateTicketsInput {
  @Field(() => Int)
  @ApiProperty()
  userID: number;

  @Field()
  @ApiProperty()
  subject: string;

  @Field()
  @ApiProperty()
  description: string;

  @Field(() => Status,{ nullable: true })
  @ApiProperty({required: false})
  status?: Status;

  @Field(() => Priority, { nullable: true })
  @ApiProperty({required: false})
  priority?: Priority;

  @Field(() => Int, { nullable: true })
  @ApiProperty({required: false})
  assignedTo?: number;
}
