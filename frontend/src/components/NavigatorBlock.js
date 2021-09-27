import ScanBlock from './Block';
import Table from './Table';
import getNavigator from '../utils/navigator';

const NavigatorBlock = ({ workerData }) => (
  <ScanBlock>
    <h1>Navigator</h1>
    <Table type="navigator" data={getNavigator(workerData)} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      hardware. This information can be used to create a fingerprint.
    </p>
  </ScanBlock>
);

export default NavigatorBlock;
