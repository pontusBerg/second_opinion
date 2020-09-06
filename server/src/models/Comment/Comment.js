const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }
})

const Comment = mongoose.model('Comment', upvoteSchema)


module.exports = Comment