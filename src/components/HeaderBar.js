// import './HeaderBar.css';
import { ReactComponent as LogoImg } from '../images/logo.svg';
import chromeImage from '../images/chrome.png';
import githubImage from '../images/github.png';

const HeaderBar = () => (
  <div
    style={{
      display: 'flex',
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
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: '50px',
          borderRadius: '4px',
          padding: '0 18px',
          boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 12px',
          margin: '0 24px 0 0',
          fontSize: '15px',
        }}
      >
        <img
          src={chromeImage}
          alt="Chrome logo"
          height="28"
          width="28"
          style={{
            marginRight: '8px',
          }}
        />
        Download Extension
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: '50px',
          borderRadius: '4px',
          padding: '0 18px',
          boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 12px',
          fontSize: '15px',
        }}
      >
        <img
          src={githubImage}
          alt="Github logo"
          height="28"
          width="28"
          style={{
            marginRight: '8px',
          }}
        />
        Source Code
      </div>
    </div>
  </div>
);

export default HeaderBar;
