import React from 'react';

const ProfilePicture = ({ src }) => {
  return (
    <div className="row">
      <img
        alt="Athul's profile"
        className="profile-picture-left img-circle profile-pic"
        data-no-retina="true"
        src={src}
        style={{ width: '150px', height: '150px' }}
      />
    </div>
  );
};

export default ProfilePicture;
