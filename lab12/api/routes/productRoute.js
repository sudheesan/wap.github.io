const { Router } = require('express');
const express = require('express');
const path = require('path');

const productRouter = express.Router();

const route = '/';

productRouter.get(`${route}`, (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', '..','views', 'products.html'))
})

module.exports = productRouter;