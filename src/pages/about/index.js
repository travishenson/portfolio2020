import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  useEffect(() => {
    document.title = 'About | Travis Henson'
  })

  return (
    <div>
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