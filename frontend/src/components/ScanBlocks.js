/* eslint-disable no-unused-vars */
import UserAgentBlock from './UserAgentBlock';
import DateBlock from './DateBlock';
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
    <DateBlock />
    <FingerprintBlock />
    <LocationBlock />
    <ConnectionBlock />
    <NavigatorBlock />
    <UserAgentBlock />
    <ScreenBlock />
    <OtherBlock />
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
