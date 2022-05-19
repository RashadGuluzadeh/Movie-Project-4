import { SEARCH_MOVIE, ADD_FAVORITES_LIST } from "./actiontypes";

const initialState = {
  movies: [],
  favoritesList: [],
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
        newState.favoritesList =  [...newState.favoritesList, {...match}]
      }
      
    default:
      return state;
  }
}

export default reducer;
