const mongoose = require('mongoose')

let db_url = process.env.LOCAL_DB

mongoose.connect(db_url , {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: false,
  useFindAndModify: false,
})





