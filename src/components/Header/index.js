import React from 'react';
import './style.scss';

import Logo from '../Logo';
import Navbar from '../Navbar';
import MobileNav from '../MobileNav';

const Header = () => {
  return(
    <header>
      <Logo />
      <Navbar />
      <MobileNav />
    </header>
  )
}

export default Header;