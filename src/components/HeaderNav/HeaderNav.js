import React from "react";
import { NavLink } from 'react-router-dom';
import "./HeaderNav.css";

function HeaderNav(props) {
  return (
    <div className="header-nav">
      <nav className="header-nav__container">
        <div>
          <NavLink to="/movies" className={({ isActive }) => isActive ? "header-nav__link header-nav__link_active" : "header-nav__link"}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({ isActive }) => isActive ? "header-nav__link header-nav__link_active" : "header-nav__link"}>Сохраненные фильмы</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav;
