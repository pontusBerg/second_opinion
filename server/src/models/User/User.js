const mongoose = require('mongoose')

const mongoose = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
  },
  password: {
    type: String,
  }
})