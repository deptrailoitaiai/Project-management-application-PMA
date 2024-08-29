import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolesPermissionsEntity } from "./rolesPermissions.entity";

@Entity('permissions')
export class PermissionsEntity {
   @PrimaryGeneratedColumn('uuid', { name: 'permission_id' })
   permissionId: string;

   @Column({ name: 'module', nullable: false })
   module: string;

   @Column({ name: 'action', nullable: false })
   action: string;

   @OneToMany(() => RolesPermissionsEntity, rolesPermissionsEntity => rolesPermissionsEntity.permissionsEntity)
   rolesPermissionsEntity: RolesPermissionsEntity[];
}