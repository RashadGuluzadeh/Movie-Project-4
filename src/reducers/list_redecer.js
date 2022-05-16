import { ADD_LIST } from "../actions";

function addToList(state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      console.log("Movies addToList", action.movie);
      return state;
    default:
      return state;
  }
}

export default addToList;
