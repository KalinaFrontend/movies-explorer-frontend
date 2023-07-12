import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Authorization from "../Authorization/Authorization";

function Login(props) {
  const navigate = useNavigate();

  useEffect (() => {
    if(localStorage.getItem("jwt")) {
      navigate("/movies")
    }
  })

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
