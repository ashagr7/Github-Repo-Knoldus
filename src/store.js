import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./reducers/app";

export const store = createStore(
  combineReducers({ app: appReducer }),
  applyMiddleware(thunkMiddleware)
);
