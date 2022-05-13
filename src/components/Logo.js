import './Logo.css';
import { ReactComponent as LogoImg } from '../images/logo.svg';

const Logo = () => (
  <div className="logoWrap">
    <a href="." className="logo" alt="LocateJS logo">
      <LogoImg />
    </a>
  </div>
);

export default Logo;
