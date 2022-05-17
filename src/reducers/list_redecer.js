import { ADD_LIST, DELETE_FAV } from "../actions";

function addToList(state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      console.log("Movies addToList", action.movie);
      let favoriteMovies = [...state, action.movie];
      return favoriteMovies;
      case DELETE_FAV:
        favoriteMovies = state.filter((item) => item.id !== action.movie.id);
        return favoriteMovies
    default:
      return state;
  }
}

export default addToList;
