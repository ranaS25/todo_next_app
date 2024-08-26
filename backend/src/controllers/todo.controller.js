import { Todo } from "../models/todo.model.js";

const addTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    await Todo.create({
      title: title,
      description: description,
    });
    res.send("added Todo item");
  } catch (err) {
    console.log("ERROR while adding to the database: ", err);
    res.send("cant insert to the database: ");
    throw err;
  }
};

const updateTodo = async (req, res) => {
  res.send("updated Todo item");
};

const listTodos = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

    const skip = (page - 1) * limit; // Calculate the number of items to skip

    const todos = await Todo.find().skip(skip).limit(limit); // Fetch the todos with pagination
    const totalTodos = await Todo.countDocuments(); // Get the total number of To-Dos

    // console.log(todos);
    res.json({
      page,
      limit,
      totalPages: Math.ceil(totalTodos / limit),
      totalTodos,
      todos,
    });
  } catch (err) {
    console.log("ERROR while fetching from the database: ", err);
    res.send("cant fetch list from the database: ");
    throw err;
  }
};

const deleteTodo = (req, res) => {
  res.send("deleted Todo item");
};
export { addTodo, updateTodo, listTodos, deleteTodo };
