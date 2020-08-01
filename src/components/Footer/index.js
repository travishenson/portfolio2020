import React from 'react';
import './style.scss';

import FooterLogo from '../FooterLogo';

const Footer = () => {
  return (
    <footer>
      <div className='footer-divider'></div>
      <div className='footer-partial'>
        <FooterLogo />
        <h4>Get in Touch</h4>
      </div>
      <nav className='footer-nav'>
        <a href='https://github.com/travishenson' target='_blank'>GitHub</a>
        <a href='mailto:hello@travishenson.com' target='_blank'>Email</a>
        <a href='https://linkedin.com/in/travisghenson' target='_blank'>LinkedIn</a>
      </nav>
      <p className='copyright'>© 2020 Travis Henson</p>
    </footer>
  )
};

export default Footer;