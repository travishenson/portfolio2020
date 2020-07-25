import React from 'react';
import './style.scss';

import Logo from '../Logo';
import Navbar from '../Navbar';
import CircleNav from '../CircleNav';

const Header = () => {
  return(
    <header>
      <Logo />
      <Navbar />
      <CircleNav />
    </header>
  )
}

export default Header;