import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.scss';

const Home = () => {
  return (
    <div className='home'>
      <Helmet>
        <title>Travis Henson | JavaScript Developer</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Helmet>
      <div className='fadeIn'>
        <h1>Hi, my name's <span className='blueText'>Travis Henson</span>.</h1>
        <h2 id='intro'>I'm a <span className='blueText'>JavaScript developer</span>, currently based in Pensacola, Florida.</h2>
      </div>
      <div className='fadeIn2'>
        <p>I love coding, and I enjoy building clean and easy-to-use React apps using Express and Node.js. I strive to be a life-long learner, and like many developers, have a 'Learning List' a mile long.</p>
        <p>When I'm not coding, I enjoy watching sports of all kinds, playing video games on my PS4 and custom-built PC, discovering new music on Spotify, and binging great TV shows with my wife.</p>
        <div className='ctaLink'>
          <Link to='/work'>
            <span className='arrow'>></span> View My Work
            <span className='underline'></span>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Home;