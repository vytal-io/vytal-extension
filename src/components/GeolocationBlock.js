/** @jsxImportSource theme-ui */

import { useState } from 'react';
import Block from './Block';
import getGeolocation from '../utils/geolocation';
import TableRow from './TableRow';

const GeolocationBlock = () => {
  const [geolocationData, setGeolocationData] = useState();
  const [buttonValue, setButtonValue] = useState('Allow Geolocation API');
  return (
    <Block>
      <h1>HTML Geolocation API</h1>
      {geolocationData ? (
        <>
          {typeof geolocationData === 'string' ? (
            <div
              sx={{
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '10px',
              }}
            >
              <div sx={{ textAlign: 'center', fontWeight: '600' }}>
                {`${geolocationData}`}
              </div>
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
            setButtonValue('Loading...');
          }}
          sx={{
            display: 'block',
            backgroundColor: 'var(--main)',
            color: '#fff',
            borderRadius: '4px',
            boxSizing: 'border-box',
            textAlign: 'center',
            width: '100%',
            height: '46px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            WebkitAppearance: 'none',
            ':hover': {
              opacity: '0.7',
            },
          }}
          value={buttonValue}
        />
      )}
    </Block>
  );
};

export default GeolocationBlock;
