import movies from "./movie_reducer";
import { combineReducers } from "redux";
import favorites from "./list_redecer";
const rootReducer = combineReducers({
  movies,
  favorites,
});
export default rootReducer;
