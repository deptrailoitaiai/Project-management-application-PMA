import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksEntity, TaskStatusEnum } from '../entities/tasks.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TasksRepository {
    constructor(@InjectRepository(TasksEntity) private readonly tasksRepo: Repository<TasksEntity>) {}

    async getTaskByUserIdAndProjectId(userId: string, projectId: string): Promise<TasksEntity> {
        try {
            return await this.tasksRepo.findOne({
                where: {
                    userId: userId,
                    projectId: projectId,
                },
            });
        } catch (error) {
            throw error;
        }
    }

    async createTask(userId: string, projectId: string, task: string): Promise<InsertResult> {
        try {
            return await this.tasksRepo.insert({
                userId: userId,
                projectId: projectId,
                task: task,
            });
        } catch (error) {
            throw error;
        }
    }

    async updateTask(userId: string, projectId: string, taskStatus: TaskStatusEnum): Promise<UpdateResult> {
        try {
            return await this.tasksRepo.update({ userId: userId, projectId: projectId }, { taskStatus: taskStatus });
        } catch (error) {
            throw error;
        }
    }

    async deleteTask(userId: string, projectId: string, task: string): Promise<DeleteResult> {
        try {
            return await this.tasksRepo.delete({ userId: userId, projectId: projectId, task: task });
        } catch (error) {
            throw error;
        }
    }
}
