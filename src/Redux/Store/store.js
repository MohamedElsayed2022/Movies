import { applyMiddleware, createStore } from "redux";
import { movieReducer } from "../Reducers/movieReducer";
// import { composeWithDevTools } from "@redux-devtools/extension";
import {   thunk  } from "redux-thunk"; 


export const store = createStore(movieReducer ,applyMiddleware(thunk))