import React, { Component } from 'react';
import './SearchBox.css';
import { API_KEY } from "./shortened"
import { movies } from '../../actions'
import { connect } from 'react-redux' 

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
    search() {
        console.log(this.state.searchLine)
        let url = `https://www.omdbapi.com/?s=${ this.state.searchLine}&apikey=${ API_KEY }`
        fetch(url, {
            method : 'GET',
        }).then(response => response.json())
        .then(jsonObj => {this.props.movies(jsonObj.Search)})
    }
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={() => this.search()}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default connect(null, {movies})(SearchBox);