import ScanBlock from './ScanBlock';
import Table from './Table';
import { getSoftware } from './main';

const HardwareBlock = () => (
  <ScanBlock>
    <h1>Software</h1>
    <Table data={getSoftware()} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      software. This information can be used to create a fingerprint.
    </p>
  </ScanBlock>
);

export default HardwareBlock;
