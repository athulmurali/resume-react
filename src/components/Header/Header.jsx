import React from 'react';
import PropTypes from 'prop-types';
import {
  FIRST_NAME,
  LAST_NAME,
  PROFILE_PICTURE,
  ROLE,
  BLOG_URL,
  socialLinks,
  SUB_SECTIONS,
} from '../../data';
import Name from './Name';
import Role from './Role';
import SocialLinks from './SocialLinks';
import ProfilePicture from './ProfilePicture';
import SubSection from './SubSection';
import '../../../node_modules/font-awesome/css/font-awesome.css';

const Header = ({ isPortrait }) => {
  return (
    <div
      className="container col-md-4"
      style={{ position: 'relative', height: '100%', textAlign: 'center' }}
    >
      <Name firstName={FIRST_NAME} lastName={LAST_NAME} />
      <ProfilePicture src={PROFILE_PICTURE} />
      <Role role={ROLE} />
      <SocialLinks socialLinks={socialLinks} />
      <hr />
      <div className="row">
        <div className="col-md-12 left-header">
          <a className="left-header" href={BLOG_URL}>
            Blog
          </a>
        </div>
      </div>
      <hr />
      <section>
        {SUB_SECTIONS.map((section, index) => (
          <React.Fragment key={index}>
            <SubSection
              header={section.header}
              contentList={section.contentList}
              iconClass={section.iconClass}
            />
            {index !== SUB_SECTIONS.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};

Header.propTypes = {
  isPortrait: PropTypes.bool.isRequired,
};

export default Header;
