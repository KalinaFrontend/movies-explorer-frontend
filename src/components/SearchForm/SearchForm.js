import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import search from "../../images/search-form__search-button.svg";
import searchBtn from "../../images/search__button-btn.svg";

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [render, setRender] = useState(false);
  /*
  // авто поиск через 3сек после ввода
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

  useEffect(() => {
    const checked = JSON.parse(localStorage.getItem("checkbox"));
    if (checked === true) {
      setCheckbox(true);
      setRender(true);
      //   document.getElementById("seachCheckbox").checked = true;
    }
    setRender(true);
  }, []);

  /*
  // проверить состояние чекбокса
  const checkСheckbox = () => {
      setCheckbox(!checkbox);
  };
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.tag) {
      return props.onCard(searchTerm, checkbox);
    }
    if (document.querySelector(".search__input").value.length === 0) {
      return (document.querySelector(".search__input").placeholder =
        "Введите сообщение для поиска");
    }
    props.onCard(searchTerm, checkbox);
  };

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
    localStorage.setItem("checkbox", JSON.stringify(!checkbox));
  };

   return render &&(
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
              <input
                type="checkbox"
                className="search__checkbox"
                onChange={handleCheckbox}
                checked={checkbox}
                id="seachCheckbox"
              />
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
