import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Project from '../../components/Project';

import data from './data.json';

const Work = () => {
  return (
    <div className='work'>
      <Helmet>
        <title>Work | Travis Henson</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Helmet>
      <h1>Work</h1>
      {data.projects.map((project, index) => (
        <Project 
          className={((data.projects.length - 1) != index) ? 'project project-border' : 'project'}
          key={project._id}
          name={project.name}
          subheading={project.subheading}
          description={project.description}
          tech={project.tech}
          imageLink={project.imageLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  )
};

export default Work;