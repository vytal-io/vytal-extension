import { useContext } from 'react';
import DataContext from './Context';
import Block from './Block';
import Table from './Table';
import getIntl from '../utils/intl';

const IntlBlock = () => {
  const { workerData } = useContext(DataContext);
  return (
    <Block>
      <h1>Intl</h1>
      <Table data={getIntl(workerData)} />
      <p>
        <b>Explanation:</b> The Intl object exposes info about your computer.{' '}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          alt="Read more about intl"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
        >
          Read more
        </a>
      </p>
    </Block>
  );
};

export default IntlBlock;
