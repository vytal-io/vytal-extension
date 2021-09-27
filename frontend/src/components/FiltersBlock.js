import { useState, useEffect } from 'react';
import ScanBlock from './Block';
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
        <b>Explanation:</b> Although content filters like adblock can protect
        you against certain methods of tracking, it can also be used as another
        identification metric.
      </p>
    </ScanBlock>
  );
};

export default FiltersBlock;
