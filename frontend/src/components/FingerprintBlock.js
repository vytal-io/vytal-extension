import { useState } from 'react';
import Block from './Block';
import Table from './Table';
import {
  getHardware,
  getWebGL,
  getSoftware,
  getFingerprint,
  getHash,
  getName,
  handleSave,
} from './mainOld';

const FingerprintBlock = () => {
  const [name, setName] = useState('');
  const [load, setLoad] = useState(false);
  const [saved, setSaved] = useState('');
  const hash = getHash([...getHardware(), ...getWebGL(), ...getSoftware()]);
  getName(hash, setName, setLoad);
  return (
    <Block>
      <h1>Fingerprint</h1>
      {load && (
        <>
          {name ? (
            <Table data={getFingerprint(name, hash)} />
          ) : (
            <div className="boxWrap">
              <div className="hash">{hash}</div>
            </div>
          )}
        </>
      )}
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
            handleSave(e, hash, setSaved);
          }}
        >
          <input type="text" id="name" name="name" placeholder="Enter name" />
          <input type="submit" id="saveButton" value="Save" maxLength="100" />
        </form>
      )}
    </Block>
  );
};

export default FingerprintBlock;
