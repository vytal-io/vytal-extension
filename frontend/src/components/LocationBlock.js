import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import Table from './Table';
import { fetchAPI, getLocation, getMap } from './mainOld';

const LocationBlock = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    fetchAPI(setData, setDisplay);
  }, []);

  return (
    <ScanBlock>
      <h1>Location</h1>
      {display === 1 && (
        <>
          <img src={getMap(data)} alt="Map of current location" />
          <Table data={getLocation(data)} />
        </>
      )}
      {display === 0 && (
        <div className="boxWrap">
          Unable to fetch info. Adblock or content filter may have prevented
          data from loading.
        </div>
      )}
      <p>
        <b>Explanation:</b> Your IP address can be used to determine your
        location. Using a VPN or Tor will hide your true location.
      </p>
    </ScanBlock>
  );
};

export default LocationBlock;
