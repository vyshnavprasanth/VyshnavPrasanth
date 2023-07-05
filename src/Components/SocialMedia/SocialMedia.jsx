import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div className="social-media-bar">
      <a href="https://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.github.com">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}

export default SocialMedia;
