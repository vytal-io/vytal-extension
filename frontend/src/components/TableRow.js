/* eslint-disable no-unused-vars */
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import {
  checkNavigatorProperties,
  checkWebWorker,
  checkScreenProperties,
} from './main';

const TableRow = ({ item }) => {
  const [workerData, setWorkerData] = useState('');
  const [issues, setIssues] = useState(false);

  useEffect(() => {
    if (item.issues !== '' || workerData !== '') {
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
        {item.issues.map((ele) => (
          <div className="newline">{ele}</div>
        ))}
        {parse(workerData)}
      </td>
    </tr>
  );
};

export default TableRow;
