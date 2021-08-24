import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import Table from './Table';
import { getSoftware } from './main';

const HardwareBlock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getSoftware());
  }, []);

  return (
    <ScanBlock>
      <h1>Software</h1>
      <Table data={data} />
      <p>
        <b>Explanation:</b> JavaScript can be used to find information about
        your software. This information can be used to create a fingerprint.
      </p>
    </ScanBlock>
  );
};

export default HardwareBlock;
