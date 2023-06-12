import React from "react";
import Authorization from "../Authorization/Authorization";

function Register() {
  return (
    <main>
      <Authorization
        authType="register"
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="Войти"
        linkRout="/signin"
      />
    </main>
  );
}

export default Register;
