import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class GetUserByEmailInput {
  @Field()
  email!: string;
}

export default GetUserByEmailInput;
