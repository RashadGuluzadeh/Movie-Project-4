import React, { Component } from 'react';
import './Favorites.css';
import { connect } from 'react-redux';


class Favorites extends Component {
    state  = {
        title : ""
    }
    favoriteChangeHandler = (e) => {
        this.setState({title : e.target.value})
    }
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favoritesList.map((item) => {
                        return <li key={item.imdbID}>{item.Title} {item.Year}</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 const mapStateToProps = (state) => {
    return {
        favoritesList: state.favoritesList
    }
 }
export default connect(mapStateToProps, null)(Favorites);