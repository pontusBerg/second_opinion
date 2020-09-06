const mongoose = require("mongoose");


const voteSchema = new mongoose.Schema({
  score: {
    type: Number,
  },

  users: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
      },
      vote: {
        type: Number, 

      }
    }
  ]
}) 

const Vote = mongoose.model('Vote', voteSchema)


module.exports = Vote