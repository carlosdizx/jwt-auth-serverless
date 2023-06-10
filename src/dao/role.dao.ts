import { Repository } from "typeorm";
import repository from "../utils/databaseConnection";
import Role from "../entities/role.entity";

export default class RoleDao {
  private roleRepository: Repository<Role>;

  constructor() {
    this.initialize().then();
  }

  private async initialize() {
    this.roleRepository = await repository(Role);
  }

  public getRolesByIds = (ids: string[]) => {
    return this.roleRepository
      .createQueryBuilder("role")
      .where("role.id IN (:...ids)", { ids })
      .getMany();
  };

  public getRoleById = async (id: string): Promise<Role | undefined> => {
    return this.roleRepository.findOne({ where: { id } });
  };
}
