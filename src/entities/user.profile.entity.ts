import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToOne, JoinColumn } from "typeorm";
import User from "./user.entity";
import {DocumentType} from "../enums/types.document";
@Entity({ name: "user_profiles" })
export default class UserProfile extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ name: "first_name", type: "varchar" })
    firstName: string;

    @Column({ name: "last_name", type: "varchar" })
    lastName: string;

    @Column({ name: "document_number", type: "varchar" })
    documentNumber: string;

    @Column({ name: "document_type", type: "enum", enum: DocumentType, default: DocumentType.CitizenshipCard })
    documentType: DocumentType;

    @OneToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;
}
