import { IsEnum, IsString } from "class-validator";
import { TechnologyEnum } from "../entities/technologies.entity";

export class CreateTechnologiesDto {
    @IsEnum(TechnologyEnum)
    technology: TechnologyEnum
}