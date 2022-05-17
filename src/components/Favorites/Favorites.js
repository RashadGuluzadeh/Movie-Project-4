import React, { Component } from "react";
import { connect } from "react-redux";
import "./Favorites.css";

class Favorites extends Component {

  render() {
    return (
      <div className="favorites">
        <input value="Новый список" className="favorites__name" />
        <ul className="favorites__list">
          {this.props.favorites.map((movie) => {
            return (
              <li key={movie.imdbID} className="favorites__">
                {movie.Title} ({movie.Year})
                <button>X</button>
              </li>
            );
          })}
        </ul>
        <button type="button" className="favorites__save">
          Сохранить список
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("FavoritedMovieList - ", state);
  return {
    favorites: state.favorites,
  };
}
export default connect(mapStateToProps, null)(Favorites);
