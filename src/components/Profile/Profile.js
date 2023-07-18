import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import Forms from "../../utils/validation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const { values, errors, handleChange, handleSubmit } = Forms(
    props.updateUser
  );
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentUserEdit, setcurrentUserEdit] = useState(false); 

  useEffect(() => {
    if ((values.name !== undefined || values.email !== undefined)) {
      setcurrentUserEdit(true);
    } else {
      setcurrentUserEdit(false);
    }
  }, [currentUser, name, email, values.name, values.email]);


  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form
          className="profile__form form"
          name="user-data"
          onSubmit={handleSubmit}
        >
          <label className="profile__label" htmlFor="name">
            <span className="profile__subtitle">Имя</span>
            <input
              className="profile__input"
              placeholder="Имя"
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              defaultValue={values.name || name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="profile__label" htmlFor="email">
            <span className="profile__subtitle profile__subtitle_bottom">
              E-mail
            </span>
            <input
              className="profile__input profile__input_bottom"
              placeholder="E-mail"
              type="email"
              name="email"
              defaultValue={values.email || email}
              onChange={handleChange}
              required
            />
          </label>
          <button
            className={`profile__btn profile__btn_type_edit  ${
              (errors.email ||
                errors.name ||
                values.email === email ||
                values.name === name ||
                !currentUserEdit ) &&
              "profile__btn_disable"
            }
`}
            type="submit"
          >
            Редактировать
          </button>
        </form>
        <button
          className="profile__btn profile__btn_type_logout"
          type="button"
          onClick={props.onLogin}
        >
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
}

export default Profile;


/*          ${
  (values.email !== email || values.name !== name) &&
  "profile__btn_disable"
}
*/