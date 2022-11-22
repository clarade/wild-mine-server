import { Args, Mutation, Query, Resolver } from 'type-graphql';

import Organization from '../models/Organization';
import CreateOrganizationInput from './input/organization/CreateOrganizationInput';
import DeleteOrganizationInput from './input/organization/DeleteOrganizationInput';
import GetOrganizationInput from './input/organization/GetOrganizationInput';
import OrganizationUtils from '../models/utils/OrganizationUtils';

@Resolver(Organization)
class OrganizationResolver {
  @Query(() => [Organization])
	async Organizations() {
		return await Organization.find();
	}

	@Mutation(() => Organization)
	async createOrganization(
		@Args()
		{ name, description	}: CreateOrganizationInput
	) {
		return await OrganizationUtils.createOrganization({
			name,
			description,
		})
	}

	@Mutation(() => Organization)
	async deleteOrganization(@Args() { id }: DeleteOrganizationInput) {
		return OrganizationUtils.deleteOrganization({ id });
	}

	@Query(() => Organization)
	async getOrganizationById(@Args() { id }: GetOrganizationInput) {
		return OrganizationUtils.getOrganizationById({ id });
	}

}

export default OrganizationResolver;
