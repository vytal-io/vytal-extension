import { useState, useEffect, useContext } from 'react';
import DataContext from './Context';
import Block from './Block';
import Table from './Table';
import getOther from '../utils/other';

const OtherBlock = () => {
  const [adBlock, setAdBlock] = useState();
  const [battery, setBattery] = useState();
  const { workerData } = useContext(DataContext);

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
