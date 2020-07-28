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
      <section className='home-first'>
        <div className='inner-container'>
          <h1>Hi, my name's <span className='blue-text'>Travis Henson</span>.</h1>
          <h2>I'm a <span className='blue-text'>JavaScript developer</span> currently living in Fairbanks, Alaska. I love building clean and easy-to-use <span className='blue-text'>React apps</span>, and I'm <span className='blue-text'>always wanting to learn</span> new and exciting things.</h2>
          <p>I'm currently seeking full-time employment as a JavaScript developer, either remotely or in the Fairbanks area.</p>
        </div>
      </section>
      <section className='home-second'>
        <div className='inner-container'>
          <h2>Featured Work</h2>
          <div className='section-underline'></div>
        </div>
        <div className='featured-projects-grid'>
          <div className='featured-project'>
            <img src='https://via.placeholder.com/750x300' className='featured-project-image' />
            <div className='featured-project-description'>
              <h3>Side Mine / Pirate's Plunder</h3>
              <p></p>
            </div>
          </div>
          <div className='featured-project'>
            <div className='featured-project-description'>
              <h3>TwitchReact</h3>
              <p></p>
            </div>
            <img src='https://via.placeholder.com/750x300' className='featured-project-image' />
          </div>
        </div>
        <div className='inner-container'>
          <p>Want to see more projects? Check them out on my <Link to='/work'>work page</Link>.</p>
        </div>
      </section>
      <div>
        
        {/* <div className='ctaLink'>
          <Link to='/work'>
            <span className='arrow blueText'>&gt;</span> View My Work
            <span className='underline blueText'></span>
          </Link>
        </div> */}
      </div>
    </div>
  )
};

export default Home;