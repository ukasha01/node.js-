let post = []
createPost = (req, res) => {
    if (req.body.postName && req.body.postImage && req.body.postDetail) {
        res.statusCode = 201
        let randId = Math.floor(Math.random() * 10002)
        req.body.id = randId
        post.push(req.body)
        res.send('<h1>post Add successfully</h1>')
    }
    else {
        res.statusCode = 404
        res.send('<h1>required Feild Missing</h1>')
    }
}
getPost = (req, res) => {
    res.statusCode = 200
    res.json(post)
}
get_user_post = (req, res) => {
    let user = post.find((val) =>
        val.id === parseInt(req.params.id)
    )
    console.log(user);
    if (!user) {
        res.statusCode = 404

        res.json("user Not Found")
    }
    else {
        res.statusCode = 200
        res.json(user)

    }

}
deletPost = (req, res) => {
    let user_deleted = post.filter((val) =>
        val.id !== parseInt(req.params.id)
    )
    if (user_deleted) {
        res.statusCode = 200
        res.json(user_deleted)
    }
}
editPost = (req, res) => {
    let editUserInd = post.findIndex((val) => {
        return val.id === parseInt(req.params.id)
    })
    if (editUser == -1) {
        res.statusCode = 404
        res.json("user Not Found")
    }
    else {
        res.statusCode = 200
        post[editUserInd] = req.body

    }
}

module.exports = { createPost, getPost, get_user_post, deletPost, editPost }    