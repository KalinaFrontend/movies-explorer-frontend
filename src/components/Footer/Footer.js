import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className='footer__copyring'>&copy; 2023</p>
        <nav className="footer__links-nav">
          <ul className="footer__links">
            <li className="footer__link"><a className="footer__link-item" href='https://practicum.yandex.ru' target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
            <li className='footer__link'><a className="footer__link-item"href='https://github.com/KalinaFrontend' target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;