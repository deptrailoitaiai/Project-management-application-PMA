import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientsEntity } from '../entities/clients.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ClientsRepository {
    constructor(@InjectRepository(ClientsEntity) private readonly clientsRepo: Repository<ClientsEntity>) {}

    async getClientByIdOrName(clientId?: string, clientName?: string): Promise<ClientsEntity> {
        try {
            return await this.clientsRepo.findOne({
                where: clientId ? { clientId: clientId } : { clientName: clientName },
            });
        } catch (error) {
            throw error;
        }
    }

    async createClient(clientName: string, description: string): Promise<InsertResult> {
        try {
            return await this.clientsRepo.insert({
                clientName: clientName,
                description: description,
            });
        } catch (error) {
            throw error;
        }
    }

    async updateClient(clientId: string, updateName?: string, updateDescription?: string): Promise<UpdateResult> {
        try {
            const updateClientOject = this.clientsRepo.create({
                clientName: updateName,
                description: updateDescription,
            });

            const filteredUpdateClientObject = Object.fromEntries(
                Object.entries(updateClientOject).filter((index) => index[1] !== undefined),
            ) as ClientsEntity

            return await this.clientsRepo.update({ clientId: clientId }, filteredUpdateClientObject);
        } catch (error) {
            throw error;
        }
    }

    async deleteClient(clientId: string): Promise<DeleteResult> {
        try {
            return await this.clientsRepo.delete({ clientId: clientId });
        } catch (error) {
            throw error;
        }
    }
}
