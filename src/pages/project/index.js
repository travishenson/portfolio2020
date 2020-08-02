import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Prismic CMS imports
import Prismic from 'prismic-javascript';
import { Client } from '../../utils/prismic';

const Project = (props) => {
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('my.project.uid', props.match.params.projectId)
      );
      
      setProjectData(response.results[0]);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Resume | Travis Henson</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Helmet>
      {
        projectData.data ? 
        <h1>{projectData.data.project_title[0].text}</h1>
        :
        null
      }
    </div>
  )
};

export default Project;