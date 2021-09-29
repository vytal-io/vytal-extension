import Block from './Block';
import Table from './Table';
import { getMap, getLocation } from '../utils/connection';

const LocationBlock = ({ connectionData, workerData }) => (
  <Block>
    <h1>Location</h1>
    <img src={getMap(connectionData)} alt="Map of current location" />
    <Table data={getLocation(connectionData, workerData)} />
    <p>
      <b>Explanation:</b> Your IP address can be used to determine your
      location.{' '}
      <a
        className="link"
        target="_blank"
        rel="noreferrer"
        alt="Read more about ip location"
        href="https://en.wikipedia.org/wiki/IP_address"
      >
        Read more
      </a>
    </p>
  </Block>
);

export default LocationBlock;
