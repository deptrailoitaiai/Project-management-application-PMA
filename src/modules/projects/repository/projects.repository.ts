import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectsEntity, ProjectStatusEnum, ProjectTypeEnum } from '../entities/projects.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProjectsRepository {
    constructor(@InjectRepository(ProjectsEntity) private readonly projectsRepo: Repository<ProjectsEntity>) {}

    async getProjectByIdOrName(projectId?: string, projectName?: string): Promise<ProjectsEntity> {
        try {
            return await this.projectsRepo.findOne({
                where: projectId ? { projectId: projectId } : { projectName: projectName },
            });
        } catch (error) {
            throw error;
        }
    }

    async createProject(prjName: string, prjType: ProjectTypeEnum): Promise<InsertResult> {
        try {
            return await this.projectsRepo.insert({
                projectName: prjName,
                projectType: prjType,
            });
        } catch (error) {
            throw error;
        }
    }

    async deleteProject(projectId: string): Promise<DeleteResult> {
        try {
            return await this.projectsRepo.delete({ projectId: projectId });
        } catch (error) {
            throw error;
        }
    }

    async updateProject(projectId: string, projectStatus: ProjectStatusEnum): Promise<UpdateResult> {
        try {
            return await this.projectsRepo.update({ projectId: projectId }, { projectStatus: projectStatus });
        } catch (error) {
            throw error;
        }
    }
}
