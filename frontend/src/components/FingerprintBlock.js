/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import ScanBlock from './ScanBlock';
import Table from './Table';
import { getHash, getHardware, getWebGL, getBattery } from './main';

const FingerprintBlock = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [saved, setSaved] = useState('');
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    setData([...getHardware(), ...getWebGL()]);

    axios
      .get(`https://api.vytal.io/fingerprint/?hash=${hash}`)
      .then((response) => {
        if (response.data.length !== 0) {
          setName(response.data[response.data.length - 1].name);
        }
        setDisplay('block');
      });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    axios.post('https://api.vytal.io/fingerprint/', {
      name: e.target[0].value,
      hash,
    });
    setSaved(true);
  };

  const hash = getHash(data);

  const tableData = [
    {
      key: 'name',
      title: 'Name',
      value: name,
    },
    {
      key: 'hash',
      title: 'Hash',
      value: hash,
    },
  ];

  return (
    <ScanBlock>
      <h1>Fingerprint</h1>
      <div style={{ display }}>
        {name ? (
          <Table data={tableData} />
        ) : (
          <div className="boxWrap">
            <div className="hash">{hash}</div>
          </div>
        )}
      </div>
      <p>
        <b>Explanation:</b> This is a unique identifier that can be used to
        follow you around the web. Even if you clear cookies, change your IP or
        use private mode the hash will stay the same. Enter your name below and
        reload the page in private mode to test it out.
      </p>
      {saved ? (
        <p>Success! Re-scan browser.</p>
      ) : (
        <form
          onSubmit={(e) => {
            handleSave(e);
          }}
        >
          <input type="text" id="name" name="name" placeholder="Enter name" />
          <input type="submit" id="saveButton" value="Save" maxLength="100" />
        </form>
      )}
    </ScanBlock>
  );
};

export default FingerprintBlock;
