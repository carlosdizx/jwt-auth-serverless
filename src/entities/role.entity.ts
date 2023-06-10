import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import User from "./user.entity";
import { TypesUser } from "../enums/types.user";

@Entity({ name: "roles" })
export default class Role {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({
    type: "enum",
    enum: TypesUser,
    default: TypesUser.USER,
    unique: true,
  })
  name: TypesUser;

  @Column({ name: "description", type: "varchar", unique: true })
  description: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
