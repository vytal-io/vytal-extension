import Bowser from 'bowser';
import { checkWebWorker } from './common';

const getUserAgentData = (key, userAgent, workerAgent) => ({
  key,
  value: userAgent || 'N/A',
  issues: [checkWebWorker(userAgent, workerAgent)],
});

// Returns object with location data
const getUserAgent = (workerAgent) => {
  const userAgentParsed = Bowser.parse(navigator.userAgent);
  const workerAgentParsed = Bowser.parse(workerAgent);
  return [
    getUserAgentData(
      'Browser',
      userAgentParsed.browser.name,
      workerAgentParsed.browser.name
    ),
    getUserAgentData(
      'Browser version',
      userAgentParsed.browser.version,
      workerAgentParsed.browser.version
    ),
    getUserAgentData('OS', userAgentParsed.os.name, workerAgentParsed.os.name),
    getUserAgentData(
      'OS version',
      userAgentParsed.os.versionName,
      workerAgentParsed.os.versionName
    ),
    getUserAgentData(
      'Engine',
      userAgentParsed.engine.name,
      workerAgentParsed.engine.name
    ),
    getUserAgentData(
      'Engine version',
      userAgentParsed.engine.version,
      workerAgentParsed.engine.version
    ),
    getUserAgentData(
      'Platform type',
      userAgentParsed.platform.type,
      workerAgentParsed.platform.type
    ),
  ];
};

export default getUserAgent;
