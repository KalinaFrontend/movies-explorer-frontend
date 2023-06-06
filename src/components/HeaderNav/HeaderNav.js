import React from "react";
import "./HeaderNav.css";
import NavProfileBtn from "../NavProfileBtn/NavProfileBtn";

function HeaderNav(props) {
  return (
    <div className="header-nav">
      <nav className="header-nav__container">
        <div>
          <a className="header-nav__link" href="/movies">
            Фильмы
          </a>
          <a className="header-nav__link" href="/saved-movies">
            Сохраненные фильмы
          </a>
        </div>
      </nav>
      <button
        className="header-nav__menu-button"
        type="button"
        onClick={props.onClick}
      ></button>
    </div>
  );
}

export default HeaderNav;
