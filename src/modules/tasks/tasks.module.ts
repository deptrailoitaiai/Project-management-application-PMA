import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksEntity } from './entities/tasks.entity';
import { UsersProjectsEntity } from '../linkTable/entities/usersProjects.entiety';
import { ProjectsModule } from '../projects/projects.module';
import { UsersModule } from '../users/users.module';
import { TasksController } from './controllers/tasks.controller';
import { TasksRepository } from './repository/tasks.repository';
import { TasksService } from './services/tasks.service';

@Module({
    imports: [TypeOrmModule.forFeature([TasksEntity, UsersProjectsEntity]), ProjectsModule, UsersModule],
    controllers: [TasksController],
    providers: [TasksRepository, TasksService],
    exports: [TasksService],
})
export class TasksModule {}
