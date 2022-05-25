import { useContext } from 'react';
import DataContext from './Context';
import Block from './Block';
import TableRow from './TableRow';

const DataBlock = ({ title, type }) => {
  const { initialData, delayedData, frameData, workerData } =
    useContext(DataContext);

  const isWorkerValid = workerData && window.Worker.length;

  const getWorkerValue = () => {
    if (isWorkerValid) return workerData[type].value;
    if (!window.Worker.length) return 'null';
    return null;
  };

  return (
    <Block>
      <h1>{title}</h1>
      <div className="tableWrap">
        <table>
          <tbody>
            <TableRow
              title="Initial"
              value={initialData ? initialData[type].value : ''}
              issues={initialData ? initialData[type].issues : []}
            />
            <TableRow
              title="Delayed"
              value={delayedData ? delayedData[type].value : ''}
              issues={delayedData ? delayedData[type].issues : []}
            />
            <TableRow
              title="Frame"
              value={frameData ? frameData[type].value : ''}
              issues={frameData ? frameData[type].issues : []}
            />
            <TableRow
              title="Web worker"
              value={getWorkerValue()}
              issues={
                isWorkerValid
                  ? workerData[type].issues
                  : ['Web workers blocked']
              }
            />
          </tbody>
        </table>
      </div>
    </Block>
  );
};

export default DataBlock;
