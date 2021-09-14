import ScanBlock from './ScanBlock';
import Table from './Table';
import { getDate } from './main';

const DateBlock = () => (
  <ScanBlock>
    <h1>Date</h1>
    <Table type="navigator" data={getDate()} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      hardware. This information can be used to create a fingerprint.
    </p>
  </ScanBlock>
);

export default DateBlock;
