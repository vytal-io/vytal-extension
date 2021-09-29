import './GitHub.css';
import GitHubButton from 'react-github-btn';

const Github = () => (
  <div className="gitHubButton">
    <GitHubButton
      href="https://github.com/z0ccc/Vytal"
      data-color-scheme="no-preference: light; light: light; dark: light;"
      aria-label="Star z0ccc/Vytal on GitHub"
    >
      Star
    </GitHubButton>
  </div>
);

export default Github;
