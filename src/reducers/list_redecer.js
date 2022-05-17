import { ADD_LIST, DELETE_FAV } from "../actions/action";
const initialState = {
  favoriteMovies: [],
  movie: {},
  imdbID: ''
};
export function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      console.log("Movies addToList", action.movie);
      return {...state, movie: action.movie};
    case DELETE_FAV:
      return {...state,favoriteMovies: state.filter((item) => item.id !== action.imdbID ) }
    default:
      return state;
  }
}
