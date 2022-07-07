const path = require('path');
const routes = require('./routes');

module.exports = (app) => {
    app.use('/api', routes);

    app.use((req, res) => {
        res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
    })
    
    app.use((err, req, res, next) => {
        res.status(500).send(`Internal server error ${err}`);
    })
}