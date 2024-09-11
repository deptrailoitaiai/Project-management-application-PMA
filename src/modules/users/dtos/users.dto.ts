import { PartialType, PickType, OmitType } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UserDto {
    @IsString()
    loginEmail: string;

    @IsString()
    password: string;

    @IsString()
    name: string;

    @IsString()
    birth: string;

    @IsString()
    address: string;

    @IsString()
    citizenId: string;

    @IsString()
    phoneNumber: string;

    @IsArray()
    @IsString({ each: true })
    foreignLanguage: string[];

    @IsArray()
    @IsString({ each: true })
    degree: string[];
}

export class CreateUserDto extends PickType(UserDto, ['loginEmail', 'name', 'password']) {}

export class UpdateUserDto extends PartialType(
    PickType(UserDto, ['birth', 'address', 'citizenId', 'phoneNumber', 'foreignLanguage', 'degree']),
) {}

export class DeleteUserDto extends PickType(UserDto, ['loginEmail']) {}

export class MappedTypeDto extends PickType(UserDto, ['name', 'password']) {
    @IsString()
    @IsOptional()
    optional: string
}