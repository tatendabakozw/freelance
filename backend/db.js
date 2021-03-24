const mongoose = require('mongoose')
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true}
const mongoUrl = process.env.mongoUrl

const connectDB = () =>{
    mongoose.connect(mongoUrl, mongoOptions)
    mongoose.connection.once('open', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`Database Connected`)
        }
    })
}

module.exports = connectDB