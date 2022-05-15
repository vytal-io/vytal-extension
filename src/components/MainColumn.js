import './MainColumn.css';
import HeaderBar from './HeaderBar';
import Blocks from './Blocks';

const MainColumn = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
    }}
  >
    <HeaderBar />
    <div className="centerBlockOuter">
      <Blocks />
    </div>
  </div>
);

export default MainColumn;
