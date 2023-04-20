import React from 'react';
import { experiencesData } from '../../const/experiencesData';
const ExperienceComponent = (props) => {
  return (
    <div className="row my-4" title="">
      <div className="col-xs-8 col-sm-9 col-md-10 item item-00">
        <h3> {props.position}</h3>
        &nbsp;<b style={{ color: 'inherit', fontSize: 14 }}>{props.year}</b>
        <p> {props.details} </p>
      </div>
      <div className="col-xs-4 col-sm-3 col-md-2 d-flex align-items-center justify-content-center  item-image item-image-00 text-right">
        <img
          alt="Experiences"
          data-no-retina="true"
          src={props.img}
          height="84"
          style={{ borderRadius: '5px' }}
        />
      </div>
    </div>
  );
};

const Experience = () => (
  <div className="row snippet-experiences-002">
    <div className="col-xs-12">
      <div className="row">
        <div className="col-xs-12">
          <h3>
            <b>Experience</b>
          </h3>
        </div>
      </div>
    </div>
    <div className="col-xs-12">
      {experiencesData.map((obj) => (
        <ExperienceComponent {...obj} />
      ))}
    </div>
  </div>
);

export default Experience;
