import Block from './Block';
import Table from './Table';
import { getSoftware } from './mainOld';

const SoftwareBlock = () => (
  <Block>
    <h1>Software</h1>
    <Table data={getSoftware()} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      software. This information can be used to create a fingerprint.
    </p>
  </Block>
);

export default SoftwareBlock;
