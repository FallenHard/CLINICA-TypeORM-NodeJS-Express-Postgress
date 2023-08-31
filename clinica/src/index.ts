import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { DataSource } from "typeorm";
import { Tasks } from "./entity/tasks";
import routers from "./routes";


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "joaovmd789",
    database: "clinica_joao",
    entities: [Tasks],
    synchronize: true,
    logging: false,
})

const app = express()

app.use(bodyParser.json())
app.use(routers)

app.listen(3333)

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
