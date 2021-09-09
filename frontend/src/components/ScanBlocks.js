/* eslint-disable no-unused-vars */
import PredictionBlock from './PredictionBlock';
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
    <PredictionBlock />
    <ScreenBlock />
    <NavigatorBlock />
    {/* <LocationBlock />
    <ConnectionBlock /> */}
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
