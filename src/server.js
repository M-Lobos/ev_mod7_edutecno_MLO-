import express from 'express';
import { serverInit } from './services/serverInit.js';

import UserRouter from './routes/user.routes.js';
import BootcampRouter from './routes/bootcamp.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

//middleware para formatos json y multiformato
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', UserRouter);
app.use('/api/v1', BootcampRouter);

serverInit(app, PORT)

// db.config.js {importación de sequelize y var de entorno} -- pgAdmin -- vinculamos pgAdmin
// dbConection conexión a la base de datos de pg admin
// server init (usa dbconection para levantar servidor)