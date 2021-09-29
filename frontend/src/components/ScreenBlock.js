import Block from './Block';
import Table from './Table';
import getScreen from '../utils/screen';

const ScreenBlock = () => (
  <Block>
    <h1>Screen</h1>
    <Table data={getScreen()} />
    <p>
      <b>Explanation:</b> The Screen interface exposes info about your computer.{' '}
      <a
        className="link"
        target="_blank"
        rel="noreferrer"
        alt="Read more about screen"
        href="https://developer.mozilla.org/en-US/docs/Web/API/Screen"
      >
        Read more
      </a>
    </p>
  </Block>
);

export default ScreenBlock;
