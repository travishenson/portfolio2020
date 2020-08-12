import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.scss';

const Resume = () => {
  return (
    <div className='resume'>
      <Helmet>
        <title>Resume | Travis Henson</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Helmet>
      <h1>Resume</h1>
      <section className='resume-intro'>
        <p>My name's Travis Henson, and I'm a full-stack JavaScript developer currently living in Fairbanks, Alaska. I love building clean and easy-to-use React apps, and I'm always wanting to learn new and exciting things.</p> 
        <p>I'm seeking full-time employment as a JavaScript developer with a preference for React but am open to any JavaScript-based opportunity.</p>
      </section>
      <section className='resume-experience'>
        <hr />
        <h2>Experience</h2>
        <div className='experience-entry'>
          <h3>Web Template Developer - <a href='https://withkoji.com/~travishenson' target='_blank'>Koji</a></h3>
          <p>Freelance: February 2020 - June 2020</p>
          <ul>
            <li>Fulfilled commissioned templates for Koji users to customize JavaScript apps/games via Visual Customization Controls</li>
            <li>Communicated with team leads to provide updates, respond to feedback, and update projects to meet requirements</li>
          </ul>
        </div>
      </section>
      <section className='resume-skills'>
        <hr />
        <h2>Skills</h2>
        <div className='skills-list'>
          <div>
            <p>Tech Skills</p>
            <ul>
              <li>HTML &amp; CSS / Sass</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Express &amp; Node.js</li>
              <li>MySQL / Sequelize</li>
              <li>MongoDB / Mongoose</li>
              <li>Webpack, Parcel, &amp; Babel</li>
            </ul>
          </div>
          <div>
            <p>Soft Skills</p>
            <ul>
              <li>Communication</li>
              <li>Organization</li>
              <li>Problem Solving</li>
              <li>Attention to Detail</li>
              <li>Dependability</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='resume-education'>
        <hr />
        <h2>Education</h2>
        <div className='education-entry'>
          <h3>Full-Stack Development Certificate | University of Richmond</h3>
          <p>Richmond, Virginia | February 2019 - July 2019</p>
        </div>
        <div className='education-entry'>
          <h3>Bachelor of Arts (Advertising) | Western Kentucky University</h3>
          <p>Bowling Green, Kentucky | August 2014 - August 2017</p>
        </div>
      </section>
    </div>
  )
};

export default Resume;