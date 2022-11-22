
import CreateOrganizationInput from "../../resolvers/input/organization/CreateOrganizationInput";
import DeleteOrganizationInput from "../../resolvers/input/organization/DeleteOrganizationInput";
import GetOrganizationInput from "../../resolvers/input/organization/GetOrganizationInput";
import Organization from "../Organization";

class OrganizationUtils extends Organization {
  static async createOrganization({ name, description }: CreateOrganizationInput) {
      const organization = new Organization();
  
      organization.name = name;
      organization.description = description;
  
      await organization.save();
  
      return organization;
  }

  static async deleteOrganization({ id }: DeleteOrganizationInput) {
    const organization = await Organization.findOneOrFail({ id });

    return await Organization.remove(organization);
  }

  static async getOrganizationById({ id }: GetOrganizationInput) {
    return await Organization.findOneOrFail({ id });
  }
};

export default OrganizationUtils