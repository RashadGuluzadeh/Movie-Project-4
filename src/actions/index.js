export const MOVIES = "MOVIES";
export const ADD_LIST = "ADD_LIST";
export const DELETE_FAV = "DELETE_FAV"
export function movies(items) {
  const action = {
    type: MOVIES,
    items,
  };
  return action;
}
export function addToList(movie) {
  return {
    type: ADD_LIST,
    movie,
  };
}
export function removeFromList(movie) {
  return {
    type: DELETE_FAV,
    movie
  }
}
