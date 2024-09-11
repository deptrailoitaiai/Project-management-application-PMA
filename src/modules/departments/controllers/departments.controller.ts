import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';
import { DepartmentsService } from '../services/departments.service';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateDepartmentDto, DeleteDepartmentDto, UpdateDepartmentDto } from '../dtos/departments.dto';

@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @Post()
    async createDepartment(@Body() createDepartmentDto: CreateDepartmentDto): Promise<InsertResult> {
        return await this.departmentsService.createDepartment(
            createDepartmentDto.departmentName,
            createDepartmentDto.description,
        );
    }

    @Patch()
    async updateDepartment(@Body() updateDepartmentDto: UpdateDepartmentDto): Promise<UpdateResult> {
        return await this.departmentsService.updateDepartment(
            updateDepartmentDto.departmentName,
            updateDepartmentDto.updateDepartmentName,
            updateDepartmentDto.updateDescription,
        );
    }

    @Delete('delete')
    async deleteDepartment(@Body() deleteDepartmentDto: DeleteDepartmentDto): Promise<DeleteResult> {
        return await this.departmentsService.deleteDepartment(deleteDepartmentDto.departmentName);
    }
}
