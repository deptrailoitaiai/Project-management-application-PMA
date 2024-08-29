import { Injectable } from '@nestjs/common';
import { ClientsRepository } from '../repository/clients.repository';
import { ResponseFail, ResponseSuccess, ResponseTypeFail, ResponseTypeSuccess } from 'src/config/responsiveType';

@Injectable()
export class ClientsService {
    constructor(private readonly clientsRepo: ClientsRepository) {}

    async getClientByIdOrName(clientId?: string, clientName?: string): Promise<ResponseTypeSuccess | ResponseTypeFail> {
        try {
            const getClient = await this.clientsRepo.getClientByIdOrName(clientId, clientName);

            return ResponseSuccess(getClient);
        } catch (error) {
            console.log(error);
            return ResponseFail(400, error);
        }
    }

    async createClient(clientName: string, description: string): Promise<ResponseTypeSuccess | ResponseTypeFail> {
        try {
            const createClient = await this.clientsRepo.createClient(clientName, description);

            return ResponseSuccess(createClient);
        } catch (error) {
            console.log(error);
            return ResponseFail(400, error);
        }
    }

    async updateClient(
        clientName: string,
        updateClientName?: string,
        updateDescription?: string,
    ): Promise<ResponseTypeSuccess | ResponseTypeFail> {
        try {
            const getClient = await this.clientsRepo.getClientByIdOrName(undefined, clientName);

            const updateClient = await this.clientsRepo.updateClient(
                getClient.clientId,
                updateClientName,
                updateDescription,
            );

            return ResponseSuccess(updateClient);
        } catch (error) {
            console.log(error);
            return ResponseFail(400, error);
        }
    }

    async deleteClient(clientId: string): Promise<ResponseTypeSuccess | ResponseTypeFail> {
        try {
            const deleteClient = await this.clientsRepo.deleteClient(clientId);
            
            return ResponseSuccess(deleteClient);
        } catch (error) {
            console.log(error)
            return ResponseFail(400, error);
        }
    }
}
