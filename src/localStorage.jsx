export const getTodos = () => {
  const todos = localStorage.getItem("Todos");
  if (!todos) return [];
  return JSON.parse(todos);
};

export const setTodos = (todos) => {
  localStorage.setItem("Todos", JSON.stringify(todos));
};