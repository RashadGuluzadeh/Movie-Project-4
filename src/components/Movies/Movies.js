import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import { connect } from "react-redux";
import SearchBox from "../SearchBox/SearchBox";
import "./Movies.css";

class Movies extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        {this.props.movies.map(item => {
            return <MovieItem movie={item}/>
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  {
    console.log(state);
    return {
        movies: state.movies,
    };
  }
}

export default connect(mapStateToProps, null)(Movies);
