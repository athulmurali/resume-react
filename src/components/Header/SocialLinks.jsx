import React from 'react';

const SocialLinks = ({ socialLinks }) => {
  return (
    <div> 
      {socialLinks.map((social, index) => (
        <a
          className="ml-4"
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
        >
          <i className={social.iconClass}/>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
