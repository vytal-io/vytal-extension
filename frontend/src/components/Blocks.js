import { useState, useEffect } from 'react';
import DataContext from './Context';
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
        <DataContext.Provider value={{ workerData, connectionData }}>
          <div className="centerBlockInner">
            <BlocksOne />
          </div>
          <div className="centerBlockInner">
            <BlocksTwo />
          </div>
          <div className="centerBlockMobile">
            <BlocksOne />
            <BlocksTwo />
          </div>
        </DataContext.Provider>
      ) : (
        <div className="contentBlock loadBlock">
          <center>Loading...</center>
        </div>
      )}
    </>
  );
};

export default Blocks;
