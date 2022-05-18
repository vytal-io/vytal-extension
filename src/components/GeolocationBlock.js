import { useState } from 'react';
import Block from './Block';
import getGeolocation from '../utils/geolocation';
import TableRow from './TableRow';

const GeolocationBlock = () => {
  const [geolocationData, setGeolocationData] = useState();
  const [buttonValue, setbuttonValue] = useState('Allow Geolocation API');
  return (
    <Block>
      <h1>HTML Geolocation API</h1>
      {geolocationData ? (
        <>
          {typeof geolocationData === 'string' ? (
            <div className="boxWrap">
              <div className="hash">{`${geolocationData}`}</div>
            </div>
          ) : (
            <>
              <div className="tableWrap">
                <table>
                  <tbody>
                    {geolocationData.map((item) => (
                      <TableRow
                        key={item.key}
                        title={item.key}
                        value={item.value}
                        issues={item.issues}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      ) : (
        <input
          type="submit"
          onClick={() => {
            getGeolocation(setGeolocationData);
            setbuttonValue('Loading...');
          }}
          className="button"
          value={buttonValue}
        />
      )}
    </Block>
  );
};

export default GeolocationBlock;
