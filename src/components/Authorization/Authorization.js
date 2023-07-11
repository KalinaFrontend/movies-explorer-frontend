import React from "react";
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
              value={values.email || ""}
              onChange={handleChange}
              required
            />
          </li>
          <p className="authorization__validation-text">{errors.email}</p>
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
              value={values.password || ""}
              onChange={handleChange}
              required
            />
          </li>
          <p className="authorization__validation-text">{errors.password}</p>
        </ul>
        <div className="authorization__confirm">
        <button
          className={`${
            props.authType === "register"
              ? "authorization__confirm-button"
              : "authorization__confirm-button authorization__confirm-button-login"
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
