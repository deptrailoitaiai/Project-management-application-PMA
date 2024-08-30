import { Injectable } from "@nestjs/common";
import { TechnologiesRepository } from "../repository/technologies.repository";
import { TechnologiesEntity, TechnologyEnum } from "../entities/technologies.entity";
import { InsertResult } from "typeorm";

@Injectable()
export class TechnologiesService {
    constructor(
        private readonly technologiesRepo: TechnologiesRepository
    ) {}

    async getTechnologyByIdOrName(techId?: string, techName?: TechnologyEnum): Promise<TechnologiesEntity> {
        try {
            return await this.technologiesRepo.getTechnologyByIdOrName(techId, techName)
        } catch (error) {
            console.log(error)
        }
    }

    async createTechnology(technology: TechnologyEnum): Promise<InsertResult> {
        try {
            return await this.technologiesRepo.createTechnology(technology)
        } catch (error) {
            console.log(error)
        }
    }
}