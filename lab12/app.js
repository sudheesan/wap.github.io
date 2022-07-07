const express = require('express');
const path  = require('path');
const app = express();
const router = require('./api');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

router(app);

    

app.listen(3000, () => {
    console.log("Listening on port 3000")
});