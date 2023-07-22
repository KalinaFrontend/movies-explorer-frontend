import React from "react";
import Authorization from "../Authorization/Authorization";
import { Navigate } from "react-router-dom"

function Register(props) {
  return ( !props.auth ?
    <main>
      <Authorization
        authType="register"
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="Войти"
        linkRout="/signin"
        name={["name", "email", "password"]}
        onLogin={props.onLogin}
      />
    </main>
    :
    <Navigate to="/movies"/>
  );
}

export default Register;
