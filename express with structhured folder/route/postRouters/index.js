const express = require('express')
const router = express.Router()
let Post = require('../../controller/index')
// let post = require('../../controller/index')
router.post('/create-post' , Post.createPost)
router.get('/get_all_post' , Post.getPost)
router.get('/get_post/:id' , Post.get_user_post)
router.put('/edit_post/:id' , Post.editPost)
router.delete('/delet_post/:id' ,Post.deletPost)


module.exports = router