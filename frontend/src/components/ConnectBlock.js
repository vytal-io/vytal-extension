import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import Table from './Table';

const ConnectBlock = () => {
  const [connectData, setConnectData] = useState('');

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((response) => response.json())
      .then((data) => {
        setConnectData(data);
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
      <Table data={data} />
      <p>
        <b>Explanation:</b> JavaScript can be used to read various information
        about your software. This information can be used to create a
        fingerprint.
      </p>
    </ScanBlock>
  );
};

export default ConnectBlock;
