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
    res.send("server is start")

})
app.get("/getUsers", (req, res) => {
    res.statusCode = 200
    // res.setHeader("content-Type","application/json")
    res.json(users)

})
app.listen(port, () => {
    console.log(`Server Runing on this ${port}`)
})