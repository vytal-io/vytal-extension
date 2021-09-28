/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Block from './Block';
import Table from './Table';
import getHash from '../utils/fingerprint';

const FingerprintBlock = ({ workerData }) => {
  const hash = getHash(workerData);
  console.log(hash);
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
    </Block>
  );
};

export default FingerprintBlock;
