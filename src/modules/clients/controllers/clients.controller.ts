import { Body, Controller, Delete, Patch, Post } from "@nestjs/common";
import { ClientsService } from "../services/clients.service";
import { ResponseTypeFail, ResponseTypeSuccess } from "src/config/responsiveType";
import { CreateClientDto, DeleteClientDto, UpdateClientDto } from "../dtos/clients.dto";

@Controller('clients')
export class ClientsController {
    constructor(
        private readonly clientsService: ClientsService
    ) {}

    // @Post('get')
    // async getClientByIdOrName(clientId?: string, clientName?: string): Promise<ResponseTypeSuccess | ResponseTypeFail> {
    //     return await this.clientsService.getClientByIdOrName(clientId, clientName);
    // }

    @Post('create')
    async createClient(@Body() createClientDto: CreateClientDto): Promise<ResponseTypeSuccess | ResponseTypeFail> {
        return await this.clientsService.createClient(createClientDto.clientName, createClientDto.description);
    }

    @Patch('update')
    async updateClient(@Body() updateClientDto: UpdateClientDto): Promise<ResponseTypeSuccess | ResponseTypeFail> {
        return await this.clientsService.updateClient(
            updateClientDto.clientName,
            updateClientDto.updateClientName,
            updateClientDto.updateDescription
        );
    }

    @Delete('delete')
    async deleteClient(@Body() deleteClientDto: DeleteClientDto): Promise<ResponseTypeSuccess | ResponseTypeFail> {
        return await this.clientsService.deleteClient(deleteClientDto.clientId);
    }
}