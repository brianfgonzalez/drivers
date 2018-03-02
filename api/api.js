module.exports = function(app) {

  let bodyParser = require('body-parser')
  let url = require('url')
  let {mongoose} = require('./db/mongoose')
  let {Driver} = require('./models/driver')

  app.use(bodyParser.json())

  app.get('/api/drivers', (req, res) => {
    let url_parts = url.parse(req.url,true)
    Driver.find({model: url_parts.query.model, mark: url_parts.query.mark, operatingSystem: url_parts.query.operatingSystem})
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

  app.get('/api/operatingSystems', (req, res) => {
    let url_parts = url.parse(req.url,true)
    Driver.find({model: url_parts.query.model, mark: url_parts.query.mark}).distinct("operatingSystem")
    .then((operatingSystem) => {
      res.send({operatingSystem})
    })
    .catch((e) => res.status(400).send(e))
  })

}
