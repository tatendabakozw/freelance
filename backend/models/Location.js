const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    for:{
        type: String
    },
    longitude:{
        type: Number,
        required: true
    },
    latitude:{
        type: Number,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Location', locationSchema)