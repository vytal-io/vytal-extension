import { useContext } from 'react';
import DataContext from './Context';
import Block from './Block';
import { getConnection } from '../utils/connection';
import TableRow from './TableRow';

const ConnectionBlock = () => {
  const { connectionData } = useContext(DataContext);
  return (
    <Block>
      <h1>Connection</h1>
      <div className="tableWrap">
        <table>
          <tbody>
            {getConnection(connectionData).map((item) => (
              <TableRow key={item.key} title={item.key} value={item.value} issues={item.issues} />
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Your IP address reveals information about your
        connection. Using a VPN or Tor will hide your connection info.
      </p>
    </Block>
  );
};

export default ConnectionBlock;
