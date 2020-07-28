import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const MobileNav = () => {
  const closeNav = () => {
    document.getElementById('nav-checkbox').checked = false;
    document.getElementsByTagName('html')[0].classList.remove('no-scroll');
  }

  const detectClick = () => {
    if (document.getElementById('nav-checkbox').checked) {
      document.getElementsByTagName('html')[0].classList.add('no-scroll');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('no-scroll');
    }
  }

  return(
    <div className='mobile-nav'>
      <label>
        <input type='checkbox' id='nav-checkbox' onClick={detectClick}/>
        <span className='menu'>
          <span className='hamburger'>
          </span>
        </span>
        <nav>
          <NavLink to='/' exact className='mobile-nav-link' activeClassName='active-mobile-nav-link' onClick={closeNav}>
            Home
            <span className='underline'></span>
          </NavLink>
          <NavLink to='/about' exact className='mobile-nav-link' activeClassName='active-mobile-nav-link' onClick={closeNav}>
            About
            <span className='underline'></span>
          </NavLink>
          <NavLink to='/work' exact className='mobile-nav-link' activeClassName='active-mobile-nav-link' onClick={closeNav}>
            Work
            <span className='underline'></span>
          </NavLink>
          <NavLink to='/resume' exact className='mobile-nav-link' activeClassName='active-mobile-nav-link' onClick={closeNav}>
            Resume
            <span className='underline'></span>
          </NavLink>
        </nav>
      </label>
    </div>
  )
}

export default MobileNav;