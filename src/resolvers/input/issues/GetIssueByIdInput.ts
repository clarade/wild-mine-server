import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class GetIssueByIdInput {
  @Field()
  id!: number;
}

export default GetIssueByIdInput;