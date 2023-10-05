import express from 'express';

import dotenv from 'dotenv';
dotenv.config()

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(3000, () => {
    console.log(`Server is running on port: ${PORT}`)
})