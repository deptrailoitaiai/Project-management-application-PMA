import { IsEnum, IsString } from "class-validator";
import { TaskStatusEnum } from "../entities/tasks.entity";

export class CreateTaskDto {
    @IsString()
    userLoginEmail: string;

    @IsString()
    projectName: string;

    @IsString()
    task: string;
}

export class UpdateTaskDto {
    @IsString()
    userLoginEmail: string;

    @IsString()
    projectName: string;

    @IsEnum(TaskStatusEnum)
    taskStatus: TaskStatusEnum
}

export class DeleteTaskDto {
    @IsString()
    userLoginEmail: string;

    @IsString()
    projectName: string;

    @IsString()
    task: string;
}