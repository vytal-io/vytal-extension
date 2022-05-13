import './GitHub.css';
import GitHubButton from 'react-github-btn';

const GitHub = () => (
  <div className="gitHubButton">
    <GitHubButton
      href="https://github.com/z0ccc/LocateJS"
      data-color-scheme="no-preference: light; light: light; dark: light;"
      aria-label="Star z0ccc/LocateJS on GitHub"
    >
      Star
    </GitHubButton>
  </div>
);

export default GitHub;
