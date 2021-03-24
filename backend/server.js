const express = require('express')
require('dotenv').config()
const connectDB = require('./db')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

//app level middleware
app.use(cors())
app.use(helmet())
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//connecting databse
connectDB()

//user defined routers
const authRoute = require('./routes/auth')
app.use('/api/v1/user', authRoute)

//port and listener
const port = process.env.PORT || 5500

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`server up on port ${port}`)
    }
})