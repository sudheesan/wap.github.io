const express = require('express');
const path = require('path');
const productRouter = require('./productRoute');
const userRouter =  require('./userRoute');

const baseRouter = express.Router();

baseRouter.use('/users', userRouter);
baseRouter.use('/products', productRouter);
baseRouter.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..' ,'views', 'index.html'))
});

module.exports = baseRouter;