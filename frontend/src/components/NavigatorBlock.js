import { useContext } from 'react';
import DataContext from './Context';
import Block from './Block';
import Table from './Table';
import getNavigator from '../utils/navigator';

const NavigatorBlock = () => {
  const { workerData } = useContext(DataContext);
  return (
    <Block>
      <h1>Navigator</h1>
      <Table data={getNavigator(workerData)} />
      <p>
        <b>Explanation:</b> The Navigator interface exposes info about your
        computer.{' '}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          alt="Read more about navigator"
          href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator"
        >
          Read more
        </a>
      </p>
    </Block>
  );
};

export default NavigatorBlock;
