import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class DeleteUserInput {
  @Field()
  id!: number;
}

export default DeleteUserInput;
