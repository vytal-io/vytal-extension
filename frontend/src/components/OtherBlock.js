/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Bowser from 'bowser';
import ScanBlock from './ScanBlock';
import Table from './Table';
import {
  checkNavigatorProperties,
  checkWebWorker,
  checkScreenProperties,
  detectTor,
} from './main';

const OtherBlock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    fetch('https://www3.doubleclick.net', {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-store',
    }).catch(() => {
      setAdBlockDetected(true);
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
