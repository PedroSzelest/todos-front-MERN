import {
  FETCH_ALL_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  LIKE_TODO,
  CHECK_TODO,
} from "../types/types";

const todos = (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL_TODOS:
      return action.payload;

    case LIKE_TODO:
      return todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );

    case CREATE_TODO:
      return [...todos, action.payload];

    case UPDATE_TODO:
      return todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );

    case DELETE_TODO:
      return todos.filter((todo) => todo._id !== action.payload);

    case CHECK_TODO:
      return todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );

    default:
      return todos;
  }
};

export default todos;
