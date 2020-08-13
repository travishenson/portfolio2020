import React from 'react';
import './style.scss';

import FooterLogo from '../FooterLogo';

const Footer = () => {
  return (
    <footer>
      <div className='footer-divider'></div>
      <div className='footer-main'>
        <FooterLogo />
        <nav className='footer-nav'>
          <div>
            <a href='https://github.com/travishenson' target='_blank' rel='noreferrer'>GitHub</a>
          </div>
          <div>
            <a href='mailto:hello@travishenson.com' target='_blank' rel='noreferrer'>Email</a>
          </div>
          <div>
            <a href='https://linkedin.com/in/travisghenson' target='_blank' rel='noreferrer'>LinkedIn</a>
          </div>
        </nav>
        <p className='copyright'>Copyright © 2020 Travis Henson.</p>
      </div>
    </footer>
  )
};

export default Footer;