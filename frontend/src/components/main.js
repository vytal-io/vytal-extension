import md5 from 'crypto-js/md5';

const getHash = (data) => md5(JSON.stringify(data)).toString();

export { getHash as default };
