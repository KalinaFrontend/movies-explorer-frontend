import React from "react";
import "./SearchForm.css";
import search from "../../images/search-form__search-button.svg";
import searchBtn from "../../images/search__button-btn.svg";

function SearchForm() {
  return (
    <section className="search">
    <form className="search__form">
      <div className="search__container">
        <img
          className="search__search-image search__search-image-none"
          src={search}
          alt="кнопка поиска"
        />
        <input
          className="search__input"
          placeholder="Фильм"
          type="text"
          required
        />
        <button type="submit" className="search__button">
          <img
            className="search__search-image"
            src={searchBtn}
            alt="кнопка поиска"
          />
        </button>
        <div className="search__border"></div>
        <div className="search__toggle">
          <label className="search__tumbler">
            <input type="checkbox" className="search__checkbox" />
            <span className="search__slider" />
          </label>
          <p className="search__films">Короткометражки</p>
        </div>
      </div>
      <div className="search__toggle search__toggle_mini-size">
          <label className="search__tumbler">
            <input type="checkbox" className="search__checkbox" />
            <span className="search__slider" />
          </label>
          <p className="search__films">Короткометражки</p>
        </div>
    </form>
    </section>
  );
}

export default SearchForm;
