import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class UpdateStatusInput {
  @Field()
  status!: string;

  @Field()
  id!: number
}

export default UpdateStatusInput;
