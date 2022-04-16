const express = require('express')
const app = express()
const urlParse = express.json()
app.use(urlParse)
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ukasha:lcy1js3JePpi6JeD@cluster0.epigs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useUnifiedTopology: true
    })
    mongoose.connection.on("connected",()=>{
        console.log('database Connected')
    })
    mongoose.connection.on("error",()=>{
        console.log('database Connected')
    })
let mainRoute = require('./route/index')
app.use(mainRoute)
let port = 1000
app.listen(port, () => {
    console.log('server is running ')
})