import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepo: Repository<UsersEntity>,
    ) {}

    async getUserByIdOrEmail(userId?: string, loginEmail?: string): Promise<UsersEntity> {
        try {
            if (userId == undefined && loginEmail == undefined) throw new Error('userId or loginEmail must be defined');

            return await this.usersRepo.findOne({
                where: userId ? { userId: userId } : { loginEmail: loginEmail },
            });
        } catch (error) {
            throw error;
        }
    }

    async createUser(loginEmail: string, password: string, name: string): Promise<InsertResult> {
        try {
            return await this.usersRepo.insert({
                loginEmail: loginEmail,
                password: password,
                name: name,
            });
        } catch (error) {
            throw error;
        }
    }

    async updateUser(
        userId: string,
        birth?: string,
        address?: string,
        cid?: string,
        phone?: string,
        foreignLanguage?: string[],
        degree?: string[],
    ): Promise<UpdateResult> {
        try {
            const updateUserObject = this.usersRepo.create({
                birth: birth,
                address: address,
                citizenId: cid,
                phoneNumber: phone,
                foreignLanguage: foreignLanguage,
                degree: degree,
            });

            const filteredUpdateUserObject = Object.fromEntries(
                Object.entries(updateUserObject).filter((index) => index[1] !== undefined),
            );

            return await this.usersRepo
                .createQueryBuilder()
                .update(UsersEntity)
                .set(filteredUpdateUserObject)
                .where('user_id = :userId', { userId: userId })
                .execute();
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(userId?: string, loginEmail?: string): Promise<DeleteResult> {
        try {
            if (userId == undefined && loginEmail == undefined) throw new Error('userId and loginEmail is undefined');
            return await this.usersRepo.delete(userId ? { userId: userId } : { loginEmail: loginEmail });
        } catch (error) {
            throw error;
        }
    }
}
