import User from "../entities/user.entity";
import { Repository } from "typeorm";
import repository from "../utils/databaseConnection";
import Role from "../entities/role.entity";

export default class UserDao {
  private userRepository: Repository<User>;

  constructor() {
    this.initialize().then();
  }

  private async initialize() {
    this.userRepository = await repository(User);
  }

  public create = async (email: string, password: string, roles: Role[]) => {
    const user = this.userRepository.create({ email, password, roles });
    return this.userRepository.save(user);
  };

  public findByEmail = async (email: string) => {
    return this.userRepository.findOne({ where: { email } });
  };

  public findAll = async () => {
    return this.userRepository.find();
  }

  public update = async (userId: string, roles?: string[], password?: string) => {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user)
      return null;
    if (roles)
      user.roles = roles;
    if (password)
      user.password = password;

    return this.userRepository.save(user);
  }
}
