import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TechnologiesEntity, TechnologyEnum } from "../entities/technologies.entity";
import { InsertResult, Repository } from "typeorm";

@Injectable()
export class TechnologiesRepository {
    constructor(
        @InjectRepository(TechnologiesEntity) private readonly technologiesRepo: Repository<TechnologiesEntity> 
    ) {}

    async getTechnologyByIdOrName(techId?: string, techName?: TechnologyEnum): Promise<TechnologiesEntity> {
        try {
            return await this.technologiesRepo.findOne({
                where: techId? { technologyId: techId } : { technology: techName }
            })
        } catch (error) {
            throw error 
        }
    }

    async createTechnology(technology: TechnologyEnum): Promise<InsertResult> {
        try {
            return await this.technologiesRepo.insert({
                technology: technology,
            })
        } catch (error) {
            throw error
        }
    }
}