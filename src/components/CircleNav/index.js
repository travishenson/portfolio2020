import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const CircleNav = () => {
  const closeNav = () => {
    document.getElementById('navCheckbox').checked = false;
  }

  return(
    <div className='circleNav'>
      <label>
        <input type='checkbox' id='navCheckbox'/>
        <span className='menu'>
          <span className='hamburger'></span>
        </span>
        <nav>
          <NavLink to='/about' exact className='mobileNavLink' activeClassName='activeNavLink' onClick={closeNav}>
            About
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

export default CircleNav;