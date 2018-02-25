let express = require('express')
let _ = require('lodash')
let moment = require('moment')

let app = express()
let api = require('./api/api')

let port = process.env.MONGODB_URI || 3000

app.use('/api', api)

app.use('/', (req, res) => {
  res.send('this is the root')
})

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

module.exports = {app}
