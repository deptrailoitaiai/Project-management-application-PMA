import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersTechnologiesEntity } from '../entities/usersTechnologies.entity';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class UsersTechnologiesService {
  constructor(
    @InjectRepository(UsersTechnologiesEntity)
    private readonly usersTechnologiesRepo: Repository<UsersTechnologiesEntity>,
  ) {}

  async createUsersTechnologies(userId: string, technologyId: string): Promise<InsertResult> {
    try {
        const getUserTechnology = await this.usersTechnologiesRepo.findOne({
            where: {
                userId: userId,
                technologyId: technologyId,
            }
        })
        if(getUserTechnology) throw new Error('User already has this technology');

        return await this.usersTechnologiesRepo.insert({
            userId: userId,
            technologyId: technologyId,
        })
    } catch (error) {
        throw error;
    }
  }
}
