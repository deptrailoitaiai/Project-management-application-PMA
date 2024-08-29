import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { PermissionsEntity } from 'src/authen/enities/permissions.entity';
import { RolesEntity } from 'src/authen/enities/roles.entity';
import { RolesPermissionsEntity } from 'src/authen/enities/rolesPermissions.entity';
import { UsersRolesEntity } from 'src/authen/enities/usersRoles.entity';
import { ClientsEntity } from 'src/clients/entities/clients.entity';
import { DepartmentsEntity } from 'src/departments/entities/departments.entity';
import { DepartmentsProjectsEntity } from 'src/linkTable/entities/departmentsProjects.entity';
import { DepartmentsUsersEntity } from 'src/linkTable/entities/departmentsUsers.entity';
import { ProjectsClientsEntity } from 'src/linkTable/entities/projectsClients.entity';
import { ProjectsTechnologiesEntity } from 'src/linkTable/entities/projectsTechnologies.entity';
import { UsersTechnologiesEntity } from 'src/linkTable/entities/usersTechnologies.entity';
import { ProjectsEntity } from 'src/projects/entities/projects.entity';
import { TasksEntity } from 'src/tasks/entities/tasks.entity';
import { UsersProjectsEntity } from 'src/linkTable/entities/usersProjects.entiety';
import { TechnologiesEntity } from 'src/technologies/entities/technologies.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT: number = Number(process.env.MYSQL_PORT);
const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

export const MySqlConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  entities: [
    // __dirname + '/../**/*.entity{.ts,.js}',
    TechnologiesEntity,
    UsersTechnologiesEntity,
    UsersProjectsEntity,
    TasksEntity,
    ProjectsTechnologiesEntity,
    ProjectsClientsEntity,
    UsersEntity,
    ProjectsEntity,
    ClientsEntity,
    UsersRolesEntity,
    RolesEntity,
    PermissionsEntity,
    RolesPermissionsEntity,
    DepartmentsUsersEntity,
    DepartmentsEntity,
    DepartmentsProjectsEntity
  ],
  synchronize: true,
  logging: true,
});
