import FingerprintBlock from './FingerprintBlock';
import LocationBlock from './LocationBlock';
import HardwareBlock from './HardwareBlock';
import SoftwareBlock from './SoftwareBlock';
import ConnectBlock from './ConnectBlock';
import FiltersBlock from './FiltersBlock';
// import FontsBlock from './FontsBlock';

const ScanBlocks = () => (
  <div>
    <FingerprintBlock />
    <FiltersBlock />
    <LocationBlock />
    <ConnectBlock />
    <SoftwareBlock />
    <HardwareBlock />
    {/* <FontsBlock /> */}
  </div>
);

export default ScanBlocks;
