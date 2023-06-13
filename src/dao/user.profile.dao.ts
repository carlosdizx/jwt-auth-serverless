import repository from "../utils/databaseConnection";
import UserProfile from "../entities/user.profile.entity";
import { DocumentType } from "../enums/types.document";
import User from "../entities/user.entity";

export default class UserProfileDao {
  private static getRepository = async () => {
    return await repository(UserProfile);
  };

  public static create = async (
    firstName: string,
    lastName: string,
    documentNumber: string,
    documentType: DocumentType,
    user: User
  ) => {
    const repository = await this.getRepository();
    const userProfile = repository.create({firstName, lastName, documentNumber, documentType, user});
    return repository.save(userProfile);
  };
}
