import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import Table from './Table';
import { getLocation } from './main';

const LocationBlock = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState('');
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${data.lat},${data.lon}&markers=color:red%7Clabel:%7C${data.lat},${data.lon}&size=500x200&zoom=10&key=AIzaSyB-YN-X8PGBSPd7NOaQu4csVhgJUnF3ZGk`;

  useEffect(() => {
    fetch('https://api.vytal.io/ip/')
      .then((response) => response.json())
      .then((json) => {
        setData(getLocation(json));
        setDisplay(1);
      })
      .catch(() => {
        setDisplay(0);
      });
  }, []);

  return (
    <ScanBlock>
      <h1>Location</h1>
      {display === 1 && (
        <>
          <img src={mapUrl} alt="Map of current location" />
          <Table data={data} />
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
