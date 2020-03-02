import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Travis Henson | JavaScript Developer</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Helmet>
      <h1>Hi, my name's Travis. I'm a JavaScript developer currently based in Pensacola, FL.</h1>
    </div>
  )
};

export default Home;