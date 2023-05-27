import React from 'react';
import './NavProfileBtn.css'

function NavProfileBtn() {
  return (
    <button className='nav-profile-btn' type='button'>
      <a className='nav-profile-btn-link' href='/profile'>
        <p className='nav-profile-btn__text'>Аккаунт</p>
      </a>
    </button>
  );
}

export default NavProfileBtn;