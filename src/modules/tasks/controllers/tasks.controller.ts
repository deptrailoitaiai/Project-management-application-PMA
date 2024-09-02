import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateTaskDto, DeleteTaskDto, UpdateTaskDto } from '../dtos/tasks.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post('create')
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<InsertResult> {
        return await this.tasksService.createTask(
            createTaskDto.userLoginEmail,
            createTaskDto.projectName,
            createTaskDto.task,
        );
    }

    @Patch('update')
    async updateTask(@Body() updateTaskDto: UpdateTaskDto): Promise<UpdateResult> {
        return await this.tasksService.updateTask(
            updateTaskDto.userLoginEmail,
            updateTaskDto.projectName,
            updateTaskDto.taskStatus,
        );
    }

    @Delete('delete')
    async deleteTask(@Body() deleteTaskDto: DeleteTaskDto): Promise<DeleteResult> {
        return await this.tasksService.deleteTask(deleteTaskDto.userLoginEmail, deleteTaskDto.projectName, deleteTaskDto.task)
    }
}
