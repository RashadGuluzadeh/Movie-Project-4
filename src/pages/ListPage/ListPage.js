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
    console.log(id);
    this.props.getList(id);
    // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID
  }
  render() {
    console.log(this.props)    
    return (
      <div className="list-page">
        <h1 className="list-page__title">Мой список</h1>
        <ul>
          {this.props.movieDetails.map((item) => {
            return (
              <li key={item.imdbID}>
                <a href={`https://www.imdb.com/tittle/${item.imdbID}`} target="_blank">
                  {item.title} ({item.year})
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
    getList : (id) => dispatch(getList(id)),
    getMovieInfoByImdbID: (listMovies) => {
        dispatch(getMovieInfoByImdbID(listMovies))
    }
})

const mapStateToProps = (state) => {
    return {
        title : state.title, 
        movieDetails : state.movieDetails
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
