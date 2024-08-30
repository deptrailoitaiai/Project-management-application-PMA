import { Body, Controller, Post } from '@nestjs/common';
import { DepartmentsService } from '../services/departments.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateDepartmentDto, DeleteDepartmentDto, UpdateDepartmentDto } from '../dtos/departments.dto';

@Controller()
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @Post('create')
    async createDepartment(@Body() createDepartmentDto: CreateDepartmentDto): Promise<InsertResult> {
        return await this.departmentsService.createDepartment(
            createDepartmentDto.departmentName,
            createDepartmentDto.description,
        );
    }

    @Post('update')
    async updateDepartment(@Body() updateDepartmentDto: UpdateDepartmentDto): Promise<UpdateResult> {
        return await this.departmentsService.updateDepartment(
            updateDepartmentDto.departmentName,
            updateDepartmentDto.updateDepartmentName,
            updateDepartmentDto.updateDescription,
        );
    }

    @Post('delete')
    async deleteDepartment(@Body() deleteDepartmentDto: DeleteDepartmentDto): Promise<DeleteResult> {
        return await this.departmentsService.deleteDepartment(deleteDepartmentDto.departmentName);
    }
}
