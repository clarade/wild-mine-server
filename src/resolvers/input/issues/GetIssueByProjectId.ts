import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class GetIssueByProjectIdInput {
  @Field()
  project_id!: number;
}

export default GetIssueByProjectIdInput;