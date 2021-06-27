import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo.svg';

const openOptions = () => {
  chrome.runtime.openOptionsPage();
};

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <img src={Logo} alt="Vytal logo" />
    </div>
    <div className="menu">
      <a href="https://vytal.io" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          size="lg"
          className="navIcon"
        />
      </a>
      <FontAwesomeIcon
        icon={faCog}
        size="lg"
        className="navIcon"
        onClick={openOptions}
      />
    </div>
  </div>
);

export default Navbar;
