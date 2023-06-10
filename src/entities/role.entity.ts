import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import User from "./user.entity";
import { TypesRoles } from "../enums/types.roles";

@Entity({ name: "roles" })
export default class Role {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({
    type: "enum",
    enum: TypesRoles,
    default: TypesRoles.USER,
    unique: true,
  })
  name: TypesRoles;

  @Column({ name: "description", type: "varchar", unique: true })
  description: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
