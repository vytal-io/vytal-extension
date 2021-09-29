import OtherBlock from './OtherBlock';
import ScreenBlock from './ScreenBlock';
import LocationBlock from './LocationBlock';
import ConnectionBlock from './ConnectionBlock';

const BlocksTwo = ({ workerData, connectionData }) => (
  <>
    <LocationBlock workerData={workerData} connectionData={connectionData} />
    <ConnectionBlock workerData={workerData} connectionData={connectionData} />
    <ScreenBlock />
    <OtherBlock workerData={workerData} />
  </>
);

export default BlocksTwo;
