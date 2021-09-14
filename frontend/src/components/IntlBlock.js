import ScanBlock from './ScanBlock';
import Table from './Table';
import { getIntl } from './main';

const DateBlock = () => (
  <ScanBlock>
    <h1>Intl</h1>
    <Table type="navigator" data={getIntl()} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      hardware. This information can be used to create a fingerprint.
    </p>
  </ScanBlock>
);

export default DateBlock;
