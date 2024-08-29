import { IsEnum, IsString } from "class-validator";
import { TechnologyEnum } from "src/technologies/entities/technologies.entity";

export class CreateUsersTechnologiesDto {
    @IsString()
    userLoginEmail: string;
    
    @IsEnum(TechnologyEnum)
    technology: TechnologyEnum;
}