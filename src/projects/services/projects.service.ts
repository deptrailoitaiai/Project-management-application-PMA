import { Injectable } from '@nestjs/common';
import { ProjectsRepository } from '../repository/projects.repository';
import { ProjectsEntity, ProjectStatusEnum, ProjectTypeEnum } from '../entities/projects.entity';
import { ResponseFail, ResponseSuccess, ResponseTypeFail, ResponseTypeSuccess } from 'src/config/responsiveType';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Injectable()
export class ProjectsService {
    constructor(private readonly projectsRepo: ProjectsRepository) {}

    async getProjectByIdOrName(
        projectId?: string,
        projectName?: string,
    ): Promise<ProjectsEntity> {
        try {
            return await this.projectsRepo.getProjectByIdOrName(projectId, projectName);
        } catch (error) {
            console.log(error);
        }
    }

    async createProject(
        projectName: string,
        projectType: ProjectTypeEnum,
    ): Promise<InsertResult> {
        try {
            return await this.projectsRepo.createProject(projectName, projectType);
        } catch (error) {
            console.log(error);
        }
    }

    async updateProject(
        projectName: string,
        projectStatus: ProjectStatusEnum,
    ): Promise<UpdateResult> {
        try {
            const getProjectByName = await this.projectsRepo.getProjectByIdOrName(undefined, projectName);

            return await this.projectsRepo.updateProject(getProjectByName.projectId, projectStatus);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProject(projectName: string): Promise<DeleteResult> {
        try {
            const getProjectByName = await this.projectsRepo.getProjectByIdOrName(undefined, projectName);

            return await this.projectsRepo.deleteProject(getProjectByName.projectId);
        } catch (error) {
            console.log(error);
        }
    }
}
