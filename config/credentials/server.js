try {
  const buff = Buffer.from(process.env.SERVER_CREDENTIALS, 'base64')
  const text = buff.toString('ascii')
  module.exports = JSON.parse(text)
} catch (_) {
  module.exports = {
    type: '',
    project_id: '',
    private_key_id: '',
    private_key: '',
    client_email: '',
    client_id: '',
    auth_uri: '',
    token_uri: '',
    auth_provider_x509_cert_url: '',
    client_x509_cert_url: ''
  }
}
