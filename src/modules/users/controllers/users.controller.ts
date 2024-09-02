import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, DeleteUserDto, UpdateUserDto } from '../dtos/users.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ResponseTypeFail, ResponseTypeSuccess } from 'src/config/responsiveType';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<InsertResult> {
    return this.usersService.createUser(createUserDto.loginEmail, createUserDto.password, createUserDto.name);
  }

  @Patch('update')
  async updateUser(@Body() updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return await this.usersService.updateUser(
      'userId',
      updateUserDto.birth,
      updateUserDto.address,
      updateUserDto.citizenId,
      updateUserDto.phoneNumber,
      updateUserDto.foreignLanguage,
      updateUserDto.degree,
    );
  }

  @Delete('delete')
  async deleteUser(@Body() deleteUserDto: DeleteUserDto): Promise<DeleteResult> {
    return await this.usersService.deleteUser(deleteUserDto.userEmail)
  }
}
