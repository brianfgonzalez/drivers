let express = require('express')
let _ = require('lodash')
let moment = require('moment')
let bodyParser = require('body-parser')
let url = require('url')
//const {ObjectID} = require('mongodb')
//const bcrypt = require('bcryptjs')
let {mongoose} = require('./db/mongoose')
let {Driver} = require('./models/driver')

let app = express()

let port = process.env.MONGODB_URI || 3000

app.use(bodyParser.json())

// app.get('/drivers/all/:lastNumber', (req, res) => {
//   Driver.find().limit(Number(req.params.lastNumber)).sort({postedDate: -1})
//   .then((driver) => {
//     res.send({driver})
//   })
//   .catch((e) => res.status(400).send(e))
// })

app.get('/drivers', (req, res) => {
  let url_parts = url.parse(req.url,true)
  console.log(`model: ${url_parts.query.model}, mark: ${url_parts.query.mark}`)
  Driver.find({model: url_parts.query.model, mark: url_parts.query.mark})
    .then((driver) => {
      res.send({driver})
    })
  .catch((e) => res.status(400).send(e))
})

app.get('/models', (req, res) => {
  Driver.distinct("model")
  .then((model) => {
    res.send({model})
  })
  .catch((e) => res.status(400).send(e))
})

app.get('/marks/:model', (req, res) => {
  Driver.find({model: req.params.model}).distinct("mark")
  .then((mark) => {
    res.send({mark})
  })
  .catch((e) => res.status(400).send(e))
})

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

module.exports = {app}
