import Block from './Block';

const InfoBlock = () => (
  <Block>
    Vytal is a browser extension that utilizes the chrome.debugger API to mock
    device data that could otherwise reveal information about you. This website
    scans your browser for such data. A red x signifies that the scanner has
    detected tampered data that is inaccurate. A green check means that no
    tampering has been detected. To read more visit the Github.
  </Block>
);

export default InfoBlock;
