import Bowser from 'bowser';
import ScanBlock from './ScanBlock';
import Table from './Table';

const HardwareBlock = () => {
  // sorts array into comma separated list
  const sortArr = (arr) => {
    const arrLength = arr.length;
    let list = '';
    for (let i = 0; i < arrLength; i++) {
      if (i !== 0) list += ', ';
      list += arr[i];
    }
    return list;
  };

  // sorts plugins object into comma separated list
  const sortPlugins = (data) => {
    const { length } = data;

    let list = '';
    for (let i = 0; i < length; i++) {
      if (i !== 0) list += ', ';
      list += data[i].name;
    }
    return list;
  };

  const uaResult = Bowser.parse(navigator.userAgent);
  const date = new Date();

  // Software table items
  const data = [
    {
      key: 'browser',
      title: 'Browser',
      value: uaResult.browser.name,
    },
    {
      key: 'browserVersion',
      title: 'Browser version',
      value: uaResult.browser.version,
    },
    {
      key: 'browserEngine',
      title: 'Browser engine',
      value: uaResult.browser.engine || 'N/A',
    },
    {
      key: 'os',
      title: 'OS',
      value: `${uaResult.os.name} ${uaResult.os.versionName}`,
    },
    {
      key: 'osVersion',
      title: 'OS version',
      value: uaResult.os.version,
    },
    {
      key: 'platform',
      title: 'Platform',
      value: navigator.platform,
    },
    {
      key: 'systemType',
      title: 'System type',
      value: uaResult.platform.type,
    },
    {
      key: 'userAgent',
      title: 'User Agent',
      value: navigator.userAgent || 'N/A',
    },
    {
      key: 'preferredLanguage',
      title: 'Preferred language',
      value: navigator.language || 'N/A',
    },
    {
      key: 'languages',
      title: 'Languages',
      value: sortArr(navigator.languages) || 'N/A',
    },
    {
      key: 'timezone',
      title: 'Timezone',
      value: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A',
    },
    {
      key: 'timezoneOffset',
      title: 'Timezone offset',
      value: date.getTimezoneOffset() || 'N/A',
    },
    {
      key: 'cookiesEnabled',
      title: 'Cookies enabled',
      value: navigator.cookieEnabled ? 'True' : 'False',
    },
    {
      key: 'javaEnabled',
      title: 'Java enabled',
      value: navigator.javaEnabled() ? 'True' : 'False',
    },
    {
      key: 'dntHeader',
      title: 'DNT header enabled',
      value: navigator.doNotTrack ? 'True' : 'False',
    },
    {
      key: 'automatedBrowser',
      title: 'Automated browser',
      value: navigator.webdriver ? 'True' : 'False',
    },
    {
      key: 'plugins',
      title: 'Plugins',
      value: sortPlugins(navigator.plugins) || 'N/A',
    },
  ];
  return (
    <ScanBlock>
      <h1>Software</h1>
      <Table data={data} />
      <p>
        <b>Explanation:</b> JavaScript can be used to read various information
        about your software. This information can be used to create a
        fingerprint.
      </p>
    </ScanBlock>
  );
};

export default HardwareBlock;
