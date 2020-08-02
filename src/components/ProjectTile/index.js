import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const ProjectTile = (props) => {
  return(
    <Link to={`${props.match.url}/${props.slug}`}>
      <div>
        <h2>{props.title}</h2>
      </div>
    </Link>
  )
};

export default ProjectTile;