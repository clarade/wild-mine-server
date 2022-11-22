import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class UserInfoInput {
  @Field()
  sessionId!: string;

}

export default UserInfoInput;
