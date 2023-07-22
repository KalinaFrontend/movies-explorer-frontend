import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import search from "../../images/search-form__search-button.svg";
import searchBtn from "../../images/search__button-btn.svg";

function SearchForm({ onCard, tag, onReset }) {
  const [searchTerm, setSearchTerm] = useState(""); // значение input поиска
  const [checkbox, setCheckbox] = useState(false); // состояние checkbox
  const [render, setRender] = useState(false); // состояние загрузки даных из localStorage
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

  // загрузить состояние checkbox из localStorage и прогрузить страницу
  useEffect(() => {
    if (!tag) {
      const checked = JSON.parse(localStorage.getItem("checkbox"));
      const valueInput = JSON.parse(localStorage.getItem("line"));
      if (valueInput) {
        setSearchTerm(valueInput)
      }
      if (checked === true) {
        setCheckbox(true);
      } 
    }
    setRender(true);
  }, []);
  

  // сабмит формы поиска
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tag) {
      return onCard(searchTerm, checkbox);
    }
    if (document.querySelector(".search__input").value.length === 0) {
      localStorage.removeItem('findMovies');
      localStorage.removeItem('line');
      onReset();
      return (document.querySelector(".search__input").placeholder =
        "Введите сообщение для поиска");
    }
    onCard(searchTerm, checkbox);
  };

  // переключатель состояния checkbox
  const handleCheckbox = () => {
    setCheckbox(!checkbox);
    if (!tag) {
      localStorage.setItem("checkbox", JSON.stringify(!checkbox));
    }
    onCard(searchTerm, !checkbox);
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
            minLength="1"
            maxLength="30"
            type="text"
            defaultValue={searchTerm}
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
              <span className="search__slider search__slider_off" />
            </label>
            <p className="search__films">Короткометражки</p>
          </div>
        </div>
        <div className="search__toggle search__toggle_mini-size">
          <label className="search__tumbler">
            <input type="checkbox" className="search__checkbox" />
            <span className="search__slider search__slider_off" />
          </label>
          <p className="search__films">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
