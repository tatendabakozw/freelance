const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {validationResult } = require('express-validator'); 

//register a new user
//post request 
//http://localhost:5500/user/register
exports.registerUser = async (req,res, next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    const { username, email, address, password, password2, phonenumber, role } = req.body
    try {
        if (!username || !email || !password || !password2 ||!address || !phonenumber || !role) {
            return res.status(200).json({ error: "Enter All Fields" })
        }
        else if (password !== password2) {
            return res.status(200).json({ error: "passwords do not match" })
        }
        const user = await User.findOne({ email: email })
        if (user) {
            return res.status(200).json({ error: "User Already Exists" })
        } else {
            hash = await bcrypt.hash(password, 10)
            if (hash) {
                const newUser = new User({
                    username: username,
                    password: hash,
                    email: email,
                    phonenumber: phonenumber,
                    role: role,
                    address: address
                })
                const savedUser = await newUser.save()
                res.status(200).json({ message: 'Account Created', user: savedUser })
            }
        }
    } catch (error) {
        next(error)
    }

}

//login a new user
//post request 
//http://localhost:5500/user/login
exports.loginUser = async (req,res, next)=>{
    const { email, password } = req.body
    try {
        if (!email || !password) {
            res.status(403).json({ error: 'Enter All Fields' })
        } else {
            User.findOne({ email: email }, (err, user) => {
                if (err) {
                    return res.status(500).json({ error: err })
                }
                else if (!user) {
                    return res.status(403).json({ error: "Account Does Not Exist" })
                } else if (user) {

                    bcrypt.compare(password, user.password, async function (err, result) {
                        if (err) {
                            return res.status(500).json({ error: "Invalid Credentials" })
                        } else if (result) {
                            const token = jwt.sign({
                                username: user.username,
                                email: user.email,
                                user_id: user._id,
                                phonenumer: user.phonenumer,
                                role: user.role,
                                address: user.address
                            }, process.env.JWT_SECRET)
                            res.status(200).json({
                                message: 'Login Successful',
                                token: token,
                                user: {
                                    username: user.username,
                                    email: user.email,
                                    user_id: user._id,
                                    role: user.role,
                                    address: user.address
                                }
                            })
                        }
                        else {
                            res.status(200).json({ error: "Invalid Credentials" })
                        }
                    });
                }
            })
        }
    } catch (error) {
        next(error)
    }
}