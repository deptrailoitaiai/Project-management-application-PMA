import { Body, Controller, Post } from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';
import { CreateProjectDto, DeleteProjectDto, UpdateProjectDto } from '../dtos/projects.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService) {}

    @Post('create')
    async createProject(@Body() createProjectDto: CreateProjectDto): Promise<InsertResult> {
        return await this.projectService.createProject(createProjectDto.projectName, createProjectDto.projectType);
    }

    @Post('/update')
    async updateProject(@Body() updateProjectDto: UpdateProjectDto): Promise<UpdateResult> {
        return await this.projectService.updateProject(updateProjectDto.projectName, updateProjectDto.projectStatus);
    }

    @Post('delete')
    async DeleteProjectDto(@Body() deleteProjectDto: DeleteProjectDto): Promise<DeleteResult> {
        return await this.projectService.deleteProject(deleteProjectDto.projectName);
    }
}
