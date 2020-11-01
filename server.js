const express = require('express')
const next = require('next')
require('dotenv').config()
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.use(handle).listen(process.env.PORT, error => {
      if (error) throw error
      console.log(`ready on http://localhost:${process.env.PORT}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })