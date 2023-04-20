import React from 'react';

const Languages = ({ languages }) => (
  <div className="row">
    <div className="col-md-12 left-header" style={{ paddingTop: '50px' }}>
      Languages
    </div>
    <i className="fa fa-language fa-3x"></i>
    <ul className="left-sub-text">
      {languages.map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul>
  </div>
);
export default Languages;
