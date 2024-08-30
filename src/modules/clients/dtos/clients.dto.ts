import { IsOptional, IsString } from "class-validator";

export class CreateClientDto {
    @IsString()
    clientName: string;

    @IsString()
    description: string;
}

export class UpdateClientDto {
    @IsString()
    clientName: string;

    @IsString()
    @IsOptional()
    updateClientName?: string;

    @IsString()
    @IsOptional()
    updateDescription?: string;
}

export class DeleteClientDto {
    @IsString()
    clientId: string;
}