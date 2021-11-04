import axios from "axios";

const url = "http://localhost:2000/todos";

export const fetchTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo);
export const likeTodo = (id) => axios.patch(`${url}/${id}/likeTodo`);
export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
export const checkTodo = (id) => axios.patch(`${url}/${id}/checkTodo`)
