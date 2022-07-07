const { Router } = require('express');
const express = require('express');
const path = require('path');

const userRouter = express.Router();

const route = '/';

userRouter.get(`${route}`, (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', '..', 'views', 'users.html'))
})

module.exports = userRouter;