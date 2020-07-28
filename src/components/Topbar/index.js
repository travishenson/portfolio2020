import React, { useEffect, useState } from 'react';
import './style.scss';

const Topbar = () => {
  const [toggleLabel, setToggleLabel] = useState('');

  useEffect(() => {
    let prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let localPreference = localStorage.getItem('theme');
    let root = document.getElementsByTagName('html')[0];
    const toggleSwitch = document.getElementById('switch');

    if (localPreference) {
      root.setAttribute('class', `theme-${localPreference}`);
      setToggleLabel(localPreference === 'dark' ? 'light' : 'dark');
      toggleSwitch.checked = (localPreference === 'dark');
    } else if (prefersDarkMode) {
      localStorage.setItem('theme', 'dark');
      setToggleLabel('light');
      toggleSwitch.checked = true;
    } else {
      localStorage.setItem('theme', 'light');
      setToggleLabel('dark');
    }
  }, []);

  const toggleMode = () => {
    let root = document.getElementsByTagName('html')[0];
    let rootClass = root.getAttribute('class');

    if (rootClass === 'theme-light') {
      root.setAttribute('class', 'theme-dark');
      localStorage.setItem('theme', 'dark');
      setTimeout(() => { setToggleLabel('light') }, 250);
    } else {
      root.setAttribute('class', 'theme-light');
      localStorage.setItem('theme', 'light');
      setTimeout(() => { setToggleLabel('dark') }, 250);
    }
  }

  return(
    <div className='top-bar'>
      <div style={{ marginRight: '2px' }}> Toggle {toggleLabel} mode</div>
      <div>
        <input type='checkbox' id='switch' onClick={toggleMode}/>
        <label htmlFor='switch' id='switch-label'></label>
      </div>
    </div>
  )
}

export default Topbar;