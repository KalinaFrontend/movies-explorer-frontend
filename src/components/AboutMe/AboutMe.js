import React from "react";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import foto from "../../images/about-me__foto.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <a name="about-me"></a>
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__description">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__about">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__biography">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <p className="about-me__github-link-container">
            <a
              className="about-me__github-link"
              href="https://github.com/KalinaFrontend"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </div>
        <img className="about-me__foto" src={foto} alt="фотография студента" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
