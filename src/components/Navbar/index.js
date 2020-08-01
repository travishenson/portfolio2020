import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <nav className='desktop-nav'>
      <NavLink to='/about' exact className='desktop-nav-link' activeClassName='active-nav-link'>
        About
        <span className='underline'></span>
      </NavLink>
      <NavLink to='/portfolio' exact className='desktop-nav-link' activeClassName='active-nav-link'>
        Portfolio
        <span className='underline'></span>
      </NavLink>
      <NavLink to='/resume' exact className='desktop-nav-link' activeClassName='active-nav-link'>
        Resume
        <span className='underline'></span>
      </NavLink>
    </nav>
  )
}

export default Navbar;