import { IsOptional, IsString } from "class-validator";

export class CreateDepartmentDto {
    @IsString()
    departmentName: string;

    @IsString()
    description: string;
}

export class UpdateDepartmentDto {
    @IsString()
    departmentName: string;

    @IsString()
    @IsOptional()
    updateDepartmentName?: string;

    @IsString()
    @IsOptional()
    updateDescription?: string;
}

export class DeleteDepartmentDto {
    @IsString()
    departmentName: string;
}