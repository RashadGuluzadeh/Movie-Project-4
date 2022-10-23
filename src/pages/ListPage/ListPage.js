import React, { Component } from "react";
import "./ListPage.css";
import { connect } from "react-redux";
import { getList, getMovieInfoByImdbID } from "../../redux/actions";

class ListPage extends Component {
  state = {
    isClicked: false,
  };
  componentDidMount() {
    const id = this.props.match.params;
    this.props.getList(id.id);
  }
  render() {
    return (
      <div className="list-page">
        <h1 className="list-page__title">{this.props.title}</h1>
        <ul>
          {this.props.movieDetails.map((item) => {
            return (
              <li key={item.imdbID}>
                <div className="box">
                  <img src={item.Poster} alt={item.Title} />
                  <div className="info">
                    <h1>{item.Title}</h1>
                    <ul>
                      <li>{item.Year}</li>
                      <li>{item.Runtime}</li>
                      <li>{item.Genre}</li>
                    </ul>
                    <p>{item.Plot}</p>
                    <div className="imdb">
                      <div>IMDB : </div>
                      {item.imdbRating}
                    </div>
                    <div className="director">{item.Director}</div>
                    <button>
                      <a
                        href={`https://www.imdb.com/title/${item.imdbID}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        смотрите больше на imdb
                      </a>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    title: state.title,
    movieDetails: state.movieDetails,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getList: (id) => dispatch(getList(id)),
  getMovieInfoByImdbID: (listMovies) => {
    dispatch(getMovieInfoByImdbID(listMovies));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
