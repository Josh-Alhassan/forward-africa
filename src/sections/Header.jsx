import React from 'react';
import './Header.css';

// logo Image Import
import logo from '../assets/logo.png';
import HeaderTitle from '../components/HeaderTitle';
import HeaderInfo from '../components/HeaderInfo';

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="Logo" />
      <HeaderTitle />
      <HeaderInfo />
    </div>
  )
}

export default Header
