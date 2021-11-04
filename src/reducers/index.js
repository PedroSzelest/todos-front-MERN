import { combineReducers } from "redux";

import todos from "./todosReducer.js";

export const reducers = combineReducers({ todos });
