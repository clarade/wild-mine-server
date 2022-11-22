import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AssignUserInput {
  @Field()
  email!: string;

  @Field()
  issueId!: number
}

export default AssignUserInput;
