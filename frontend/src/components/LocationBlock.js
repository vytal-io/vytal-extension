import ScanBlock from './Block';
import Table from './Table';
import { getMap, getLocation } from '../utils/connection';

const LocationBlock = ({ connectionData, workerData }) => (
  <ScanBlock>
    <h1>Location</h1>
    <img src={getMap(connectionData)} alt="Map of current location" />
    <Table data={getLocation(connectionData, workerData)} />
    <p>
      <b>Explanation:</b> Your IP address can be used to determine your
      location. Using a VPN or Tor will hide your true location.
    </p>
  </ScanBlock>
);

export default LocationBlock;
