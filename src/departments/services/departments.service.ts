import { Injectable } from '@nestjs/common';
import { DepartmentsEntity } from '../entities/departments.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { DepartmentsRepository } from '../repository/departments.repository';

@Injectable()
export class DepartmentsService {
    constructor(private readonly departmentsRepo: DepartmentsRepository) {}

    async getDepartmentByIdOrName(departmentId?: string, departmentName?: string): Promise<DepartmentsEntity> {
        try {
            return await this.departmentsRepo.getDepartmentByIdOrName(departmentId, departmentName);
        } catch (error) {
            console.log(error);
        }
    }

    async createDepartment(departmentName: string, description: string): Promise<InsertResult> {
        try {
            const checkDepartment = await this.departmentsRepo.getDepartmentByIdOrName(undefined, departmentName);

            if (checkDepartment) {
                throw new Error('Department already exists');
            }

            return await this.departmentsRepo.createDepartment(departmentName, description);
        } catch (error) {
            console.log(error);
        }
    }

    async updateDepartment(
        departmentName: string,
        updateDepartmentName?: string,
        updateDescription?: string,
    ): Promise<UpdateResult> {
        try {
            const getDepartment = await this.departmentsRepo.getDepartmentByIdOrName(undefined, departmentName);

            return await this.departmentsRepo.updateDepartment(
                getDepartment.departmentId,
                updateDepartmentName,
                updateDescription,
            );
        } catch (error) {
            console.log(error);
        }
    }

    async deleteDepartment(departmentName: string): Promise<DeleteResult> {
        try {
           const getDepartment = await this.departmentsRepo.getDepartmentByIdOrName(undefined, departmentName);

            return await this.departmentsRepo.deleteDepartment(getDepartment.departmentId);
        } catch (error) {
            console.log(error)
        }
    }
}
