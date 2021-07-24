import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import Table from './Table';

const ConnectBlock = () => {
  const [connectData, setConnectData] = useState('');
  const [display, setDisplay] = useState('');

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((response) => response.json())
      .then((data) => {
        setConnectData(data);
        setDisplay(1);
      })
      .catch(() => {
        setDisplay(0);
      });
  }, []);

  const detectTor = () => {
    const date = new Date();
    if (
      navigator.plugins.length === 0 &&
      date.getTimezoneOffset() === 0 &&
      window.outerWidth === window.screen.availWidth &&
      window.outerHeight === window.screen.availHeight
    ) {
      return true;
    }
    return false;
  };

  const data = [
    {
      key: 'ipAddress',
      title: 'IP address',
      value: connectData.query,
    },
    {
      key: 'isp',
      title: 'ISP',
      value: connectData.isp,
    },
    {
      key: 'org',
      title: 'Organization',
      value: connectData.org,
    },
    {
      key: 'asn',
      title: 'ASN',
      value: connectData.as,
    },
    {
      key: 'tor',
      title: 'Tor browser detected',
      value: detectTor() ? 'True' : 'False',
    },
  ];

  return (
    <ScanBlock>
      <h1>Connection</h1>
      {display === 1 && <Table data={data} />}
      {display === 0 && (
        <div className="boxWrap">
          Unable to fetch info. Adblock or content filter may have prevented data from loading.
        </div>
      )}
      <p>
        <b>Explanation:</b> Your IP address reveals information about your
        connection. Using a VPN or Tor will hide your connection info.
      </p>
    </ScanBlock>
  );
};

export default ConnectBlock;
