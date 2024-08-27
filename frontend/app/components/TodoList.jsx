"use client";

import React, { useState, useEffect } from "react";

import fetchTodos from "../utils/todos";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  lastLoadedTodosPage,
  setTodos,
  setLastLoadedTodosPage,
  selectedTodo,
  setSelectedTodo,
}) => {
  // console.log(todos);

  const handleLoadMore = async () => {
    try {
      if (todos[0]?.totalPages === lastLoadedTodosPage) return;
      const todosList = await fetchTodos(lastLoadedTodosPage + 1, 10);

      // console.log(todosList);
      if (!todos) setTodos([todosList]);
      else setTodos([...todos, todosList]);
      setLastLoadedTodosPage(lastLoadedTodosPage + 1);
    } catch (err) {
      console.log("error while loading more todos!!!!");
    }
  };

  return (
    <div>
      <ul className="flex flex-col gap-4 grow overflow-y-auto">
        {todos.length > 0 &&
          todos.map((page) => {
            // console.log(page.todos)
            return page.todos.map((todo) => (
              <TodoListItem
                key={todo._id}
                todo={todo}
                selectedTodo={selectedTodo}
                setSelectedTodo={setSelectedTodo}
              />
            ));
          })}
      </ul>
      {(todos.length == 0 || lastLoadedTodosPage < todos[0].totalPages) && (
        <button
          className="rounded p-2 py-3 font-medium text-black/70 border w-full mt-2 mb-4 bg-slate-200"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default TodoList;
