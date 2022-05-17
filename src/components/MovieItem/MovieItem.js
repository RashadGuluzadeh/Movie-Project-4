import React, { Component } from "react";
import { addToList } from "../../actions/action";
import { connect } from "react-redux";
import "./MovieItem.css";

class MovieItem extends Component {
  state = {
    favorited: false,
  };
  addToList() {
    this.setState({ favorited: !this.state.favorited });
    this.props.addToList(this.props.movie);
  }
  render() {
    console.log(this.props);
    const { Title, Year, Poster } = this.props.movie;
    return (
      <article className="movie-item">
        <img className="movie-item__poster" src={Poster} alt={Title} />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {Title}&nbsp;({Year})
          </h3>
          <button
            onClick={() => this.addToList(this.props.movie)}
            disabled={this.state.favorited ? true : null}
            type="button"
            className="movie-item__add-button"
          >
            Добавить в список
          </button>
        </div>
      </article>
    );
  }
}

export default connect(null, { addToList: (movie) => addToList(movie) })(
  MovieItem
);
