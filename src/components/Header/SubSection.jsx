// Tech Stack
//
import React from 'react';
const SubSection = ({ header, contentList, iconClass }) => {
  return (
    <div className="row">
      <div className="col-md-12 left-header">{header}</div>
      <div class="col-md-4 d-flex align-items-center justify-content-center">
        <i className={` fa ${iconClass} fa-3x `} />
      </div>
      <ul className="col-md-4 left-sub-text align-items-center justify-content-center">
        {contentList.map((content, index) => (
          <li className="row row-header  justify-content-center" key={index}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubSection;
