const express = require('express')
require('dotenv').config()
const app = express()
const PORT = 6000 | process.env.PORT


app.listen((PORT), () => {
  console.log(`up and running on ${PORT}` )
})