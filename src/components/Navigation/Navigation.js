import React from "react";
import "./Navigation.css";
import close from "../../images/navigation__close.svg";
import "../NavProfileBtn/NavProfileBtn.css";

function Navigation(props) {
  return (
    <div
      className={
        props.isOpen ? `navigation navigation_is-opened` : `navigation`
      }
    >
      <div className="navigation__content">
        <button
          className="navigation__close"
          type="button"
          onClick={props.onClick}
        >
          <img className="navigation__close-img" src={close} alt="закрыть" />
        </button>
        <ul className="navigation__links">
          <li className="navigation__link-container">
            <a className="navigation__link" href="/">
              Главная
            </a>
          </li>
          <li className="navigation__link-container">
            <a className="navigation__link" href="/movies">
              Фильмы
            </a>
          </li>
          <li className="navigation__link-container">
            <a className="navigation__link" href="/saved-movies">
              Сохраненные фильмы
            </a>
          </li>
          <li className="navigation__link-container navigation__link-container_none">
            <button
              className="nav-profile-btn nav-profile-btn__display_open"
              type="button"
            >
              <a className="nav-profile-btn-link" href="/profile">
                <p className="nav-profile-btn__text">Аккаунт</p>
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
