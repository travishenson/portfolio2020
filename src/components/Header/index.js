import React from 'react';
import './style.scss';

import Logo from '../Logo';
import Navbar from '../Navbar';

const Header = () => {
  return(
    <header>
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header;