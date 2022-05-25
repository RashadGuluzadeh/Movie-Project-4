import React, { Component } from "react";
import "./Favorites.css";
import { connect } from "react-redux";
import { removeMovieFromFavoriteList, postList, getDisabled } from "../../redux/actions";
import { Link } from "react-router-dom";

class Favorites extends Component {
  state = {
    isSbm: false,
    title: "",
  };
  favoriteChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  };
  getImdbIDArray = () => {
    let favoritesIDArray = this.props.favoriteList.map((item) => {
      return item.imdbID;
    });
    return favoritesIDArray;
  };
  saveListHandler = () => {
    this.setState({ isSbm: true });
    this.props.postList(this.state.title, this.getImdbIDArray());
    this.props.getDisabled(true)
  };
  render() {
    const {favoriteList} = this.props
    const { title, isSbm } = this.state;
    return (
      <div className="favorites">
        <input
          value={title}
          className="favorites__name"
          disabled={this.state.isSbm}
          onChange={this.favoriteChangeHandler}
        />
        <ul className="favorites__list">
          {this.props.favoriteList.map((item) => {
            return (
              <li key={item.imdbID} className="favorites__">
                {item.Title} {item.Year}
                <button className="favorites__removeBtn"
                  onClick={() =>
                    this.props.removeMovieFromFavoriteList(item.imdbID)
                  }
                  disabled={isSbm}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        {!isSbm ? (
          <button
            type="button"
            className="favorites__save"
            onClick={this.saveListHandler}
            disabled={title=== "" || favoriteList.length === 0}
          >
            Сохранить список
          </button>
        ) : (
          <button className="favorites__link__btn">
            <Link
              to={`/list/${this.props.listID}`}
              type="button"
              className="favorites__save"
              target="_blank"
            >
              Перейти к выбранным фильмам
            </Link>
          </button>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    favoriteList: state.favoriteList,
    favoritesIDArray: state.favoritesIDArray,
    listID: state.listID,
    isSubmit : state.isSubmit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFromFavoriteList: (id) => {
      dispatch(removeMovieFromFavoriteList(id));
    },
    postList: (title, favoritesIDArray) => {
      dispatch(postList(title, favoritesIDArray));
    },
    getDisabled : (bool) => {
      dispatch(getDisabled(bool));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
