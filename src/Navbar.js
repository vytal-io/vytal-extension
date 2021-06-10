import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <div className="navbar">
    <div className="logoImage" />
    <div className="menu">
      <a href="url" target="_blank">
        <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
      </a>
      <a href="url" target="_blank">
        <FontAwesomeIcon icon={faCog} size="lg" />
      </a>
    </div>
  </div>
);

export default Navbar;
