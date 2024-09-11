import { DataSource } from "typeorm";
import { TypeOrmConfig } from "./database.config";

export const DatasourceTypeOrm = new DataSource(TypeOrmConfig);

