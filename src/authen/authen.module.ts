import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsEntity } from './enities/permissions.entity';
import { RolesEntity } from './enities/roles.entity';
import { RolesPermissionsEntity } from './enities/rolesPermissions.entity';
import { UsersRolesEntity } from './enities/usersRoles.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PermissionsEntity,
            RolesEntity,
            RolesPermissionsEntity,
            UsersRolesEntity
        ])
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class AuthenModule {}
