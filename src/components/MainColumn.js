/** @jsxImportSource theme-ui */

import HeaderBar from './HeaderBar';
import Blocks from './Blocks';

const MainColumn = () => (
  <div
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
    }}
  >
    <HeaderBar />
    <div sx={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
      <Blocks />
    </div>
  </div>
);

export default MainColumn;
