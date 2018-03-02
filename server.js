let express = require('express')
let _ = require('lodash')
let path = require('path')
let moment = require('moment')
let publicPath = path.join(__dirname, '../public')
let app = express()
let port = process.env.PORT || 3000
let bodyParser = require('body-parser')
let url = require('url')
let {mongoose} = require('./api/db/mongoose')
let {Driver} = require('./api/models/driver')

let routes = require('./api/api')(app);

app.use(express.static(path.join(__dirname, 'react')))

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})
