/* eslint-disable no-unused-vars */
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import {
  checkNavigatorProperties,
  checkWebWorker,
  checkScreenProperties,
} from './main';
import { ReactComponent as XCircle } from '../images/xCircle.svg';
import { ReactComponent as CheckCircle } from '../images/checkCircle.svg';

const TableRow = ({ item }) => {
  const [workerData, setWorkerData] = useState('');
  const [issues, setIssues] = useState(false);

  useEffect(() => {
    if (item.issues.filter(Boolean).length !== 0) {
      setIssues(true);
    }
    checkWebWorker(item.key, setWorkerData);
  }, []);

  useEffect(() => {
    if (workerData !== '') {
      setIssues(true);
    }
  }, [workerData]);

  return (
    <tr className={issues ? 'issue' : ''}>
      <td>{item.title}</td>
      <td>{item.value}</td>
      <td>
        {issues ? (
          <XCircle className="circleButton" />
        ) : (
          // <>
          //   {item.issues.map((ele, index) => (
          //     <div className="newline" key={index}>
          //       {ele}
          //     </div>
          //   ))}
          //   <div className="newline">
          //     {workerData && <>{`Did not match web worker (${workerData})`}</>}
          //   </div>
          // </>
          <CheckCircle className="circleButton" />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
