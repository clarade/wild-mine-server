import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class SignInInput {
  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  sessionId!: string;
}

export default SignInInput;
