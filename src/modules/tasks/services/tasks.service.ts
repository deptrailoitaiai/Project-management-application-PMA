import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../repository/tasks.repository';
import { ProjectsService } from 'src/modules/projects/services/projects.service';
import { UsersService } from 'src/modules/users/services/users.service';
import { TasksEntity, TaskStatusEnum } from '../entities/tasks.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(
        private readonly tasksRepo: TasksRepository,
        private readonly projectsService: ProjectsService,
        private readonly usersService: UsersService,
    ) {}

    async getTaks(userId: string, projectName: string): Promise<TasksEntity> {
        try {
            const getProjectByName = await this.projectsService.getProjectByIdOrName(undefined, projectName);
            if (!getProjectByName) {
                throw new Error('Project not found');
            }

            return await this.tasksRepo.getTaskByUserIdAndProjectId(userId, getProjectByName.projectId);
        } catch (error) {
            console.log(error);
        }
    }

    async createTask(userEmail: string, projectName: string, task: string): Promise<InsertResult> {
        try {
            const [userEntity, projectEntity] = await Promise.all([
                this.usersService.getUserByIdOrEmail(undefined, userEmail),
                this.projectsService.getProjectByIdOrName(undefined, projectName),
            ]);

            if (!userEntity || !projectEntity) {
                throw new Error('user or project not found');
            }

            return await this.tasksRepo.createTask(userEntity.userId, projectEntity.projectId, task);
        } catch (error) {
            console.error(error);
        }
    }

    async updateTask(userEmail: string, projectName: string, updateTaskStatus: TaskStatusEnum): Promise<UpdateResult> {
        try {
            const [getUser, getProject] = await Promise.all([
                this.usersService.getUserByIdOrEmail(undefined, userEmail),
                this.projectsService.getProjectByIdOrName(undefined, projectName)
            ])

            if (!getProject || !getUser) {
                throw new Error('Project or user not found');
            }

            return await this.tasksRepo.updateTask(getUser.userId, getProject.projectId, updateTaskStatus);
        } catch (error) {
            console.log(error)
        }
    }

    async deleteTask(userEmail: string, projectName: string, task: string): Promise<DeleteResult> {
        try {
            const [getUser, getProject] = await Promise.all([
                this.usersService.getUserByIdOrEmail(undefined, userEmail),
                this.projectsService.getProjectByIdOrName(undefined, projectName)
            ])

            if (!getProject || !getUser) {
                throw new Error('Project or user not found');
            }

            return await this.tasksRepo.deleteTask(getUser.userId, getProject.projectId, task);
        } catch (error) {
            console.log(error)
        }
    }
}
