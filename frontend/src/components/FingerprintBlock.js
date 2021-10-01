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
        <b>Explanation:</b> A device fingerprint will be generated from your
        data in the form of a hash. Sign your hash, change your IP or use
        private mode and reload the page to see if your signature remains the
        same.
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
