import React from 'react';
import './Logo.css'
import logo from '../../images/header__logo.svg';

function Logo() {
  return (
        <a href="/">
          <img className='header__logo' src={logo} alt='логотип movies-explorer'/>
        </a>
  );
}

export default Logo;