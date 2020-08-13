import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Logo = () => {
  const closeMobileNav = () => {
    document.getElementById('nav-checkbox').checked = false;
  }

  return (
    <NavLink to='/' exact className='logo' onClick={closeMobileNav} aria-label='Portfolio home page'>
      <svg width="50px" height="50px" viewBox="-5 -5 750 750" version="1.1" >
        <path d="M632.875,291.003l-527.189,0l0,10.896c0,19.48 15.791,35.271 35.27,35.271l456.648,0c19.48,0 35.271,-15.791 35.271,-35.271l0,-10.896Z" />
        <path d="M709.607,225.557c-18.603,-43.981 -45.229,-83.475 -79.139,-117.386c-33.91,-33.91 -73.404,-60.536 -117.385,-79.138c-45.546,-19.265 -93.915,-29.033 -143.763,-29.033c-49.847,0 -98.217,9.768 -143.763,29.033c-43.981,18.602 -83.475,45.228 -117.386,79.138c-33.91,33.911 -60.536,73.405 -79.138,117.386c-19.265,45.546 -29.033,93.916 -29.033,143.763c0,49.848 9.768,98.217 29.033,143.763c18.602,43.981 45.228,83.475 79.138,117.386c33.911,33.91 73.405,60.536 117.386,79.138c35.848,15.163 73.447,24.439 112.137,27.702l0,-21.752l0,-24.605l0,-296.277l-170.285,0l0,10.896c0,19.48 15.792,35.271 35.271,35.271l88.846,0l0,242.215c-16.331,-4.038 -32.351,-9.358 -47.984,-15.97c-38.478,-16.275 -73.039,-39.578 -102.726,-69.264c-29.685,-29.685 -52.988,-64.247 -69.263,-102.724c-16.845,-39.826 -25.385,-82.144 -25.385,-125.779c0,-43.636 8.54,-85.954 25.385,-125.778c16.275,-38.478 39.578,-73.04 69.263,-102.725c29.687,-29.685 64.248,-52.989 102.726,-69.264c39.825,-16.844 82.143,-25.385 125.778,-25.385c43.636,0 85.953,8.54 125.778,25.385c38.478,16.275 73.039,39.579 102.725,69.264c29.685,29.685 52.989,64.247 69.263,102.725c16.845,39.824 25.385,82.142 25.385,125.778c0,43.635 -8.54,85.953 -25.385,125.779c-16.274,38.477 -39.578,73.039 -69.263,102.724c-29.686,29.686 -64.247,52.989 -102.725,69.264c-15.658,6.623 -31.705,11.949 -48.062,15.989l0,-242.234l88.846,0c19.479,0 35.27,-15.791 35.27,-35.271l0,-10.896l-170.284,0l0,342.641c38.718,-3.259 76.343,-12.536 112.215,-27.709c43.981,-18.602 83.475,-45.228 117.385,-79.138c33.91,-33.911 60.536,-73.405 79.139,-117.386c19.265,-45.546 29.032,-93.915 29.032,-143.763c0,-49.847 -9.767,-98.217 -29.032,-143.763" />
      </svg>
    </NavLink>
  )
}

export default Logo;