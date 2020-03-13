import React from 'react';

import './style.scss';

const Project = (props) => {
  return(
    <div className={props.className}>
      <h2>{props.name}</h2>
      <h3>{props.subheading}</h3>
      {props.description.map(paragraph => (
        <p key={paragraph._id}>
          {paragraph.content}
        </p>
      ))}
    </div>
  )
};

export default Project;