import { IsEnum, IsString } from 'class-validator';
import { TaskStatusEnum } from '../entities/tasks.entity';
import { OmitType, PickType } from '@nestjs/swagger';

export class TaskDto {
    @IsString()
    userLoginEmail: string;

    @IsString()
    projectName: string;

    @IsString()
    task: string;

    @IsEnum(TaskStatusEnum)
    taskStatus: TaskStatusEnum;
}

export class CreateTaskDto extends OmitType(TaskDto, ['taskStatus']) {}

export class UpdateTaskDto extends PickType(TaskDto, ['userLoginEmail', 'projectName', 'taskStatus']) {}

export class DeleteTaskDto extends OmitType(TaskDto, ['taskStatus']){}
