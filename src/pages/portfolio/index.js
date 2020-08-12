import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

import Loading from '../../components/Loading';
import ProjectGrid from '../../components/ProjectGrid';

// Prismic CMS imports
import Prismic from 'prismic-javascript';
import { Client } from '../../utils/prismic';

const Portfolio = ({ match }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'project'),
        { orderings: '[my.project.project_completion desc]'}
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
        <ProjectGrid projects={projects} />
        :
        <Loading />
      }
    </div>
  )
};

export default Portfolio;