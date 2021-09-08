/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Bowser from 'bowser';
import ScanBlock from './ScanBlock';
import Table from './Table';
import {
  checkNavigatorProperties,
  checkWebWorker,
  checkScreenProperties,
  getBrowser,
} from './main';

const NavigatorBlock = () => {
  const [firstRender, setfirstRender] = useState(true);
  const [workerData, setWorkerData] = useState('');
  const [userAgent, setUserAgent] = useState();

  useEffect(() => {
    checkWebWorker('userAgent', setWorkerData);
  }, []);

  useEffect(() => {
    if (!workerData) {
      setUserAgent(Bowser.parse(navigator.userAgent));
    } else {
      setUserAgent(Bowser.parse(workerData));
    }
  }, [workerData]);

  return (
    <ScanBlock>
      <h1>Data</h1>
      {userAgent && (
        <div className="boxWrap">
          {getBrowser(userAgent.browser.name)} {userAgent.browser.version}
        </div>
      )}
      <p>
        <b>Explanation:</b> JavaScript can be used to find information about
        your hardware. This information can be used to create a fingerprint.
      </p>
    </ScanBlock>
  );
};

export default NavigatorBlock;
