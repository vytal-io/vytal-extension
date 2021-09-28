/* eslint-disable no-unused-vars */
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

  useEffect(() => {
    if (signature) {
      postSignature(hash, signature);
    } else {
      getSignature(hash, setSignature);
    }
  }, [signature]);

  const hash = getHash(workerData);
  return (
    <Block>
      <h1>Fingerprint</h1>
      <>
        {signature ? (
          <div className="fingerprintTable">
            <Table data={getFingerprint(signature, hash)} />
          </div>
        ) : (
          <div className="boxWrap">
            <div className="hash">{hash}</div>
          </div>
        )}
      </>
      <p>
        <b>Explanation:</b> This is a unique identifier that can be used to
        follow you around the web. Even if you clear cookies, change your IP or
        use private mode the hash will stay the same. Enter your name below and
        reload the page in private mode to test it out.
      </p>
      <form onSubmit={(e) => setSignature(e.target[0].value)}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter signature"
        />
        <input type="submit" id="saveButton" value="Save" maxLength="100" />
      </form>
    </Block>
  );
};

export default FingerprintBlock;
