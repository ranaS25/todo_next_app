import React from "react";
import { removeTodo } from "../utils/todos";

const TodoEditor = ({ todo,setTodos, setSelectedTodo }) => {
  const handleDelete = async (id) => {
    await removeTodo(id).then(data => {
      setTodos(null)
      setSelectedTodo(null)
    });
  };
  if (!todo) {
    return <div>select a todo to see it</div>;
  }
  return (
    <div className=" overflow-y-scroll rounded-lg hidden md:flex flex-col col-span-6  gap-4 px-12 py-9 bg-white border border-[#E5E3E3]">
      <div className="flex justify-between py-2 pr-2 items-center">
        <p className="text-4xl font-semibold grow">{todo.title}</p>
        <img
          onClick={() => {
            handleDelete(todo._id);
          }}
          alt="delete-icon"
          src="/delete-icon.png"
          className="w-6 h-6 cursor-pointer"
        />
      </div>

      <div className="flex gap-6  border-b border-[#0E1747] py-4">
        <div className="flex gap-4">
          <img alt="bold-icon" src="/bold-icon.png" className="w-auto h-4" />
          <img
            alt="italic-icon"
            src="/italic-icon.png"
            className="w-auto h-4"
          />
          <img
            alt="underline-icon"
            src="/underline-icon.png"
            className="w-auto h-4"
          />
        </div>
        <div className="flex gap-4">
          <img
            alt="center-align-icon"
            src="/center_align-icon.png"
            className="w-auto h-4"
          />
          <img
            alt="right-align-icon"
            src="/right_align-icon.png"
            className="w-auto h-4"
          />
          <img
            alt="paragraph-icon"
            src="/paragraph-icon.png"
            className="w-auto h-4"
          />
        </div>
        <div className="flex gap-4">
          <img alt="list-icon" src="/list-icon.png" className="w-auto h-4" />
          <img
            alt="numbered-list-icon"
            src="/numbered_list-icon.png"
            className="w-auto h-4"
          />
        </div>
        <div className="flex gap-4">
          <img alt="paint-icon" src="/paint-icon.png" className="w-auto h-4" />
          <img
            alt="text-color-icon"
            src="/text_color-icon.png"
            className="w-auto h-4"
          />
        </div>
      </div>
      <div className="overflow-y-auto grow text-lg text-black">
        <p>{todo.description}</p>
      </div>
    </div>
  );
};

export default TodoEditor;
