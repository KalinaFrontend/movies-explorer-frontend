import React from "react";
import Authorization from "../Authorization/Authorization";

function Login(props) {
  return (
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
  );
}

export default Login;
