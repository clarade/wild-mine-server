import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class DeleteProjectInput {
  @Field()
  id!: number;
}

export default DeleteProjectInput;
