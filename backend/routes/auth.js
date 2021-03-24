const express = require('express')
const router = express.Router()
const { check } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/auth');


//register a new user
//post request 
//http://localhost:5500/user/register
router.post('/register',[check('email').isEmail()], registerUser)

//login a new user
//post request 
//http://localhost:5500/user/login
router.post('/login', loginUser)

module.exports = router
