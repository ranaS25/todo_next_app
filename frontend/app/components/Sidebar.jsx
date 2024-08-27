import React from "react";
import TodoList from "./TodoList";

const Sidebar = ({...props}) => {
  return (
    <div className="flex flex-col grow md:col-span-4  md:overflow-y-scroll">
      <div className="flex justify-between  w-full py-4  bg-[#F4F4F4] sticky top-0">
        <div className="px-4 py-3 rounded-lg flex gap-2 bg-black">
          <img
            className="w-5 h-5"
            alt="add_todo-icon"
            src="/add_todo-icon.png"
          />
          <span className="font-medium text-sm text-white">TODO</span>
        </div>
        <div className="bg-white py-3 px-4 rounded-lg">
          <img
            alt="search-icon"
            src="/search-icon.png"
            className="h-6 w-6 p-1"
          />
        </div>
      </div>

      <TodoList {...props} />
    </div>
  );
};

export default Sidebar;
