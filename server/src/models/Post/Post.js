const postSchema = new mongoose.Schema({
  description: {
  type: String,    
  },
  image: {
    type: String,
  },
  private: {
    type: String,

  },
  user: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  
})

const Post = mongoose.model('Post', postSchema)


module.exports = Post