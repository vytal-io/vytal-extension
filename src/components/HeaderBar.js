/** @jsxImportSource theme-ui */

import './HeaderBar.css';
import { ReactComponent as LogoImg } from '../images/logo.svg';
import HeaderButton from './HeaderButton';
import chromeImage from '../images/chrome.png';
import githubImage from '../images/github.png';

const HeaderBar = () => (
  <div
    sx={{
      display: ['block', 'block', 'flex'],
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '1024px',
      margin: '18px 0',
    }}
  >
    <a
      href="."
      style={{
        width: '206px',
        height: '50px',
      }}
      alt="LocateJS logo"
    >
      <LogoImg />
    </a>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        gap: '24px',
      }}
    >
      <HeaderButton
        url="/"
        image={chromeImage}
        text="Download Extension"
        alt="Chrome logo"
      />
      <HeaderButton
        url="https://github.com/z0ccc/Vytal"
        image={githubImage}
        text="Source Code"
        alt="Github logo"
      />
    </div>
  </div>
);

export default HeaderBar;
