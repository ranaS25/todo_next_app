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

const updateTodo = async (req, res) => {
  
  const {id,  title, description } = req.body;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: 'To-Do not found' });
    }

    // Update the fields with new data
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.updatedAt = Date.now(); // Update the timestamp

    const updatedTodo = await todo.save(); // Save the updated document

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteTodo = async (req, res) => {
  // console.log(req.body);
  const { id } = req.body;

  try {
    const todo = await Todo.findById(id);
    // console.log(todo);

    if (!todo) {
      return res.status(404).json({ message: "To-Do not found" });
    }

    await Todo.deleteOne({ _id: id }) // Delete the document

    res.json({ message: "To-Do deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export { addTodo, updateTodo, listTodos, deleteTodo };
