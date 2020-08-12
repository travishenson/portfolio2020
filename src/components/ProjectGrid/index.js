import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const ProjectGrid = (props) => {
  return(
    <div className='projects-grid'>
      {props.projects.map((project, index) => {
        if (index % 2 === 0) {
          return(
            <div className='projects-grid-item' key={project.id}>
              <img src={project.data.cover_image.url} alt={project.data.cover_image.alt}/>
              <div>
                <p>{project.data.project_type[0].text}</p>
                <h3>{project.data.project_title[0].text}</h3>
                <h4>{project.data.featured_tagline[0].text}</h4>
                <Link to={`/portfolio/${project.uid}`}>
                  <button>View Project</button>
                </Link>
              </div>
            </div>
          )
        } else {
          return(
            <div className='projects-grid-item' key={project.id}>
              <div>
                <p>{project.data.project_type[0].text}</p>
                <h3>{project.data.project_title[0].text}</h3>
                <h4>{project.data.featured_tagline[0].text}</h4>
                <Link to={`/portfolio/${project.uid}`}>
                  <button>View Project</button>
                </Link>
              </div>
              <img src={project.data.cover_image.url} alt={project.data.cover_image.alt}/>
            </div>
          )
        }
      })}
    </div>
  )
};

export default ProjectGrid;