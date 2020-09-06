const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
  },
  password: {
    type: String,
  },
  tokens: [
    {token: {
      type: String, 

    }}
  ]
})

userSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'user'
})



const User = mongoose.model('User', userSchema)

module.exports = User