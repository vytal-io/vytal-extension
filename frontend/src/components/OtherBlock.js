/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

import Block from './Block';
import Table from './Table';
import getOther from '../utils/other';

const OtherBlock = ({ workerAgent }) => {
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
    navigator.getBattery().then((res) => {
      setBattery(res);
    });
  }, []);

  return (
    <Block>
      <h1>Other</h1>
      {battery && adBlock !== undefined && (
        <Table data={getOther(battery, adBlock)} />
      )}
      <p>
        <b>Explanation:</b> JavaScript can be used to find information about
        your hardware. This information can be used to create a fingerprint.
      </p>
    </Block>
  );
};

export default OtherBlock;
