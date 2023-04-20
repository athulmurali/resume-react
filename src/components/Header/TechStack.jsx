import React from 'react';

const TechStack = ({ techStack }) => {
  return (
    <div className="row">
      <div className="col-md-12 left-header">Tech Stack</div>
      <i className="col-md-4 fa fa-code fa-3x fa-align-center"></i>
      <ul className="left-sub-text">
        {techStack.map((tech, index) => (
          <li className="row-header" key={index}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
