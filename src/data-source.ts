import { User } from './entity/User';
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "Passw0rd",
    database: "db_orm",
    synchronize: true,
    logging: false,
    migrations: [],
    entities:[User],
    subscribers: [],
})
