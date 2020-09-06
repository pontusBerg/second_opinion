const express = require('express')
const router = new express.Router()
const auth = require('../auth/auth')
const User = require('../models/User/User')

router.get('/user', auth, async (req, res) => {


  const {_id} = req.user
  try {
    const user = User.findById(_id)
    res.send(user)
  } catch (error) {
    res.send(error)
  }
})
