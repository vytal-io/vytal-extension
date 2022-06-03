/** @jsxImportSource theme-ui */

import { ReactComponent as LogoImg } from '../images/logo.svg';
import HeaderButton from './HeaderButton';
import chromeImage from '../images/chrome.png';
import githubImage from '../images/github.png';

const HeaderBar = () => (
  <div
    sx={{
      display: ['block', 'block', 'flex'],
      alignItems: 'center',
      justifyContent: ['center', 'center', 'space-between'],
      width: ['500px', '500px', '1024px'],
      margin: ['12px', '18px', '18px'],
    }}
  >
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: ['12px', '18px', '0'],
      }}
    >
      <a
        href="."
        style={{
          display: 'block',
          width: '206px',
          height: '50px',
        }}
        alt="Vytal logo"
      >
        <LogoImg />
      </a>
    </div>

    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: ['36px', '50px', '50px'],
        gap: ['12px', '24px', '24px'],
      }}
    >
      <HeaderButton
        url="https://chrome.google.com/webstore/detail/vytal/ncbknoohfjmcfneopnfkapmkblaenokb"
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
