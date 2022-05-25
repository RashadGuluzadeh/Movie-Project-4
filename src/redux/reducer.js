import {
  SEARCH_MOVIE,
  ADD_FAVORITES_LIST,
  REMOVE_MOVIE_FROM_FAVORITE_LIST,
  REGISTER_FAVORITES,
  GET_LIST_INTO_STATE,
  GET_MOVIE_INFO_INTO_STATE,
} from "./actiontypes";

const initialState = {
  movies: [],
  favoriteList: [],
  title: "",
  listID: "",
  listMovies: [],
  movieDetails: [],
  isSubmit : false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload.movies,
      };
    case ADD_FAVORITES_LIST:
      const newState = { ...state };
      const id = action.payload.id;

      const match = newState.movies.find((item) => item.imdbID === id);

      if (match) {
        newState.favoriteList = [...newState.favoriteList, { ...match }];
      }
      return newState;
    case REMOVE_MOVIE_FROM_FAVORITE_LIST:
      const newFilms = state.favoriteList.filter(
        (item) => item.imdbID !== action.payload.id
      );
      return { ...state, favoriteList: newFilms };
    case REGISTER_FAVORITES:
      return {
        ...state,
        listID: action.payload.listID,
      };
    case GET_LIST_INTO_STATE:
      return {
        ...state,
        title: action.payload.title,
        listMovies: action.payload.listMovies,
      };
      case "DISABLED": 
      return {
        ...state,
        isSubmit : !state.isSubmit,
      }
    case GET_MOVIE_INFO_INTO_STATE:
      return {
        ...state,
        movieDetails: action.payload.movieDetails,
      };
    default:
      return state;
  }
}

export default reducer;
