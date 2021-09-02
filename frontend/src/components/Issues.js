/* eslint-disable no-unused-vars */
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import { checkUndefinedProperties, checkWebWorker } from './navigator';

const Issues = ({ item }) => {
  const [workerData, setWorkerData] = useState();
  useEffect(() => {
    checkWebWorker(item, setWorkerData);
  }, []);

  return (
    <td>
      {parse(checkUndefinedProperties(item))}
      <br />
      <>{workerData}</>
    </td>
  );

  // return <td>{parse(checkUndefinedProperties(item), workerData)}</td>;
};

export default Issues;
