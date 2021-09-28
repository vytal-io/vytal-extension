import ScanBlock from './Block';
import Table from './Table';
import { getConnection } from '../utils/connection';

const LocationBlock = ({ connectionData }) => (
  <ScanBlock>
    <h1>Connection</h1>
    <Table data={getConnection(connectionData)} />
    <p>
      <b>Explanation:</b> Your IP address reveals information about your
      connection. Using a VPN or Tor will hide your connection info.
    </p>
  </ScanBlock>
);

export default LocationBlock;
