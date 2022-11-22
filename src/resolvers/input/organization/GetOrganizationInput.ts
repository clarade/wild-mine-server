import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class GetOrganizationInput {
  @Field()
  id!: number;
}

export default GetOrganizationInput;