import { useState, useEffect } from 'react';

import Block from './Block';
import Table from './Table';
import getOther from '../utils/other';

const OtherBlock = ({ workerData }) => {
  const [adBlock, setAdBlock] = useState();
  const [battery, setBattery] = useState();

  useEffect(() => {
    fetch('https://www3.doubleclick.net', {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-store',
    })
      .then(() => {
        setAdBlock(false);
      })
      .catch(() => {
        setAdBlock(true);
      });
    if ('getBattery' in navigator) {
      navigator.getBattery().then((res) => {
        setBattery(res);
      });
    } else {
      setBattery('N/A');
    }
  }, []);

  return (
    <Block>
      <h1>Other</h1>
      {battery && adBlock !== undefined && (
        <Table data={getOther(battery, adBlock, workerData)} />
      )}
    </Block>
  );
};

export default OtherBlock;
