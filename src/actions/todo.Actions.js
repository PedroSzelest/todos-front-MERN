import {
  FETCH_ALL_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  LIKE_TODO,
  CHECK_TODO,
} from "../types/types.js";

import * as api from "../api/index.js";

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTodos();

    dispatch({ type: FETCH_ALL_TODOS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todo);

    dispatch({ type: CREATE_TODO, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTodo = (id, todo) => async (dispatch) => {
  try {
    const { data } = await api.updateTodo(id, todo);

    dispatch({ type: UPDATE_TODO, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeTodo = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeTodo(id);

    dispatch({ type: LIKE_TODO, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);

    dispatch({ type: DELETE_TODO, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const checkTodo = (id) => async (dispactch) => {
  try {
    await api.checkTodo(id);

    dispactch({ type: CHECK_TODO, payload: id });
  } catch (error) {
    console.log(error.mensage);
  }
};
