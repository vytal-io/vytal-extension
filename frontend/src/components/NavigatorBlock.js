/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import NewTable from './NewTable';
import { getHardware, getWebGL, getBattery } from './main';
import { getNavigator } from './navigator';

const NavigatorBlock = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getBattery().then((batteryInfo) => {
  //     setData([...getHardware(), ...getWebGL(), ...batteryInfo]);
  //   });
  // }, []);

  return (
    <ScanBlock>
      <h1>Hardware</h1>
      <NewTable data={getNavigator()} />
      <p>
        <b>Explanation:</b> JavaScript can be used to find information about
        your hardware. This information can be used to create a fingerprint.
      </p>
    </ScanBlock>
  );
};

export default NavigatorBlock;
