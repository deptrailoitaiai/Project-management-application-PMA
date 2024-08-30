import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    loginEmail: string;

    @IsString()
    password: string;

    @IsString()
    name: string;
}

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    birth?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    citizenId?: string;

    @IsString()
    @IsOptional()
    phoneNumber?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    foreignLanguage?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    degree?: string[];
}

export class DeleteUserDto {
    @IsString()
    userEmail: string;
}