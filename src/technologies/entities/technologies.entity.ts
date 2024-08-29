import { ProjectsTechnologiesEntity } from "src/linkTable/entities/projectsTechnologies.entity";
import { UsersTechnologiesEntity } from "src/linkTable/entities/usersTechnologies.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum TechnologyEnum {
    java = 'java',
    nestjs = 'nestjs',
    angular = 'angular',
    flask = 'flask',
    django = 'django',
    php = 'php',
    ruby = 'ruby',
    reactNative = 'reactNative',
    vue = 'vue',
    nextjs = 'nextjs'
}

@Entity('technologies')
export class TechnologiesEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'technology_id' })
    technologyId: string;

    @Column({ name: 'technology', nullable: false, type: 'enum', enum: TechnologyEnum })
    technology: TechnologyEnum

    @OneToMany(() => UsersTechnologiesEntity, usersTechnologiesEntity => usersTechnologiesEntity.technologyId)
    usersTechnologiesEntity: UsersTechnologiesEntity[];

    @OneToMany(() => ProjectsTechnologiesEntity, projectsTechnologiesEntity => projectsTechnologiesEntity.technologiesEntity)
    projectsTechnologiesEntity: ProjectsTechnologiesEntity[];
}