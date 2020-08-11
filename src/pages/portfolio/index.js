import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import ProjectTile from '../../components/ProjectTile';
import './style.scss';

// Prismic CMS imports
import Prismic from 'prismic-javascript';
import { Client } from '../../utils/prismic';

const Portfolio = ({ match }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'project')
      );
      
      setProjects(response.results);
    };

    fetchData();
  }, []);

  return (
    <div className='portfolio'>
      <Helmet>
        <title>Portfolio | Travis Henson</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Helmet>

      { projects.length > 0 ? 
        <section>
          {projects.map(project => (
            <ProjectTile 
              match={match}
              slug={project.uid}
              title={project.data.project_title[0].text}
              key={project.id}
            />
          ))}
        </section>
        :
        <div className='project-inner'>
          <h1>Loading...</h1>
        </div>
      }
    </div>
  )
};

export default Portfolio;