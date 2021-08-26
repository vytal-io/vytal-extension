import FingerprintBlock from './FingerprintBlock';
import LocationBlock from './LocationBlock';
import HardwareBlock from './HardwareBlock';
import SoftwareBlock from './SoftwareBlock';
import ConnectionBlock from './ConnectionBlock';
import FiltersBlock from './FiltersBlock';
// import FontsBlock from './FontsBlock';

const ScanBlocks = () => (
  <>
    <FingerprintBlock />
    <LocationBlock />
    <ConnectionBlock />
    <FiltersBlock />
    <SoftwareBlock />
    <HardwareBlock />
    {/* <FontsBlock /> */}
  </>
);

export default ScanBlocks;
