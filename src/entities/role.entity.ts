import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import User from "./user.entity";
import { TypesUser } from "../enums/types.user";

@Entity()
export default class Role {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({
    type: "enum",
    enum: TypesUser,
    default: TypesUser.USER,
  })
  name: TypesUser;

  @Column()
  description: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
