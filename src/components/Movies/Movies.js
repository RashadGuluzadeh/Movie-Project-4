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
// class Movies extends Component {
//     state = {
//         movies: [
//             {
//                 imdbID: 'tt3896198',
//                 title: "Guardians of the Galaxy Vol. 2",
//                 year: 2017,
//                 poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

//             },
//             {
//                 imdbID: 'tt0068646',
//                 title: "The Godfather",
//                 year: 1972,
//                 poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

//             }
//         ]
//     }
//     render() {
//         return (
//             <ul className="movies">
//                 {this.state.movies.map((movie) => (
//                     <li className="movies__item" key={movie.imdbID}>
//                         <MovieItem {...movie} />
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }


