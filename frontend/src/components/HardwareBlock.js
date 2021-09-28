import { useState, useEffect } from 'react';
import Block from './Block';
import Table from './Table';
import { getHardware, getWebGL, getBattery } from './mainOld';

const HardwareBlock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBattery().then((batteryInfo) => {
      setData([...getHardware(), ...getWebGL(), ...batteryInfo]);
    });
  }, []);

  return (
    <Block>
      <h1>Hardware</h1>
      <Table data={data} />
      <p>
        <b>Explanation:</b> JavaScript can be used to find information about
        your hardware. This information can be used to create a fingerprint.
      </p>
    </Block>
  );
};

export default HardwareBlock;
