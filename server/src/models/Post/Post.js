const postSchema = new mongoose.Schema({
  description: {
  type: String,    
  },
  image: {
    type: String,
  },
  private: {
    type: String,

  }
})