const express = require('express');
const { createUser, userLogin } = require('../controllers/userController');
const userRouter = express.Router();
const loginRouter = express.Router(); 
userRouter.post('/', createUser); 
loginRouter.post('/', userLogin); 
module.exports = { userRouter, loginRouter }; 