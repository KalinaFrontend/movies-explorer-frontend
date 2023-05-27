import React from 'react';
import './HeaderNav.css'
import NavProfileBtn from "../NavProfileBtn/NavProfileBtn";

function HeaderNav(props) {
      return (
        <div>
          <nav className='header-nav'>
            <div>
              <a className='header-nav__link' href='/movies'>Фильмы</a>
              <a className='header-nav__link' href='/saved-movies'>Сохраненные фильмы</a>

                <NavProfileBtn/>
            </div>
          </nav>
          <button className='header-nav__menu-button' type='button' onClick={props.onClick}></button>
        </div>
      );
}

export default HeaderNav;