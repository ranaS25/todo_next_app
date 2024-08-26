import express from 'express';

const app = express();

app.use(express.json())

//import routes

import todoRouter from './routes/todo.route.js'


app.use("/api/v1/todos", todoRouter)

export default app;