import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class DeleteOrganizationInput {
  @Field()
  id!: number;
}

export default DeleteOrganizationInput;
