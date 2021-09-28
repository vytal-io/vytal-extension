/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Block from './Block';
import Table from './Table';
import getHash from '../utils/fingerprint';

const FingerprintBlock = ({ workerData }) => {
  const [signature, setSignature] = useState();

  const hash = getHash(workerData);
  return (
    <Block>
      <h1>Fingerprint</h1>
      <div className="boxWrap">
        <div className="hash">{hash}</div>
      </div>
      <p>
        <b>Explanation:</b> This is a unique identifier that can be used to
        follow you around the web. Even if you clear cookies, change your IP or
        use private mode the hash will stay the same. Enter your name below and
        reload the page in private mode to test it out.
      </p>
      {signature ? (
        <p>Success! Reload browser.</p>
      ) : (
        <form onSubmit={(e) => setSignature(e.target[0].value)}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter signature"
          />
          <input type="submit" id="saveButton" value="Save" maxLength="100" />
        </form>
      )}
    </Block>
  );
};

export default FingerprintBlock;
