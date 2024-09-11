import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repository/users.repository';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UsersEntity } from '../entities/users.entity';
import { SchedulerRegistry, Timeout } from '@nestjs/schedule';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepo: UsersRepository,
        private readonly scheduleRegistry: SchedulerRegistry,
    ) {}

    async getUserByIdOrEmail(userId?: string, loginEmail?: string): Promise<UsersEntity> {
        try {
            return await this.usersRepo.getUserByIdOrEmail(undefined, loginEmail);
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(loginEmail: string, password: string, name: string): Promise<InsertResult> {
        try {
            const getUser = await this.usersRepo.getUserByIdOrEmail(undefined, loginEmail);
            if (getUser) {
                throw new Error('User already exists');
            }

            const hashedPassword = bcrypt.hashSync(password, 10);

            return await this.usersRepo.createUser(loginEmail, hashedPassword, name);
        } catch (error) {
            console.log(error);
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
            const getUser = await this.usersRepo.getUserByIdOrEmail(userId);
            if (!getUser) {
                throw new Error('User not found');
            }

            return await this.usersRepo.updateUser(userId, birth, address, cid, phone, foreignLanguage, degree);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteUser(loginEmail: string): Promise<DeleteResult> {
        try {
            const getUser = await this.usersRepo.getUserByIdOrEmail(undefined, loginEmail);
            if (!getUser) {
                throw new Error('User not found');
            }

            return await this.usersRepo.deleteUser(undefined, loginEmail);
        } catch (error) {
            console.log(error);
        }
    }

}

