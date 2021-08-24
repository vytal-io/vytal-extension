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
    body: 'Websites are able to access your IP address when you connect to their server. Your IP address exposes information about your connection and location.',
  },
  {
    title: 'System Info',
    icon: 'browser',
    body: "JavaScript can be used to find data about your computer's software and hardware. This information can be used to create a fingerprint.",
  },
];

const StartBlock = ({ setScan }) => (
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
      onClick={() => setScan(true)}
      id="scanButton"
      value="Scan Browser"
    />
  </ScanBlock>
);

export default StartBlock;
