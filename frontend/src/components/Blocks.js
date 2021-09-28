/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import UserAgentBlock from './UserAgentBlock';
import IntlBlock from './IntlBlock';
import OtherBlock from './OtherBlock';
import NavigatorBlock from './NavigatorBlock';
import ScreenBlock from './ScreenBlock';
import FingerprintBlock from './FingerprintBlock';
import LocationBlock from './LocationBlock';
import HardwareBlock from './HardwareBlock';
import SoftwareBlock from './SoftwareBlock';
import ConnectionBlock from './ConnectionBlock';
import FiltersBlock from './FiltersBlock';
// import FontsBlock from './FontsBlock';
import { fetchAPI, getWebWorker } from '../utils/common';

const Blocks = () => {
  const [workerData, setWorkerData] = useState();
  const [connectionData, setConnectionData] = useState('');

  useEffect(() => {
    getWebWorker().onmessage = (event) => {
      setWorkerData(event.data);
      fetchAPI(setConnectionData);
    };
  }, []);
  return (
    <>
      {connectionData ? (
        <>
          <div className="centerBlockInner">
            {/* <FingerprintBlock /> */}
            <NavigatorBlock workerData={workerData} />
            <UserAgentBlock workerAgent={workerData.userAgent} />
            {/* <IntlBlock /> */}
          </div>
          <div className="centerBlockInner">
            <LocationBlock
              workerData={workerData}
              connectionData={connectionData}
            />
            <ConnectionBlock
              workerData={workerData}
              connectionData={connectionData}
            />
            <ScreenBlock />
            <OtherBlock />
          </div>
        </>
      ) : (
        <div className="contentBlock">
          <center>Loading...</center>
        </div>
      )}
    </>
  );
};

export default Blocks;
