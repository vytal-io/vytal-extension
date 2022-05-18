import './Blocks.css';
import { useState, useEffect } from 'react';
import DataContext from './Context';
import DataBlock from './DataBlock';
import GeolocationBlock from './GeolocationBlock';
import delayedData from '../utils/data';

const getWebWorker = () => {
  let w;
  if (typeof w === 'undefined') {
    w = new Worker('/worker.js');
  }
  return w;
};

const Blocks = () => {
  const [workerData, setWorkerData] = useState();
  const [frameData, setFrameData] = useState();

  // eslint-disable-next-line no-undef
  const initialData = initialDataObj;

  useEffect(() => {
    const frame = document.createElement('iframe');
    document.body.appendChild(frame);
    frame.style.display = 'none';
    frame.src = '/frame.html';
    const receiveMessage = (event) => {
      if (event.data.type === 'frameData') {
        setFrameData(event.data.data);
      }
    };
    window.addEventListener('message', receiveMessage, false);

    if (window.Worker.length) {
      getWebWorker().onmessage = (event) => {
        setWorkerData(event.data);
      };
    } else {
      setWorkerData(true);
    }
  }, []);

  return (
    <>
      <DataContext.Provider
        value={{
          initialData,
          delayedData,
          frameData,
          workerData,
        }}
      >
        <div className="centerBlockInner">
          <DataBlock
            title="Intl.DateTimeFormat().resolvedOptions().timeZone"
            type="timeZone"
          />
          <DataBlock
            title="Intl.DateTimeFormat().resolvedOptions().locale"
            type="locale"
          />
          <DataBlock title="navigator.userAgent" type="userAgent" />
        </div>
        <div className="centerBlockInner">
          <DataBlock
            title="new Date().getTimezoneOffset()"
            type="timezoneOffset"
          />
          <DataBlock title="new Date().toLocaleString()" type="dateLocale" />
          <DataBlock title="new Date().toString()" type="dateString" />
          <GeolocationBlock />
        </div>
        <div className="centerBlockMobile">
          <DataBlock
            title="Intl.DateTimeFormat().resolvedOptions().timeZone"
            type="timeZone"
          />
          <DataBlock
            title="Intl.DateTimeFormat().resolvedOptions().locale"
            type="locale"
          />
          <DataBlock title="new Date().toString()" type="dateString" />
          <DataBlock title="new Date().toLocaleString()" type="dateLocale" />
          <DataBlock
            title="new Date().getTimezoneOffset()"
            type="timezoneOffset"
          />
          <DataBlock title="navigator.userAgent" type="userAgent" />
          <GeolocationBlock />
        </div>
      </DataContext.Provider>
    </>
  );
};

export default Blocks;
