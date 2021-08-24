import { useState } from 'react';
import Logo from './Logo';
import StartBlock from './StartBlock';
import ScanBlocks from './ScanBlocks';

const MainColumn = () => {
  const [scan, setScan] = useState(false);
  return (
    <div className="centerBlockOuter">
      <div className="centerBlockInner">
        <Logo />
        {scan ? <ScanBlocks /> : <StartBlock scan={scan} setScan={setScan} />}
      </div>
    </div>
  );
};
export default MainColumn;
