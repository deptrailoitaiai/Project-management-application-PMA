import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsEntity } from './entities/permissions.entity';
import { RolesEntity } from './entities/roles.entity';
import { RolesPermissionsEntity } from './entities/rolesPermissions.entity';
import { UsersRolesEntity } from './entities/usersRoles.entity';

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
