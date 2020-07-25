import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <nav className='desktopNav'>
      <NavLink to='/about' exact className='desktopNavLink' activeClassName='activeNavLink'>
        About
        <span className='underline'></span>
      </NavLink>
      <NavLink to='/work' exact className='desktopNavLink' activeClassName='activeNavLink'>
        Work
        <span className='underline'></span>
      </NavLink>
      <NavLink to='/resume' exact className='desktopNavLink' activeClassName='activeNavLink'>
        Resume
        <span className='underline'></span>
      </NavLink>
    </nav>
  )
}

export default Navbar;