import React from 'react';

const Education = ({
  EDUCATION_INSTITUTION,
  EDUCATION_PROGRAM,
  EDUCATION_GRADUATION_YEAR,
}) => (
  <div className="row">
    <div className="col-md-12 left-header" style={{ paddingTop: '50px' }}>
      Education
    </div>
    <i className="fa fa-graduation-cap fa-3x"></i>

    <ul className="left-sub-text col-md-12">
      <li>{EDUCATION_INSTITUTION}</li>
      <li>{EDUCATION_PROGRAM}</li>
      <li>{EDUCATION_GRADUATION_YEAR}</li>
    </ul>
  </div>
);
export default Education;
