"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TodoEditor from "./TodoEditor";
import {fetchTodos} from "../utils/todos";

const Body = () => {
  const [todos, setTodos] = useState(null);
  const [lastLoadedTodosPage, setLastLoadedTodosPage] = useState(0);

  const [selectedTodo, setSelectedTodo] = useState(null);

  // console.log(todos);

  useEffect(() => {
    if (todos && todos[0]?.totalPages === lastLoadedTodosPage) return;
    fetchTodos(lastLoadedTodosPage + 1, 10).then((data) => {
      // console.log(data)
      setTodos([data]);
      setLastLoadedTodosPage(1);
    });
  }, [selectedTodo]);

  return (
    <div className="overflow-y-scroll w-full grow md:grid grid-cols-10  gap-8 lg:gap-16   pb-6 px-4 md:py-8 lg:py-14 lg:px-28">
      {todos != null ? (
        <Sidebar
          todos={todos}
          setTodos={setTodos}
          lastLoadedTodosPage={lastLoadedTodosPage}
          setLastLoadedTodosPage={setLastLoadedTodosPage}
          selectedTodo={ selectedTodo}
          setSelectedTodo={setSelectedTodo}
        />
      ) : (
        <div>loading...</div>
      )}
      <TodoEditor todo={selectedTodo} setTodos={setTodos} setSelectedTodo={ setSelectedTodo} />
    </div>
  );
};

export default Body;
