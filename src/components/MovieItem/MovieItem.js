import React, { Component } from 'react';
import { addToList} from "../../actions"
import { connect } from "react-redux"
import './MovieItem.css';

class MovieItem extends Component {
    render() {
        const { Title, Year, Poster } = this.props.movie;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );

    }
}
 
export default connect(null, {addToList})(MovieItem);