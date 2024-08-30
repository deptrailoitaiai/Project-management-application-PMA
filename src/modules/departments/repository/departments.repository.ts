import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentsEntity } from '../entities/departments.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class DepartmentsRepository {
    constructor(@InjectRepository(DepartmentsEntity) private readonly departmentsRepo: Repository<DepartmentsEntity>) {}

    async getDepartmentByIdOrName(departmentId: string, departmentName: string): Promise<DepartmentsEntity> {
        try {
            return await this.departmentsRepo.findOne({
                where: departmentId ? { departmentId: departmentId } : { department: departmentName },
            });
        } catch (error) {
            throw error;
        }
    }

    async createDepartment(departmentName: string, description: string): Promise<InsertResult> {
        try {
            return await this.departmentsRepo.insert({
                department: departmentName,
                description: description,
            });
        } catch (error) {
            throw error;
        }
    }

    async updateDepartment(
        departmentId: string,
        updateDepartmentName?: string,
        updateDescription?: string,
    ): Promise<UpdateResult> {
        try {
            const updateDepartment = this.departmentsRepo.create({
                department: updateDepartmentName,
                description: updateDescription,
            });

            const filteredUpdateDepartmentObject = Object.fromEntries(
                Object.entries(updateDepartment).filter((index) => index[1] !== undefined),
            );

            return await this.departmentsRepo.update({ departmentId: departmentId }, filteredUpdateDepartmentObject);
        } catch (error) {
            throw error;
        }
    }

    async deleteDepartment(departmentId: string): Promise<DeleteResult> {
        try {
            return await this.departmentsRepo.delete({ departmentId: departmentId });
        } catch (error) {
            throw error;
        }
    }
}
