const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: [true, "Enter The address"]
    },
    phonenumber:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum:['user', 'moderator', 'admin']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)