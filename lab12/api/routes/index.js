const express = require('express');
const path = require('path');
const productRouter = require('./productRoute');
const userRouter =  require('./userRoute');

const baseRouter = express.Router();

baseRouter.use('/user', userRouter);
baseRouter.use('/product', productRouter);
baseRouter.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..', '..' ,'views', 'index.html'))
});

module.exports = baseRouter;