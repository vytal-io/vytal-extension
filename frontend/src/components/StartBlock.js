import { useCallback } from 'react';
import ContentList from './ContentList';
import ScanBlock from './ScanBlock';

const contentItems = [
  {
    title: 'Hardware',
    icon: 'desktop',
    body: 'Browsers reveal bits of identifiable information. This data can be combined into a digital fingerprint which can be used to follow you around the web.',
  },
  {
    title: 'Software',
    icon: 'browser',
    body: 'Browsers reveal bits of identifiable information. This data can be combined into a digital fingerprint which can be used to follow you around the web.',
  },
  {
    title: 'Connection',
    icon: 'wifi',
    body: 'Browsers reveal bits of identifiable information. This data can be combined into a digital fingerprint which can be used to follow you around the web.',
  },
];

const StartBlock = ({ onScanClick }) => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleInputClick = async () => {
    document.getElementById('scanButton').value = 'Loading...';
    await delay(2000);
    startScan();
  };

  const startScan = useCallback(() => {
    onScanClick(true);
  }, [onScanClick]);

  return (
    <ScanBlock>
      <h2>About</h2>
      <div className="contentBody">
        With the Vytal Browser Privacy Check, you can determine which traces you
        or your browser leave while surfing. Our test is intended to raise
        awareness of which data can be used by websites and advertisers to
        create a profile of you or to track your activities online.
      </div>
      <ContentList items={contentItems} />
      <input
        type="submit"
        onClick={handleInputClick}
        id="scanButton"
        value="Scan Browser"
      />
    </ScanBlock>
  );
};

export default StartBlock;
