import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import Table from './Table';
import { getConnection } from './main';

const ConnectionBlock = () => {
  const [data, setData] = useState('');
  const [display, setDisplay] = useState('');

  useEffect(() => {
    fetch('https://api.vytal.io/ip/')
      .then((response) => response.json())
      .then((json) => {
        setData(getConnection(json));
        setDisplay(1);
      })
      .catch(() => {
        setDisplay(0);
      });
  }, []);

  return (
    <ScanBlock>
      <h1>Connection</h1>
      {display === 1 && <Table data={data} />}
      {display === 0 && (
        <div className="boxWrap">
          Unable to fetch info. Adblock or content filter may have prevented
          data from loading.
        </div>
      )}
      <p>
        <b>Explanation:</b> Your IP address reveals information about your
        connection. Using a VPN or Tor will hide your connection info.
      </p>
    </ScanBlock>
  );
};

export default ConnectionBlock;
