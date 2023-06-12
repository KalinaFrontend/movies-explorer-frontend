import React from "react";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import foto from '../../images/about-me__foto.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <a name='about-me'></a>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__description'>
          <h3 className='about-me__name'>Дмитрий</h3>
          <p className='about-me__about'>Фронтенд-разработчик, 33 года</p>
          <p className='about-me__biography'>Я родился в Нижнем Новгороде, сейчас живу в Калининграде. В 2009 окончил колледж по направлению автоматизированная система управления (АСУ). У меня есть жена 
            и дочь. Я люблю слушать музыку, и читать книги. Код пишу давно но сейчас решил серьёзно заняться именно Фронтендом. 
            С 2011 года работаю системным администратором крупной сети. После того, как прошёл курс по веб-разработке, 
            начал заниматься фриланс-заказами, сейчас занят поиском работы но веб-разработке.</p>
          <p className='about-me__github-link-container'>
            <a className='about-me__github-link' href='https://github.com/KalinaFrontend' target="_blank" rel="noreferrer">
              Github
            </a>
          </p>
        </div>
        <img className='about-me__foto' src={foto} alt='фотография студента' />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;