import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class GetProjectInput {
  @Field()
  id!: number;
}

export default GetProjectInput;