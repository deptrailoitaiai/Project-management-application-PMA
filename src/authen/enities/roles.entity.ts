import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersRolesEntity } from "./usersRoles.entity";
import { RolesPermissionsEntity } from "./rolesPermissions.entity";

@Entity('roles')
export class RolesEntity { 
    @PrimaryGeneratedColumn('uuid', { name: 'role_id' })
    roleId: string;

    @Column({ name: 'role_name', nullable: false })
    roleName: string;

    @OneToMany(() => UsersRolesEntity, usersRolesEntity => usersRolesEntity.rolesEntity)
    usersRolesEntity: UsersRolesEntity[];
    
    @OneToMany(() => RolesPermissionsEntity, rolesPermissionsEntity => rolesPermissionsEntity.rolesEntity)
    rolesPermissionsEntity: RolesPermissionsEntity[];
}