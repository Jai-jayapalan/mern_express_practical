require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')
const EmpolyeeRoute = require('./routes/empMethods')

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection
db.on('error',(err)=>{
    console.error(err)
})
db.once('open',()=>{
    console.log('Connected successfully to the database......')
})

// post data
app.use('/api/v1/employee',EmpolyeeRoute)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})