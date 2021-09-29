import Block from './Block';
import Table from './Table';
import getUserAgent from '../utils/userAgent';

const UserAgentBlock = ({ workerAgent }) => (
  <Block>
    <h1>User Agent</h1>
    <Table data={getUserAgent(workerAgent)} />
    <p>
      <b>Explanation:</b> Your user agent can be parsed to determine information
      about your browser or operating system.{' '}
      <a
        className="link"
        target="_blank"
        rel="noreferrer"
        alt="Read more about user agent"
        href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
      >
        Read more
      </a>
    </p>
  </Block>
);

export default UserAgentBlock;
