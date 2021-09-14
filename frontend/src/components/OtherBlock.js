/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import ScanBlock from './ScanBlock';
import { detectTor } from './main';

const OtherBlock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState();
  const [batteryStatus, setBatteryStatus] = useState();

  useEffect(() => {
    fetch('https://www3.doubleclick.net', {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-store',
    }).catch(() => {
      setAdBlockDetected(true);
    });

    navigator.getBattery().then((res) => {
      setBatteryLevel(`${Math.round(res.level * 100)}%`);
      setBatteryStatus(res.charging ? 'Charging' : 'Not charging');
    });
  }, []);

  return (
    <ScanBlock>
      <h1>Other</h1>
      <div className="tableWrap">
        <table>
          <tbody>
            <tr>
              <td>Brave browser</td>
              <td>{navigator.brave ? 'True' : 'False'}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tor Browser</td>
              <td>{detectTor() ? 'True' : 'False'}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Adblock</td>
              <td>{adBlockDetected ? 'True' : 'False'}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Timezone offset</td>
              <td>{new Date().getTimezoneOffset()}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Battery level</td>
              <td>{batteryLevel}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Battery status</td>
              <td>{batteryStatus}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <b>Explanation:</b> JavaScript can be used to find information about
        your hardware. This information can be used to create a fingerprint.
      </p>
    </ScanBlock>
  );
};
export default OtherBlock;
