
const fetchTodos = async (page = 1, limit = 10) => {
  const resJson = await fetch(
    `http://localhost:4000/api/v1/todos/listTodos?page=${page}&limit=${limit}`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log("can't fetch right now: ", err);
    });

  return resJson;
};


const removeTodo = async (id) => {
  const jsonResponse = await fetch(
    `http://localhost:4000/api/v1/todos/deleteTodo`,
    {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((res) => res.json());
  // console.log((jsonResponse))
}

export  {fetchTodos, removeTodo};
