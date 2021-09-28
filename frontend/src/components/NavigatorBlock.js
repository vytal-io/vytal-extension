import Block from './Block';
import Table from './Table';
import getNavigator from '../utils/navigator';

const NavigatorBlock = ({ workerData }) => (
  <Block>
    <h1>Navigator</h1>
    <Table data={getNavigator(workerData)} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      hardware. This information can be used to create a fingerprint.
    </p>
  </Block>
);

export default NavigatorBlock;
