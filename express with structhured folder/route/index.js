const express = require('express')
let router = express.Router()
let post =  require('./postRouters/index')

router.use('/post' , post)
module.exports = router