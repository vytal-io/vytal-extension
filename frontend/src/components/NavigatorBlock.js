import Block from './Block';
import Table from './Table';
import getNavigator from '../utils/navigator';

const NavigatorBlock = ({ workerData }) => (
  <Block>
    <h1>Navigator</h1>
    <Table data={getNavigator(workerData)} />
    <p>
      <b>Explanation:</b> The Navigator interface exposes info about your
      computer.
    </p>
  </Block>
);

export default NavigatorBlock;
