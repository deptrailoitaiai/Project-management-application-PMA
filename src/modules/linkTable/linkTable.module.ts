import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartmentsProjectsEntity } from "./entities/departmentsProjects.entity";
import { ProjectsClientsEntity } from "./entities/projectsClients.entity";
import { ProjectsTechnologiesEntity } from "./entities/projectsTechnologies.entity";
import { UsersTechnologiesEntity } from "./entities/usersTechnologies.entity";
import { UsersProjectsEntity } from "./entities/usersProjects.entity";
import { UsersTechnologiesService } from "./services/usersTechnologies.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            DepartmentsProjectsEntity,
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