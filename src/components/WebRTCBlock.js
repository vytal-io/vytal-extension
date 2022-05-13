import Block from './Block';
import TableRow from './TableRow';
import { getConnection } from '../utils/connection';

const WebRTCBlock = ({ data }) => (
  <Block>
    <h1>WebRTC Leaks</h1>
    {data.length === 0 ? (
      <div className="boxWrap">
        <div className="hash">No WebRTC leaks found</div>
      </div>
    )
      : (
        <div style={{ display: 'grid', gap: '24px' }}>
          {data.map((ipData) => (
            <div className="tableWrap" key={ipData.query}>
              <table>
                <tbody>
                  {getConnection(ipData).map((item) => (
                    <TableRow
                      key={item.key}
                      title={item.key}
                      value={item.value}
                      issues={item.issues}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

    <p>
      WebRTC leaks are a vulnerability that can expose your real IP address.
      Using a quality VPN or disabling WebRTC will stop the leaks.
    </p>
  </Block>
);

export default WebRTCBlock;
