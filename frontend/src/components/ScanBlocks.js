import FingerprintBlock from './FingerprintBlock';
import LocationBlock from './LocationBlock';
import HardwareBlock from './HardwareBlock';
import SoftwareBlock from './SoftwareBlock';
import ConnectBlock from './ConnectBlock';
import FiltersBlock from './FiltersBlock';
// import FontsBlock from './FontsBlock';

const ScanBlocks = () => (
  <>
    <FingerprintBlock />
    <LocationBlock />
    <ConnectBlock />
    <FiltersBlock />
    <SoftwareBlock />
    <HardwareBlock />
    {/* <FontsBlock /> */}
  </>
);

export default ScanBlocks;
