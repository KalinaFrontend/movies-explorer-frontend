import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import search from "../../images/search-form__search-button.svg";
import searchBtn from "../../images/search__button-btn.svg";

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  /*
  useEffect(
    (e) => {
      const delayRequest = setTimeout(() => {
        props.onCard(searchTerm, checkbox);
      }, 3000);
      if (isStart) {
        props.onCard(searchTerm, checkbox);
        setIsStart(false);
        return () => clearTimeout(delayRequest);
      }
      return () => clearTimeout(delayRequest);
    },
    [props, searchTerm, isStart, checkbox]
  );
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    if (document.querySelector(".search__input").value.length === 0) {
      return document.querySelector(".search__input").placeholder = "Введите сообщение для поиска"
    };
    props.onCard(searchTerm, checkbox);
  };

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  }

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="search__container">
          <img
            className="search__search-image search__search-image-none"
            src={search}
            alt="кнопка поиска"
          />
          <input
            className="search__input"
            placeholder="Фильм"
            minLength="2"
            maxLength="30"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
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
              <input type="checkbox" className="search__checkbox" onChange={handleCheckbox}/>
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
