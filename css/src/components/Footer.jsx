import React from 'react';
import './Footer.css';

const Footer = () => {
  const socials = {
    facebook: 'https://facebook.com/yourprofile',
    instagram: 'https://instagram.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile'
  };

  return (
    <footer className="footer">
      <div className="socials">
        {Object.entries(socials).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`social-icon ${platform}`}
          >
            {platform.charAt(0).toUpperCase()}
          </a>
        ))}
      </div>
      <p>© 2025 BK-FC NATION. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
