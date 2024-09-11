import { UsersEntity } from "src/modules/users/entities/users.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { RolesEntity } from "./roles.entity";

@Entity('users_roles')
export class UsersRolesEntity {
    @PrimaryColumn({ name: 'user_id' })
    userId: string;

    @PrimaryColumn({ name: 'role_id' })
    roleId: string;

    @ManyToOne(() => UsersEntity, usersEnity => usersEnity.usersRolesEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id', referencedColumnName: 'userId' })
    usersEntity: UsersEntity;

    @ManyToOne(() => RolesEntity, rolesEntity => rolesEntity.usersRolesEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'role_id', referencedColumnName: 'roleId' })
    rolesEntity: RolesEntity;

}