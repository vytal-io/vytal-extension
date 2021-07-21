import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import Table from './Table';

const FiltersBlock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    fetch('https://www3.doubleclick.net', {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-store',
    }).catch(() => {
      setAdBlockDetected(true);
    });
  }, []);

  const data = [
    {
      key: 'adBlock',
      title: 'Adblock detected',
      value: adBlockDetected ? 'True' : 'False',
    },
  ];

  return (
    <ScanBlock>
      <h1>Content Filters</h1>
      <Table data={data} />
      <p>
        <b>Explanation:</b> JavaScript can be used to read various information
        about your hardware. This information can be used to create a
        fingerprint.
      </p>
    </ScanBlock>
  );
};

export default FiltersBlock;
