let bodyParser = require('body-parser')
let url = require('url')
let {mongoose} = require('./db/mongoose')
let {Driver} = require('./models/driver')
let express = require('express')
let router = express.Router()
//router.use(bodyParser.json())

console.log('inside of the api.js')

router.get('/api/drivers', (req, res) => {
  let url_parts = url.parse(req.url,true)
  console.log(`model: ${url_parts.query.model}, mark: ${url_parts.query.mark}`)
  Driver.find({model: url_parts.query.model, mark: url_parts.query.mark})
    .then((driver) => {
      res.send({driver})
    })
  .catch((e) => res.status(400).send(e))
})

router.get('/api/models', (req, res) => {
  Driver.distinct("model")
  .then((model) => {
    res.send({model})
  })
  .catch((e) => res.status(400).send(e))
})

router.get('/api/marks/:model', (req, res) => {
  Driver.find({model: req.params.model}).distinct("mark")
  .then((mark) => {
    res.send({mark})
  })
  .catch((e) => res.status(400).send(e))
})

module.exports = router
