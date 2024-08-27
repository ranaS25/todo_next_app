import express from 'express';
import cors from 'cors';
const app = express();


app.use(cors())

app.use(express.json())

//import routes

import todoRouter from './routes/todo.route.js'


app.use("/api/v1/todos", todoRouter)

export default app;