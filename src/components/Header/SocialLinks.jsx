import React from 'react';

const SocialLinks = ({ socialLinks }) => {
  return (
    <div>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
