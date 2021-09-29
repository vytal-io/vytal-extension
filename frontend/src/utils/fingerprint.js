import axios from 'axios';
import md5 from 'crypto-js/md5';

export { getSignature, postSignature, getHash, getFingerprint };

const getSignature = (hash, setSignature, setload) => {
  axios
    .get(`https://api.vytal.io/fingerprint/?hash=${hash}`)
    .then((response) => {
      if (response.data.length !== 0) {
        setSignature(response.data[response.data.length - 1].name);
      }
      setload(true);
    });
};

const postSignature = (hash, e, setSignature) => {
  e.preventDefault();
  axios.post('https://api.vytal.io/fingerprint/', {
    name: e.target[0].value,
    hash,
  });
  setSignature(e.target[0].value);
};

const getHash = (data) => md5(JSON.stringify(data)).toString();

const getFingerprint = (signature, hash) => [
  {
    key: 'Signature',
    value: signature,
    issues: [],
  },
  {
    key: 'Hash',
    value: hash,
    issues: [],
  },
];
