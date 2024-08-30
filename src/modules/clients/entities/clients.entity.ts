import { ProjectsClientsEntity } from "src/modules/linkTable/entities/projectsClients.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class ClientsEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'client_id' })
    clientId: string;

    @Column({ name: 'client_name', nullable: false })
    clientName: string;

    @Column({ name: 'description', nullable: true })
    description: string;

    @OneToMany(() => ProjectsClientsEntity, projectsClientsEntity => projectsClientsEntity.clientsEntity)
    projectsClientsEntity: ProjectsClientsEntity[];
}