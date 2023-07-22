import React, { useEffect } from "react";
import "./Authorization.css";
import Logo from "../Logo/Logo";
import Forms from "../../utils/validation";

function Authorization(props) {
  const { values, errors, handleChange, handleSubmit } = Forms(props.onLogin);

  return (
    <section className="authorization">
      <div className="authorization__header">
        <div className="authorization__header-container">
          <div className="authorization__logo-container">
            <Logo />
          </div>
          <h1 className="authorization__text">{props.title}</h1>
        </div>
      </div>
      <form name={props.authType} onSubmit={handleSubmit} className="form">
        <ul className="authorization__container">
          {props.authType === "register" && (
            <li className="authorization__part-form">
              <p className="authorization__name">Имя</p>
              <input
                className="authorization__input"
                placeholder="Имя"
                type="text"
                id="name"
                name="name"
                minLength="2"
                maxLength="30"
                value={values.name || ""}
                onChange={handleChange}
                required
              />
            </li>
          )}
          {props.authType === "register" && (
            <p className="authorization__validation-text">{errors.name}</p>
          )}
          <li className="authorization__part-form">
            <p className="authorization__name">E-mail</p>
            <input
              className="authorization__input"
              placeholder="E-mail"
              type="email"
              id="email"
              name="email"
              minLength="2"
              maxLength="30"
              pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
              value={values.email || ""}
              onChange={handleChange}
              required
            />
          </li>
          <p className="authorization__validation-text">{errors.email && "Введите данные в формате name@hostname.ru"}</p>
          <li className="authorization__part-form">
            <p className="authorization__name">Пароль</p>
            <input
              className="authorization__input"
              placeholder="Пароль"
              type="password"
              id="password"
              name="password"
              minLength="2"
              maxLength="30"
              pattern="^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$"
              value={values.password || ""}
              onChange={handleChange}
              required
            />
          </li>
          <p className="authorization__validation-text">{errors.password && "Пароль должен содержать одну цифру от 1 до 9, одну строчную букву, одну заглавную букву, один специальный символ, без пробела и должен состоять из 8-16 символов."}</p>
        </ul>
        <div className="authorization__confirm">
          <button
            className={`${
              props.authType === "register"
                ? "authorization__confirm-button"
                : "authorization__confirm-button authorization__confirm-button-login"
            }
            ${
              props.authType === "register"
                ? (errors.name ||
                    errors.email ||
                    errors.password ||
                    values.name === undefined ||
                    values.email === undefined ||
                    values.password === undefined) &&
                  "authorization__confirm-button_disable"
                : ( errors.email ||
                    errors.password ||
                    values.email === undefined ||
                    values.password === undefined) &&
                  "authorization__confirm-button_disable"
            }`}
            type="submit"
          >
            {props.button}
          </button>
          <div className="authorization__confirm-container">
            <p className="authorization__confirm-text">{props.text}</p>
            <a className="authorization__confirm-link" href={props.linkRout}>
              {props.link}
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Authorization;
