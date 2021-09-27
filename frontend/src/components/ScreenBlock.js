import ScanBlock from './Block';
import Table from './Table';
import getScreen from '../utils/screen';

const ScreenBlock = () => (
  <ScanBlock>
    <h1>Screen</h1>
    <Table type="screen" data={getScreen()} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      hardware. This information can be used to create a fingerprint.
    </p>
  </ScanBlock>
);

export default ScreenBlock;
