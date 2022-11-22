import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AssignUserInput {
  @Field()
  email!: string;

  @Field()
  projectId!: number;
}

export default AssignUserInput;
