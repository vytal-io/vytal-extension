import './Logo.css';
import { ReactComponent as LogoImg } from '../images/logo.svg';

const Logo = () => (
  <div className="logoWrap">
    <a href="/" className="logo" alt="Vytal logo">
      <LogoImg />
    </a>
  </div>
);

export default Logo;
