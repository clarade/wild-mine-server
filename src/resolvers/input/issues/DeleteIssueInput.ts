import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class DeleteIssueInput {
  @Field()
  id!: number;
}

export default DeleteIssueInput;
