import { DataSource } from "typeorm";
import { TypeOrmConfig } from "./database.config";

const DatasourceTypeOrm = new DataSource(TypeOrmConfig);

export default DatasourceTypeOrm;
