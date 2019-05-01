const mongoose = require('mongoose')

const textSchema = new mongoose.Schema({

  message: {
    type: String,
    required: true
  },

  lang: {
    type: String,
    required: true
  },

  toNumber: {
    type: String,
    required: true
  },

  fromNumber: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Text', textSchema)
