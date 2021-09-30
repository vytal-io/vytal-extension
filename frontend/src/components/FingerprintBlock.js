import './FingerprintBlock.css';
import { useState, useEffect, useContext } from 'react';
import DataContext from './Context';
import Block from './Block';
import Table from './Table';
import {
  getSignature,
  postSignature,
  getHash,
  getFingerprint,
} from '../utils/fingerprint';

const FingerprintBlock = () => {
  const [signature, setSignature] = useState();
  const [load, setload] = useState(false);
  const { workerData } = useContext(DataContext);
  const hash = getHash(workerData);

  useEffect(() => {
    getSignature(hash, setSignature, setload);
  }, []);

  return (
    <Block>
      <h1>Fingerprint</h1>
      {load && (
        <>
          {signature !== undefined ? (
            <div className="fingerprintTable">
              <Table data={getFingerprint(signature, hash)} />
            </div>
          ) : (
            <div className="boxWrap">
              <div className="hash">{hash}</div>
            </div>
          )}
        </>
      )}
      <p>
        <b>Explanation:</b> This hash is generated from your device data. Even
        if you clear cookies, change your IP or use private mode the hash will
        stay the same. Enter a signature and turn on a VPN to test it out.
      </p>
      <form onSubmit={(e) => postSignature(hash, e, setSignature)}>
        <input
          type="text"
          id="signature"
          name="signature"
          placeholder="Enter signature"
        />
        <input
          type="submit"
          className="saveButton"
          value="Save"
          maxLength="100"
        />
      </form>
    </Block>
  );
};

export default FingerprintBlock;
