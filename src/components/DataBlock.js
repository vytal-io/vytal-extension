import { useContext } from 'react';
import DataContext from './Context';
import Block from './Block';
import TableRow from './TableRow';

const DataBlock = ({ title, type }) => {
  const { initialData, delayedData, frameData, workerData } = useContext(DataContext);

  return (
    <Block>
      <h1>{title}</h1>
      <div className="tableWrap">
        <table>
          <tbody>
            <TableRow title="Initial" value={initialData[type].value} issues={initialData[type].issues} />
            <TableRow title="Delayed" value={delayedData[type].value} issues={delayedData[type].issues} />
            <TableRow title="Frame" value={frameData[type].value} issues={frameData[type].issues} />
            <TableRow title="Web worker" value={window.Worker.length ? workerData[type].value : null} issues={window.Worker.length ? workerData[type].issues : ['Web workers blocked']} />
          </tbody>
        </table>
      </div>
      <p>
        Date and language data can be used to identify your
        location. Changing the settings on your computer can prevent this.
      </p>
    </Block>
  );
};

export default DataBlock;
