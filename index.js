const express = require('express')
const apirouter = require('./routes/api-routes')
const mongoose = require('mongoose')

const app = express()

const port = 3005
app.use(express.json())


app.use('/',apirouter)

const url = "mongodb+srv://rajni:12345@cluster0.rqxya.mongodb.net/todo?retryWrites=true&w=majority"


mongoose.connect(url , {useNewUrlParser:true})
.then(()=>{
    console.log("database connected")
})
.catch(err => console.log(err))

app.listen(port, () =>{
    console.log(`database is running on http://localhost:${port}`)
})



