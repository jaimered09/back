import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js'
import { db } from './config/db.config.js'

import dotenv from 'dotenv'
import { corsOptions } from './middlewares/cors.middleware.js';

dotenv.config()


const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//middlewares CORS
app.use(cors(corsOptions));
//Middlewares de rutas
app.use('/api/v1', userRouter);



db()

app.listen(process.env.PORT, () => {
    console.log(`Server está corriendo en el puerto: ${process.env.PORT}`)
})