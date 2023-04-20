import React from 'react';

const Name = ({ firstName, lastName }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1 className="title-name">
          <span className="first-name">{firstName}</span>
          &nbsp;
          <span className="last-name">{lastName}</span>
        </h1>
      </div>
    </div>
  );
};

export default Name;
