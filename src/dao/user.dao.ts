import User from "../entities/user.entity";
import repository from "../utils/databaseConnection";
import Role from "../entities/role.entity";

export default class UserDao {
  private static getRepository = async () =>{
    return await repository(User);
  }

  public static create = async (email: string, password: string, roles: Role[]) => {
    const repository = await this.getRepository();
    const user = repository.create({ email, password, roles });
    return repository.save(user);
  };

  public static findByEmail = async (email: string) => {
    const repository = await this.getRepository();
    return repository.findOne({ where: { email } });
  };

  public static findAll = async () => {
    const repository = await this.getRepository();
    return repository.find();
  };

  public static update = async (userId: string, roles?: Role[], password?: string) => {
    const repository = await this.getRepository();
    const user = await repository.findOne({ where: { id: userId } });

    if (!user) return null;
    if (roles) user.roles = roles;
    if (password) user.password = password;

    return repository.save(user);
  };
}
