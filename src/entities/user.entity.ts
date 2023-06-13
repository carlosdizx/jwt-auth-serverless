import {Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToMany, JoinTable, OneToOne, JoinColumn} from "typeorm";
import Role from "./role.entity";
import UserProfile from "./user.profile.entity";

@Entity({ name: "users" })
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "email", type: "varchar", unique: true })
  email: string;

  @Column({ name: "password", type: "varchar" })
  password: string;

  @OneToOne(() => UserProfile)
  @JoinColumn({ name: "profile_id" })
  profile: UserProfile;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
