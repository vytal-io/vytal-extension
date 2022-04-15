import * as React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExternalLinkAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/img/logo.svg'
import Link from '../../assets/img/link.svg'

const Navbar = () => (
  <div
    style={{
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 10px',
      backgroundColor: 'var(--navbar)',
      alignItems: 'center',
    }}
  >
    <img
      src={Logo}
      style={{
        width: '100px',
        height: '24px',
      }}
      alt="Vytal logo"
    />
    <a
      href="https://locatejs.com"
      target="_blank"
      rel="noreferrer"
      style={{
        height: '18px',
      }}
    >
      <img
        src={Link}
        alt="Test Vytal"
        style={{
          width: '18px',
          height: '18px',
        }}
      />
    </a>
  </div>
)

export default Navbar
