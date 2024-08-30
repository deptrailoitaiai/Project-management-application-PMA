import { Body, Controller, Post } from "@nestjs/common";
import { UsersTechnologiesService } from "../services/usersTechnologies.service";
import { CreateUsersTechnologiesDto } from "../dtos/linkTable.dto";

@Controller()
export class LinkTableCOntroller {
    constructor(
        private readonly usersTecnologiesService: UsersTechnologiesService
    ) {}

    @Post('usersTechnologies/add')
    async addUserTechnology(@Body() createUsersTechnologiesDto: CreateUsersTechnologiesDto) {
        // return await this.usersTecnologiesService.createUsersTechnologies();
    }

    
}
