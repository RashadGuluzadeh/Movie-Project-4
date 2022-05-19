import { SEARCH_MOVIE, ADD_FAVORITES_LIST } from "./actiontypes";
import axios from "axios";

export function searchMovies(movies) {
  return {
    type: SEARCH_MOVIE,
    payload: {
      movies: movies,
    },
  };
}

export function fetchMovies(name) {
  return (dispatch) => {
    const api = "a91ebceb";
    return axios.get(`http://www.omdbapi.com/?s=${name}&apikey=${api}`)
      .then(({ data }) => {
        dispatch(searchMovies(data.Search));
        console.log(data.Search);
      });
  };
}

export function addFavoriteList(id) {
  return {
    type: ADD_FAVORITES_LIST,
    payload: {
        id: id,
    }
  };
}
