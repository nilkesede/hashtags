try {
  const buff = Buffer.from(process.env.CLIENT_CREDENTIALS, 'base64');
  const text = buff.toString('ascii');
  module.exports = JSON.parse(text);
} catch (_) {
  module.exports = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  };
}
