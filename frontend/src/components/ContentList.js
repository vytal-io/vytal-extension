import { ReactComponent as WifiIcon } from '../images/wifi.svg';
import { ReactComponent as BrowserIcon } from '../images/browser.svg';
import { ReactComponent as FingerprintIcon } from '../images/fingerprint.svg';

const Icons = {
  wifi: <WifiIcon />,
  browser: <BrowserIcon />,
  fingerprint: <FingerprintIcon />,
};

const ContentList = ({ items }) => (
  <div className="contentList">
    {items.map((item) => (
      <div className="contentItem" key={item.title}>
        <div className="contentIcon">{Icons[item.icon]}</div>
        <div className="contentText">
          <h2>{item.title}</h2>
          <div className="contentBody">{item.body}</div>
        </div>
      </div>
    ))}
  </div>
);

export default ContentList;
