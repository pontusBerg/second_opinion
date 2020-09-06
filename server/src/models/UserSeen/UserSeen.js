const mongoose = require("mongoose");

const userSeenSchema = new mongoose.Schema({
  seen: {
    type: Boolean,
    deafult: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }
})

const UserSeen = mongoose.model('UserSeen', userSeenSchema)

module.exports = UserSeen