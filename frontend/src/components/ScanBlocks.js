/* eslint-disable no-unused-vars */
import UserAgentBlock from './UserAgentBlock';
import IntlBlock from './IntlBlock';
import OtherBlock from './OtherBlock';
import NavigatorBlock from './NavigatorBlock';
import ScreenBlock from './ScreenBlock';
import FingerprintBlock from './FingerprintBlock';
import LocationBlock from './LocationBlock';
import HardwareBlock from './HardwareBlock';
import SoftwareBlock from './SoftwareBlock';
import ConnectionBlock from './ConnectionBlock';
import FiltersBlock from './FiltersBlock';
// import FontsBlock from './FontsBlock';

const ScanBlocks = () => (
  <>
    <div className="centerBlockInner">
      <FingerprintBlock />
      <NavigatorBlock />
      <UserAgentBlock />
      <IntlBlock />
    </div>
    <div className="centerBlockInner">
      <LocationBlock />
      <ConnectionBlock />
      <ScreenBlock />
      <OtherBlock />
    </div>
    {/* <FingerprintBlock />
    <LocationBlock />
    <ConnectionBlock />
    <FiltersBlock />
    <SoftwareBlock />
    <HardwareBlock /> */}
    {/* <FontsBlock /> */}
  </>
);

export default ScanBlocks;
