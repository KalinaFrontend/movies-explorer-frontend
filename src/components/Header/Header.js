import React, { useState } from 'react';
import './Header.css'
import Logo from "../Logo/Logo";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import HeaderNav from "../HeaderNav/HeaderNav";
import Navigation from '../Navigation/Navigation';
import NavProfileBtn from "../NavProfileBtn/NavProfileBtn";

const Header = ({auth}) => {

  const [isOpen, setIsOpen] = useState(false);

  function handleClickOpen () {
    setIsOpen(true)
  }

  function handleClickClose () {
    setIsOpen(false)
  }

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <Logo />
        {auth && <HeaderNav onClick={handleClickOpen}/>}
      </div>
      {!auth ? <HeaderAuth /> : <NavProfileBtn isOpen={handleClickOpen}/>}
      <Navigation isOpen={isOpen} onClick={handleClickClose} />
      
    </header>
  );
}

export default Header;