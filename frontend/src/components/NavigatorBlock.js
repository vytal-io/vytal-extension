import ScanBlock from './ScanBlock';
import Table from './Table';
import { getNavigator } from './main';

const NavigatorBlock = () => (
  <ScanBlock>
    <h1>Navigator</h1>
    <Table type="navigator" data={getNavigator()} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      hardware. This information can be used to create a fingerprint.
    </p>
  </ScanBlock>
);

export default NavigatorBlock;
