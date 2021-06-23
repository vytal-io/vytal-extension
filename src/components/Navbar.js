import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo.svg';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <img src={Logo} alt="Vytal logo" />
    </div>
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
