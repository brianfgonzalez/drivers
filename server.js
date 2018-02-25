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

//app.use('/api', require('./api/api'))
//app.use(express.static(publicPath))

app.use(bodyParser.json())

app.get('/api/drivers', (req, res) => {
  let url_parts = url.parse(req.url,true)
  console.log(`model: ${url_parts.query.model}, mark: ${url_parts.query.mark}`)
  Driver.find({model: url_parts.query.model, mark: url_parts.query.mark})
    .then((driver) => {
      res.send({driver})
    })
  .catch((e) => res.status(400).send(e))
})

app.get('/api/models', (req, res) => {
  Driver.distinct("model")
  .then((model) => {
    res.send({model})
  })
  .catch((e) => res.status(400).send(e))
})

app.get('/api/marks/:model', (req, res) => {
  Driver.find({model: req.params.model}).distinct("mark")
  .then((mark) => {
    res.send({mark})
  })
  .catch((e) => res.status(400).send(e))
})

app.get('/', (req, res) => {
  res.send('Root Directory')
})

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})
