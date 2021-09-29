import Block from './Block';
import Table from './Table';
import { getConnection } from '../utils/connection';

const LocationBlock = ({ connectionData }) => (
  <Block>
    <h1>Connection</h1>
    <Table data={getConnection(connectionData)} />
    <p>
      <b>Explanation:</b> Your IP address reveals information about your
      connection.{' '}
      <a
        className="link"
        target="_blank"
        rel="noreferrer"
        alt="Read more about ip connection"
        href="https://en.wikipedia.org/wiki/IP_address"
      >
        Read more
      </a>
    </p>
  </Block>
);

export default LocationBlock;
