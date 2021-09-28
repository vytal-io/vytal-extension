/* eslint-disable no-unused-vars */
import Block from './Block';
import Table from './Table';
import getIntl from '../utils/intl';

const IntlBlock = ({ workerData }) => (
  <Block>
    <h1>Intl</h1>
    <Table data={getIntl(workerData)} />
    <p>
      <b>Explanation:</b> JavaScript can be used to find information about your
      hardware. This information can be used to create a fingerprint.
    </p>
  </Block>
);

export default IntlBlock;
