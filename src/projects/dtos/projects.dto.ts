import { IsEnum, IsString } from "class-validator";
import { ProjectStatusEnum, ProjectTypeEnum } from "../entities/projects.entity";

export class CreateProjectDto {
    @IsString()
    projectName: string;

    @IsEnum(ProjectTypeEnum)
    projectType: ProjectTypeEnum;
}

export class UpdateProjectDto {
    @IsString()
    projectName: string;

    @IsEnum(ProjectStatusEnum)
    projectStatus:ProjectStatusEnum
}

export class DeleteProjectDto {
    @IsString()
    projectName: string
}