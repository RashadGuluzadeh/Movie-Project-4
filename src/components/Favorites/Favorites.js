import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromList } from "../../actions/action";
import "./Favorites.css";

class Favorites extends Component {
  state = {
    listFavMovies: [],
  };
  componentDidMount() {
    this.setState({
      listFavMovies: this.state.listFavMovies.push(this.props.movie),
    });
  }
  render() {
    // const { listFavMovies } = this.state;
    console.log("listFavMovies", this.state.listFavMovies);
    return (
      <div className="favorites">
        <input value="Новый список" className="favorites__name" />
        <ul className="favorites__list">
          {this.state.listFavMovies === [] || !!this.state.listFavMovies
            ? null
            : this.state.listFavMovies.map((movie) => {
                return (
                  <li key={movie.imdbID} className="favorites__">
                    {movie.Title} ({movie.Year})<button>X</button>
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

const mapStateToProps = (state) => {
  return {
    movie: state.favorites.movie,
  };
};
const mapDispatchToProps = (dispatch) => ({
  removeFromList: (imdbID) => dispatch(removeFromList(imdbID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
