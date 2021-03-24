const Location = require('../models/Location')
const express = require('express')
const { requireSignIn } = require('../middleware')
const router  = express.Router()

//save location lognitude and latitude 
//post request
//http://localhost:5500/api/v1/location/create

router.post('/create',requireSignIn,(req,res)=>{
    res.send('my location')
})

module.exports = router