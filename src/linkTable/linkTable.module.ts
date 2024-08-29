import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartmentsProjectsEntity } from "./entities/departmentsProjects.entity";
import { DepartmentsUsersEntity } from "./entities/departmentsUsers.entity";
import { ProjectsClientsEntity } from "./entities/projectsClients.entity";
import { ProjectsTechnologiesEntity } from "./entities/projectsTechnologies.entity";
import { UsersTechnologiesEntity } from "./entities/usersTechnologies.entity";
import { UsersProjectsEntity } from "./entities/usersProjects.entiety";
import { UsersTechnologiesService } from "./services/usersTechnologies.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            DepartmentsProjectsEntity,
            DepartmentsUsersEntity,
            ProjectsClientsEntity,
            ProjectsTechnologiesEntity,
            UsersTechnologiesEntity,
            UsersProjectsEntity
        ])
    ],
    controllers: [],
    providers: [
        UsersTechnologiesService
    ],
    exports: []
})
export class LinkTableModule {}