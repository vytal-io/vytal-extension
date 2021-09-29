import UserAgentBlock from './UserAgentBlock';
import IntlBlock from './IntlBlock';
import NavigatorBlock from './NavigatorBlock';
import FingerprintBlock from './FingerprintBlock';

const BlocksOne = ({ workerData }) => (
  <>
    <FingerprintBlock workerData={workerData} />
    <NavigatorBlock workerData={workerData} />
    <UserAgentBlock workerAgent={workerData.userAgent} />
    <IntlBlock workerData={workerData} />
  </>
);

export default BlocksOne;
