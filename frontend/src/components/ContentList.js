import { ReactComponent as WifiIcon } from '../images/wifi.svg';
import { ReactComponent as BrowserIcon } from '../images/browser.svg';
import { ReactComponent as DesktopIcon } from '../images/desktop.svg';

const Icons = {
  wifi: <WifiIcon />,
  browser: <BrowserIcon />,
  desktop: <DesktopIcon />,
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
