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
      <section className='about-first'>
        <div className='inner-container'>
          <h1>About Me</h1>
          <div className='about-text'>
            <p className='about-intro'>My name's Travis Henson, and I'm a full-stack JavaScript developer living in Fairbanks, Alaska.</p> 
            <p>Though I had always been one to tinker with HTML &amp; CSS, my official web development journey began in February 2019 when I started classes in a full-stack boot camp at the University of Richmond in Virginia.</p>
            <p>Twenty-four weeks later, I had successfully built my first full-stack MERN application and was graduating with my certificate. Since then, I've moved twice (life as a military spouse) and learned a lot. These have been exciting times, but I'm more excited for all of the learning (and moving) that I haven't done yet.</p>
            <p>I have coding experience with JavaScript, TypeScript, React, Express, and Node.js. Additionally, I've used MySQL / Sequelize and MongoDB / Mongoose for database solutions and have used HTML, CSS, and Sass in my front-end work. Going forward, I hope to work with these as well as other technologies, such as GraphQL and Python.</p>
            <p>When I'm not coding, I enjoy traveling with my wife, playing video games with my friends, and obsessing over sports, especially soccer, basketball, and football (including fantasy football). Overall, I'm a nerd for technology, sports, video games, and binge-able TV shows.</p>
            <p>I'm currently seeking full-time employment. Remote work is preferred, but I'm always open to local opportunities. If you're interested in discussing an opportunity with me, feel free to contact me here!</p>
          </div>
        </div>
      </section>
    </div>
  )
};

export default About;