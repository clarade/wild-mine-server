import md5 from "md5";
import CreateUserInput from "../../resolvers/input/user/CreateUserInput";
import DeleteWilderInput from "../../resolvers/input/user/DeleteUserInput";
import User from "../User";
import GetUserByEmailInput from "../../resolvers/input/user/getUserByEmailInput";

class UserUtils extends User {
  static async createUser({ first_name, last_name, email, password, roles, created_at }: CreateUserInput) {
      const user = new User();
  
      user.first_name = first_name;
      user.last_name = last_name;
      user.email = email;
      user.password = md5(password);
      user.roles = roles;
      user.created_at = created_at;
  
      await user.save();
      return user;
  }

  static async deleteUser({ id }: DeleteWilderInput) {
    const user = await User.findOneOrFail({ id });

    return await User.remove(user);
  }

  static async getUserByEmail({ email }: GetUserByEmailInput ) {
    return await User.findOneOrFail({ where: { email }, relations: ["issues_assigned", "project_assigned"] });
  }
};

export default UserUtils;