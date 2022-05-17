import { movies } from "./movie_reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { favorites } from "./list_redecer.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movies,
  favorites,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
