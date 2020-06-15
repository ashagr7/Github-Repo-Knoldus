import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./reducers/app";
import { reposReducer } from "./reducers/repos";

export const store = createStore(
  combineReducers({ app: appReducer, repos: reposReducer }),
  applyMiddleware(thunkMiddleware)
);
