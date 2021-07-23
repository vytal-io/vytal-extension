import { useCallback } from 'react';
import ContentList from './ContentList';
import ScanBlock from './ScanBlock';

const contentItems = [
  {
    title: 'Fingerprint',
    icon: 'fingerprint',
    body: 'Browsers reveal bits of identifiable information. This data can be combined into a digital fingerprint which can be used to follow you around the web.',
  },
  {
    title: 'Connection',
    icon: 'wifi',
    body: 'Browsers reveal bits of identifiable information. This data can be combined into a digital fingerprint which can be used to follow you around the web.',
  },
  {
    title: 'Software',
    icon: 'browser',
    body: 'Browsers reveal bits of identifiable information. This data can be combined into a digital fingerprint which can be used to follow you around the web.',
  },
];

const StartBlock = ({ onScanClick }) => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleInputClick = async () => {
    document.getElementById('scanButton').value = 'Loading...';
    await delay(100);
    startScan();
    window.scrollTo(0, 0);
  };

  const startScan = useCallback(() => {
    onScanClick(true);
  }, [onScanClick]);

  return (
    <ScanBlock>
      <h2>About</h2>
      <div className="contentBody">
        Vytal shows you what traces your browser leaves behind while surfing the
        web. This scan allows you to understand how easy it is to identify and
        track your browser even while using private mode.
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
