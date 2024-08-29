import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { RolesEntity } from './roles.entity';
import { PermissionsEntity } from './permissions.entity';

@Entity('roles_permissions')
export class RolesPermissionsEntity {
  @PrimaryColumn({ name: 'role_id' })
  roleId: string;

  @PrimaryColumn({ name: 'permission_id' })
  permissionId: string;

  @ManyToOne(() => RolesEntity, (rolesEntity) => rolesEntity.rolesPermissionsEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'role_id', referencedColumnName: 'roleId' })
  rolesEntity: RolesEntity;

  @ManyToOne(() => PermissionsEntity, (permissionsEntity) => permissionsEntity.rolesPermissionsEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'permission_id', referencedColumnName: 'permissionId' })
  permissionsEntity: PermissionsEntity;
}
