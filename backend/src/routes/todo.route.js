import { Router } from "express";
import { addTodo, deleteTodo, listTodos, updateTodo } from "../controllers/todo.controller.js";


const router = Router();


router.route('/addTodo').post(addTodo)

router.route('/updateTodo').post(updateTodo)

router.route("/deleteTodo").post(deleteTodo);

router.route("/listTodos").get(listTodos);





export default router;