/* eslint-disable no-unused-vars */
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import { checkUndefinedProperties } from './navigator';
import Issues from './Issues';

const Table = ({ data }) => {
  const [workerData, setWorkerData] = useState();

  return (
    <div className="tableWrap">
      <table>
        {data.map((item) => (
          <tbody key={item.key}>
            <tr>
              <td>{item.title}</td>
              <td>{item.value}</td>
              <Issues item={item} />
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
