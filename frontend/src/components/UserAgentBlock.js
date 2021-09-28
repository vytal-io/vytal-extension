import Block from './Block';
import Table from './Table';
import getUserAgent from '../utils/userAgent';

const UserAgentBlock = ({ workerAgent }) => (
  <Block>
    <h1>User Agent</h1>
    <Table data={getUserAgent(workerAgent)} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      hardware. This information can be used to create a fingerprint.
    </p>
  </Block>
);

export default UserAgentBlock;
