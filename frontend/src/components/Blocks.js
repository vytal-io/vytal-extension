import { useState, useEffect } from 'react';
import BlocksOne from './BlocksOne';
import BlocksTwo from './BlocksTwo';
// import FontsBlock from './FontsBlock';
import { fetchAPI, getWebWorker } from '../utils/common';
import './Blocks.css';

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
            <BlocksOne workerData={workerData} />
          </div>
          <div className="centerBlockInner">
            <BlocksTwo
              workerData={workerData}
              connectionData={connectionData}
            />
          </div>
          <div className="centerBlockMobile">
            <BlocksOne workerData={workerData} />
            <BlocksTwo
              workerData={workerData}
              connectionData={connectionData}
            />
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
