import React from "react";
import "./AboutMe.css";
import foto from '../../images/about-me__foto.jpg';
import arrow from "../../images/about-me__link-arrow.svg";

function AboutMe() {
  return (
    <section className='about-me'>
      <a name='about-me'></a>
      <h3 className='about-me__title'>Студент</h3>
      <div className='about-me__container'>
        <div className='about-me__description'>
          <h4 className='about-me__name'>Дмитрий</h4>
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
      <p className='about-me__portfolio-link'>Портфолио</p>
      <ul className='about-me__navigation'>
        <li>
          <a className='about-me__link-container' href='https://kalinafrontend.github.io/How-to-learn/' target="_blank" rel="noreferrer">
            <p className='about-me__link-name'>Статичный сайт</p>
            <img className='about-me__link-arrow' src={arrow} alt='стрелка'/>
          </a>
        </li>
        <li>
          <a className='about-me__link-container' href='https://kalinafrontend.github.io/Travel-in-Russia/' target="_blank" rel="noreferrer">
            <p className='about-me__link-name'>Адаптивный сайт</p>
            <img className='about-me__link-arrow' src={arrow} alt='стрелка'/>
          </a>
        </li>
        <li>
          <a className='about-me__link-container' href='https://mesto-react-kalina.nomoredomains.monster' target="_blank" rel="noreferrer">
            <p className='about-me__link-name'>Одностраничное приложение</p>
            <img className='about-me__link-arrow' src={arrow} alt='стрелка'/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;