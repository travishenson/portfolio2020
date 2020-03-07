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
      <p>My name's Travis Henson. I'm a JavaScript developer currently based in Pensacola, Florida. I love coding, and I enjoy building clean and easy-to-use React apps using Express and Node.js.</p>
      <p>My development skills include both the front and back ends, specifically HTML, CSS and SASS, JavaScript, React, Express, Node, MySQL, and MongoDB. Additionally, I have basic experience with Webpack, Babel, and Parcel for bundling and transpiling.</p>

      <h2>Becoming a Developer</h2>
      <p>My first steps toward becoming a developer were taken many years ago when I was roughly 13-years-old tinkering with basic HTML and CSS on my family desktop computer, but I never took serious steps toward it being a career.</p>
      <p>I studied advertising, marketing, and design for three years in college and graduated in 2017. I wanted to pursue a design career after college, but after being rejected from my desired Masters program, I began to reconsider my career options.</p>
      <p>In the summer of 2017, I moved from my college town/hometown to Virginia. After working a few stopgap jobs, I heard about a development boot camp at the University of Richmond. I applied, enrolled, and began my official journey in February 2019.</p>

      <h2>Boot Camp and Beyond</h2>
      <p>The boot camp was a fast-paced 24-week program that often felt like a whirlwind. At times, I felt I knew everything, and other times, I felt I knew nothing. Those weeks flew by, and before I knew it, I was creating full-stack MERN applications and graduated in July 2019 with my certificate.</p>
      <p>Shortly after, I moved to Pensacola, Florida, where I currently live with my wife. On the day-to-day, I'm working to improve my skills through personal projects, tutorials, and freelance work. I'm still seeking full-time employment opportunities, and due to my status as a military spouse, I am only able to accept remote opportunities at the moment.</p>

      <h2>Outside of Development</h2>
      <p>Describing myself doesn't come easily. Outside of development and coding, I have varying interests. I've always been a passionate sports fan and closely follow soccer, basketball, and football.</p> 
      <p>Growing up with video games has made them an integral part of my personal entertainment and socialization with friends. I love the immersion of an open-world video game with great storytelling, but I still enjoy multiplayer games like Rocket League and FIFA with my friends.</p>
      <p>In summary, I consider myself a gigantic nerd who loves technology, sports, video games, TV shows, music, and random bits of trivial information.</p>
    </div>
  )
};

export default About;