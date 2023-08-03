import React from "react";
import Authorization from "../Authorization/Authorization";
import { Navigate } from "react-router-dom";

function Login(props) {


  return ( !props.auth ?
    <main>
      <Authorization
        authType="login"
        title="Рады видеть!"
        button="Войти"
        text="Ещё не зарегистрированы?"
        link="Регистрация"
        linkRout="/signup"
        onLogin={props.onLogin}
      />
    </main>
    :
    (<Navigate to="/movies" />)
  );
}

export default Login;
