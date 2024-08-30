import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { PermissionsEntity } from 'src/modules/authen/enities/permissions.entity'; 
import { RolesEntity } from 'src/modules/authen/enities/roles.entity'; 
import { RolesPermissionsEntity } from 'src/modules/authen/enities/rolesPermissions.entity'; 
import { UsersRolesEntity } from 'src/modules/authen/enities/usersRoles.entity'; 
import { ClientsEntity } from 'src/modules/clients/entities/clients.entity'; 
import { DepartmentsEntity } from 'src/modules/departments/entities/departments.entity'; 
import { DepartmentsProjectsEntity } from 'src/modules/linkTable/entities/departmentsProjects.entity'; 
import { ProjectsClientsEntity } from 'src/modules/linkTable/entities/projectsClients.entity'; 
import { ProjectsTechnologiesEntity } from 'src/modules/linkTable/entities/projectsTechnologies.entity'; 
import { UsersTechnologiesEntity } from 'src/modules/linkTable/entities/usersTechnologies.entity'; 
import { ProjectsEntity } from 'src/modules/projects/entities/projects.entity'; 
import { TasksEntity } from 'src/modules/tasks/entities/tasks.entity'; 
import { UsersProjectsEntity } from 'src/modules/linkTable/entities/usersProjects.entiety'; 
import { TechnologiesEntity } from 'src/modules/technologies/entities/technologies.entity'; 
import { UsersEntity } from 'src/modules/users/entities/users.entity'; 
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
    DepartmentsEntity,
    DepartmentsProjectsEntity
  ],
  synchronize: true,
  logging: true,
});
