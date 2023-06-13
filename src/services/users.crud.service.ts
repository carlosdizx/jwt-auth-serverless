import UserDao from "../dao/user.dao";
import RoleDao from "../dao/role.dao";
import responseLambda from "../utils/response";
import { DocumentType } from "../enums/types.document";

export default class UsersCrudService {
  public static createUser = async ({
    email,
    password,
    rolesIds,
    firstName,
    lastName,
    documentNumber,
    documentType,
  }: {
    email: string;
    password: string;
    rolesIds: string[];
    firstName: string;
    lastName: string;
    documentNumber: string;
    documentType: DocumentType;
  }) => {
    try {
      const userFound = await UserDao.findByEmail(email);
      if (userFound)
        return responseLambda(409, { message: "User already exists" });
      const roles = await RoleDao.findRolesByIds(rolesIds);
      if (roles.length === 0)
        return responseLambda(400, { message: "Roles are not found" });
      const user = await UserDao.create(email, password, roles);
      return responseLambda(200, {
        message: "User created successfully",
        email,
        roles: roles.map((role) => role.description),
        id: user.id,
      });
    } catch (error) {
      console.error(error);
      return responseLambda(500, {
        message: "Error creating user, verify properties",
        error,
      });
    }
  };
}
