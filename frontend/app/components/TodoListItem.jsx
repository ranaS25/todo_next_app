import React from 'react'

const TodoListItem = ({ todo, selectedTodo, setSelectedTodo }) => {
  
  
  const { title, description, createdAt } = todo
  // console.log("todo: ", todo)
  return (
    <li onClick={() => { setSelectedTodo(todo) }}
      className={(selectedTodo === todo? `bg-slate-500`:``) + ` rounded-lg overflow-clip bg-white flex flex-col py-2 px-4 hover:bg-black/5 select-none cursor-pointer`
}>
      <h3 className="font-semibold text-base md:text-lg text-[#1B1B1B]">{title}</h3>
      <div className="flex items-center gap-8 font-normal justify-between">
        <p className="text-sm text-black/80 py-2">{description}</p>
        <p className="text-nowrap text-xs text-black/50">{createdAt.split(' ')[0]}</p>
      </div>
    </li>
  );
}

export default TodoListItem