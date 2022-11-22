import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class CreateOrganizationInput {
  @Field()
  name!: string;

  @Field()
  description?: string;

}

export default CreateOrganizationInput;
