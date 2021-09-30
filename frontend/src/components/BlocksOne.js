import UserAgentBlock from './UserAgentBlock';
import IntlBlock from './IntlBlock';
import NavigatorBlock from './NavigatorBlock';
import FingerprintBlock from './FingerprintBlock';

const BlocksOne = () => (
  <>
    <FingerprintBlock />
    <NavigatorBlock />
    <UserAgentBlock />
    <IntlBlock />
  </>
);

export default BlocksOne;
