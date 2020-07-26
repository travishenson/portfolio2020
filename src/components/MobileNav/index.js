import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const MobileNav = () => {
  const closeNav = () => {
    document.getElementById('navCheckbox').checked = false;
  }

  return(
    <div className='mobileNav'>
      <label>
        <input type='checkbox' id='navCheckbox'/>
        <span className='menu'>
          <span className='hamburger'>
          </span>
        </span>
        <nav>
          <NavLink to='/' exact className='mobileNavLink' activeClassName='activeNavLink' onClick={closeNav}>
            Home
            <span className='underline'></span>
          </NavLink>
          <NavLink to='/about' exact className='mobileNavLink' activeClassName='activeNavLink' onClick={closeNav}>
            About
            <span className='underline'></span>
          </NavLink>
          <NavLink to='/work' exact className='mobileNavLink' activeClassName='activeNavLink' onClick={closeNav}>
            Work
            <span className='underline'></span>
          </NavLink>
          <NavLink to='/resume' exact className='mobileNavLink' activeClassName='activeNavLink' onClick={closeNav}>
            Resume
            <span className='underline'></span>
          </NavLink>
        </nav>
      </label>
    </div>
  )
}

export default MobileNav;