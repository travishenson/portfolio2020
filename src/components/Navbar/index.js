import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/about' exact className='navLink' activeClassName='activeNavLink'>
        About
        <span className='underline'></span>
      </NavLink>
      <NavLink to='/work' exact className='navLink' activeClassName='activeNavLink'>
        Work
        <span className='underline'></span>
      </NavLink>
      <NavLink to='/resume' exact className='navLink' activeClassName='activeNavLink'>
        Resume
        <span className='underline'></span>
      </NavLink>
    </nav>
  )
}

export default Navbar;