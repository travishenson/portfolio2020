import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import './style.scss';

const About = () => {
  return (
    <div className='about'>
      <Helmet>
        <title>About | Travis Henson</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Helmet>
      <h1>About</h1>
    </div>
  )
};

export default About;