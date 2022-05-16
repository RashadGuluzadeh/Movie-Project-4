export const MOVIES = "MOVIES";
export const ADD_LIST = "ADD_LIST";
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
