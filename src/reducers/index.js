import movies from "./movie_reducer";
import { combineReducers } from "redux";
import list from "./list_redecer";
const rootReducer = combineReducers({
  movies,
  list,
});
export default rootReducer;
