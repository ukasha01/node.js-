const express = require("express");
const { json } = require("express/lib/response");

// console.log("abc")
const app = express()
const port = 1000
let users = [{
    name: "use1", id: 1
}, {
    name: "use2", id: 2
}, {
    name: "use3", id: 3
}, {
    name: "use4", id: 4
}]
const urlParse = express.json()
app.use(urlParse)

app.get("/", (req, res) => {
    (res.statusCode = 200)
    res.send(users)

})
app.get("/users/:id", (req, res) => {
    res.statusCode = 200
    // res.setHeader("content-Type","application/json")
    let user = users.find((val) => val.id === parseInt(req.params.id))
    if (!user) {
        res.send(`<h1>User ${req.params.id} not Found </h1>`)
    }
    res.json(user)

})
app.delete("/users/:id", (req, res) => {
    res.statusCode = 200
    // res.setHeader("content-Type","application/json")
    let filterUser = users.filter((val) => val.id !== parseInt(req.params.id))
    users = filterUser

    res.send("user Seccesfully Deleted")


})
app.post('/create-user', (req, res) => {
    if (req.body.name) {
        res.statusCode = 201;
        const newUser = Math.floor(Math.random() * 19324908)
        users.push({
            name: req.body.name,
            id: newUser
        })

        res.send('<h1>User Created Successfully</h1>')
    } else {
        res.statusCode = 400;
        res.send('<h1>Name Field is Missing</h1>')
    }

})
app.put('/edit/:id', (req, res) => {
    const findUser = users.findIndex((val) => val.id === parseInt(req.params.id))
    console.log(req , "req")
    console.log(res , "res")

    if (findUser == -1) {
        res.statusCode = 404
        res.send(`<h1>User ${req.params.id} not found</h1>`)
    }
    else {
        res.statusCode = 200
        // res.setHeader("content-Type", "application/json")

        users[findUser].name = req.body.name
        res.send(`<h1>User ${req.params.id} edit seccessfully</h1>`)

      
    }
})
app.listen(port, () => {
    console.log(`Server Runing //localhost${port}`)
})