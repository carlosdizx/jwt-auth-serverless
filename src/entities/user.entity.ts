import {Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToMany, JoinTable} from "typeorm";
import {Role} from "./role.entity";

@Entity({ name: "users" })
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "email", type: "varchar", unique: true })
  email: string;

  @Column({ name: "password", type: "varchar" })
  password: string;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
