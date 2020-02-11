const {join} = require('path')
const {parse} = require('url')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const next = require('next')
const admin = require('firebase-admin')

const port = parseInt(process.env.PORT, 10) || 1337
const development = process.env.NODE_ENV !== 'production'
const app = next({dev: development})
const handle = app.getRequestHandler()

const firebase = admin.initializeApp({
  credential: admin.credential.cert(require('./config/credentials/server'))
}, 'server')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(session({
    secret: 'hashtags',
    saveUninitialized: true,
    store: new FileStore({secret: 'hashtags'}),
    resave: false,
    rolling: true,
    httpOnly: true,
    cookie: {maxAge: 604800000}
  }))

  server.use((request, response, next) => {
    request.firebaseServer = firebase
    next()
  })

  server.post('/api/login', (request, response) => {
    if (!request.body) {
      return response.sendStatus(400)
    }

    const {token} = request.body
    firebase
      .auth()
      .verifyIdToken(token)
      .then(({uid, email}) => {
        const user = {uid, email}
        request.session.user = user
        return user
      })
      .then(user => response.json({status: true, user}))
      .catch(error => response.json({error}))
  })

  server.post('/api/logout', (request, response) => {
    request.session.user = null
    response.json({status: true})
  })

  server.get('/service-worker.js', (request, response) => {
    const parsedUrl = parse(request.url, true)
    const {pathname} = parsedUrl

    const filePath = join(__dirname, '.next', 'static', pathname)
    app.serveStatic(request, response, filePath)
  })

  server.get('*', (request, response) => {
    return handle(request, response)
  })

  server.listen(port, error => {
    if (error) {
      throw error
    }

    console.log(`> Ready on http://localhost:${port}`)
  })
})
