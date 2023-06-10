import repository from "../utils/databaseConnection";
import { Repository } from "typeorm";
import Role from "../entities/role.entity";

export default class RoleDao {
  private static async getRepository(): Promise<Repository<Role>> {
    return await repository(Role);
  }

  public static findRolesByIds = async (ids: string[]) => {
    const roleRepository = await RoleDao.getRepository();
    try {
      return roleRepository
        .createQueryBuilder("role")
        .where("role.id IN (:...ids)", { ids })
        .getMany();
    } catch (e) {
      return [];
    }
  };

  public static findRoleById = async (id: string) => {
    const roleRepository = await RoleDao.getRepository();
    return roleRepository.findOne({ where: { id } });
  };
}
