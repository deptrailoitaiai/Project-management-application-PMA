import { Body, Controller, Post } from "@nestjs/common";
import { TechnologiesService } from "../services/technologies.service";
import { CreateTechnologiesDto } from "../dtos/technologies.dto";
import { InsertResult } from "typeorm";

@Controller('technologies')
export class TechnologiesController {
    constructor(
        private readonly technologiesService: TechnologiesService
    ) {}

    @Post('create')
    async createTechnologies(@Body() createTechnologyDto: CreateTechnologiesDto): Promise<InsertResult> {
        return await this.technologiesService.createTechnology(createTechnologyDto.technology);
    }
}