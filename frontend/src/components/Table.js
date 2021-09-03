/* eslint-disable no-unused-vars */
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import Issues from './TableRow';

const Table = ({ data }) => {
  const [workerData, setWorkerData] = useState();

  return (
    <div className="tableWrap">
      <table>
        {data.map((item) => (
          <tbody key={item.key}>
            <Issues item={item} />
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
