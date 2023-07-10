import React from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  
  const navigate = useNavigate();
  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" name="user-data">
          <label className="profile__label" htmlFor="user-name">
            <span className="profile__subtitle">Имя</span>
            <input
              className="profile__input"
              placeholder="Виталий"
              type="text"
              name="user-name"
              minLength="2"
              maxLength="30"
              required
            />
          </label>
          <label className="profile__label" htmlFor="user-email">
            <span className="profile__subtitle profile__subtitle_bottom">
              E-mail
            </span>
            <input
              className="profile__input profile__input_bottom"
              placeholder="pochta@yandex.ru"
              type="email"
              name="user-email"
              required
            />
          </label>
          <button className="profile__btn profile__btn_type_edit" type="submit">
            Редактировать
          </button>
        </form>
        <button className="profile__btn profile__btn_type_logout" type="button" onClick={()=>navigate('/')}>
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
}

export default Profile;
