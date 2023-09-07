const express = require('express');
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {logincontroller} = require('../Controller/User_Controller')
const {signupcontroller} = require('../Controller/Signup_Controller')

const UserModel = mongoose.model("UserModel") ;
const {JWT_SECRET} = require('../Config') ;

router.post("/signup", signupcontroller)

router.post("/login", logincontroller)

module.exports = router ;