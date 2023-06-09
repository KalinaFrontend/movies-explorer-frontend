import React from "react";
import "./HeaderNav.css";

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
    </div>
  );
}

export default HeaderNav;
