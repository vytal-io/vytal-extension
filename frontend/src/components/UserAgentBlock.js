/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Bowser from 'bowser';
import ScanBlock from './ScanBlock';
import Table from './Table';
import {
  checkNavigatorProperties,
  checkWebWorker,
  checkScreenProperties,
  getUserAgentData,
} from './main';

const UserAgentBlock = () => {
  const [firstRender, setfirstRender] = useState(true);
  const [workerData, setWorkerData] = useState('');
  const [userAgent, setUserAgent] = useState();

  useEffect(() => {
    checkWebWorker('userAgent', setWorkerData);
  }, []);

  useEffect(() => {
    if (!workerData) {
      setUserAgent(Bowser.parse(navigator.userAgent));
    } else {
      setUserAgent(Bowser.parse(workerData));
    }
  }, [workerData]);

  return (
    <ScanBlock>
      <h1>User Agent</h1>
      {userAgent && (
        <div className="tableWrap">
          <table>
            <tbody>
              <tr>
                <td>Browser</td>
                <td>{userAgent.browser.name}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Browser version</td>
                <td>{userAgent.browser.version}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>OS</td>
                <td>
                  {userAgent.os.name} {userAgent.os.versionName}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>OS version</td>
                <td>{userAgent.os.version}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Engine</td>
                <td>
                  {userAgent.engine.name} {userAgent.engine.version}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Platform type</td>
                <td>{userAgent.platform.type}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <p>
        <b>Explanation:</b> JavaScript can be used to find information about
        your hardware. This information can be used to create a fingerprint.
      </p>
    </ScanBlock>
  );
};

export default UserAgentBlock;
