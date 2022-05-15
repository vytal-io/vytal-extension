import './Logo.css';
import { ReactComponent as LogoImg } from '../images/logo.svg';

const HeaderBar = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '1024px',
    }}
  >
    <a
      href="."
      style={{
        width: '180px',
        margin: '18px 0',
      }}
      alt="LocateJS logo"
    >
      <LogoImg />
    </a>
    <div>Download</div>
  </div>
);

export default HeaderBar;
