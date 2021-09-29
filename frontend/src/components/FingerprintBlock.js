import './FingerprintBlock.css';
import { useState, useEffect } from 'react';
import Block from './Block';
import Table from './Table';
import {
  getSignature,
  postSignature,
  getHash,
  getFingerprint,
} from '../utils/fingerprint';

const FingerprintBlock = ({ workerData }) => {
  const [signature, setSignature] = useState();
  const [load, setload] = useState(false);
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
        <b>Explanation:</b> This is a unique identifier that can be used to
        follow you around the web. Even if you clear cookies, change your IP or
        use private mode the hash will stay the same. Enter your name below and
        reload the page in private mode to test it out.
      </p>
      <form onSubmit={(e) => postSignature(hash, e.target[0].value)}>
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
