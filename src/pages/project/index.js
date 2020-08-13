import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import './style.scss';

import Loading from '../../components/Loading';

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
      document.title = response.results[0].data.project_title[0].text;
    };

    fetchData();
  }, []);

  return (
    <div className='project'>
      <Helmet>
        <title>Project | Travis Henson</title>
      </Helmet>

      { projectData.data ? 
        <div>
          <Helmet>
            <title>Project | Travis Henson</title>
            <meta name='description' content={projectData.data.overview[0].text} />
            <meta name='keywords' content='' />
          </Helmet>
          <section className='project-first'>
            <div className='project-inner'>
              <div className='project-info'>
                <h1>{projectData.data.project_title[0].text}</h1>
                <h2>{projectData.data.overview[0].text}</h2>
                <div className='project-details'>
                  <p>Built with: {projectData.data.technologies[0].text}</p>
                  <p>Project dates: {projectData.data.project_dates[0].text}</p>
                  <a href={projectData.data.deployed_link.url} target='_blank' rel='noreferrer'>
                    Deployed with {projectData.data.deployed_platform[0].text}
                  </a>
                  <a href={projectData.data.repo_link.url} target='_blank' rel='noreferrer'>
                    {projectData.data.project_title[0].text} on GitHub
                  </a>
                </div>
              </div>
              <div className='featured-image'>
                <img src={projectData.data.cover_image.url} alt={projectData.data.cover_image.alt} />
              </div>
            </div>
          </section>
          <section className='project-second'>
            <h2>Screenshots</h2>
            <img src={projectData.data.project_image_1.url} alt={projectData.data.project_image_1.alt} />
            <img src={projectData.data.project_image_2.url} alt={projectData.data.project_image_2.alt} />
          </section>
        </div>
        :
        <Loading />
      }
    </div>
  )
};

export default Project;