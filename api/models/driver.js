var mongoose = require('mongoose')

var Driver = mongoose.model('Driver', {
  model: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  mark: {
    type: String,
    minlength: 1,
    trim: true
  },
  operatingSystem: {
    type: String,
    minlength: 1,
    trim: true
  },
  name: {
    type: String
  },
  size: {
    type: Number
  },
  downloadUrl: {
    type: String
  },
  details: {
    type: String
  },
  postedDate: {
    type: Date
  }
})

module.exports = {Driver}

// var newTodo = new Todo({})
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (e) => console.log('Unable to save todo', e))
