import {
  SEARCH_MOVIE,
  ADD_FAVORITES_LIST,
  REMOVE_MOVIE_FROM_FAVORITE_LIST,
  REGISTER_FAVORITES,
  GET_LIST_INTO_STATE,
  GET_MOVIE_INFO_INTO_STATE,
} from "./actiontypes";
import axios from "axios";
const api = "a91ebceb";

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
    return axios
      .get(`http://www.omdbapi.com/?s=${name}&apikey=${api}`)
      .then(({ data }) => {
        dispatch(searchMovies(data.Search));
        console.log(data.Search);
      })
      .catch((err) => {
        alert("Movies not found", err);
      });
  };
}

export function addFavoriteList(id) {
  return {
    type: ADD_FAVORITES_LIST,
    payload: {
      id: id,
    },
  };
}

export function removeMovieFromFavoriteList(id) {
  return {
    type: REMOVE_MOVIE_FROM_FAVORITE_LIST,
    payload: {
      id: id,
    },
  };
}

export function registerFavoriteList(listID) {
  return {
    type: REGISTER_FAVORITES,
    payload: {
      listID: listID,
    },
  };
}

export function postList(title, favoritesIDArray) {
  return function (dispatch) {
    let savedList = {
      title: title,
      movies: favoritesIDArray,
    };
    fetch(`https://acb-api.algoritmika.org/api/movies/list/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savedList),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(registerFavoriteList(data.id));
      });
  };
}

export function getDisabled(isSubmit) {
  return {
    type: "DISABLED",
    paylaod : null,
  };
}

export function getMovieInfoToState(movieDetails) {
  return {
    type: GET_MOVIE_INFO_INTO_STATE,
    payload: {
      movieDetails: movieDetails,
    },
  };
}

export function getListIntoState(title, movies) {
  return {
    type: GET_LIST_INTO_STATE,
    payload: {
      title: title,
      listMovies: movies,
    },
  };
}

export function getList(id) {
  return function (dispatch) {
    console.log(id);
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getListIntoState(data.title, data.movies));
        dispatch(getMovieInfoByImdbID(data.movies));
      });
  };
}

export function getMovieInfoByImdbID(movies) {
  return function (dispatch) {
    let movieDetailArray = [];
    console.log(movies);
    movies.forEach((e) => {
      console.log(e);
      fetch(`http://www.omdbapi.com/?i=${e}&apikey=${api}`)
        .then((res) => res.json())
        .then((data) => {
          movieDetailArray = [...movieDetailArray, { ...data }];
          dispatch(getMovieInfoToState(movieDetailArray));
        });
    });
  };
}
