import { Args, Resolver, Mutation, Ctx, Query } from "type-graphql";
import Session from "../models/Session";

import User from "../models/User";
import LoginInput from "./input/user/LoginInput";
import SessionUtils from "../models/utils/SessionUtils";
import { Context } from "../apollo-server";

@Resolver(Session)
class SessionResolver {
  @Mutation(() => User)
  async signIn(
    @Ctx() context: Context,
    @Args() { email, password }: LoginInput
  ) {
    const { sessionId } = context;

    return SessionUtils.signIn({ email, password, sessionId });
  }

  @Query(() => User)
  async userInfo(@Ctx() context: Context) {
    const { sessionId } = context;

    const session = await SessionUtils.userInfo({ sessionId });

    return session;
    
  }

  @Query(() => User)
  async userWithRelations(@Ctx() context: Context) {
    const { sessionId } = context;
    console.log(sessionId);

    return await SessionUtils.userWithRelations({ sessionId });    
  }
}

export default SessionResolver;
