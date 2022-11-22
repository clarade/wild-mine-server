import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class CreateIssueInput {
  @Field()
  name!: string;

  @Field()
  description!: string;

	@Field()
	project_name!: string;

	@Field()
	status!: string;

	@Field()
	priority!: string;

	@Field()
	project_id!: number;

	@Field()
	sessionId!: string;

  @Field()
  created_at!: Date;

	@Field()
	updated_at!: Date;
}

export default CreateIssueInput;