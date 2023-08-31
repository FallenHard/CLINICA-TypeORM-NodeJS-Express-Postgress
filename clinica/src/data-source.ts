import "reflect-metadata"
import { Tasks } from "./entity/tasks"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "joaovmd789",
    database: "clinica_joao",
    synchronize: true,
    logging: false,
    entities: [Tasks],
    migrations: [],
    subscribers: [],
})

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
