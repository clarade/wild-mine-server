import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class UpdatePriorityInput {
  @Field()
  priority!: string;

  @Field()
  id!: number
}

export default UpdatePriorityInput;
