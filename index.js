const express = require('express');
const session = require('express-session');

// connection of mysql
const connection = require('./public/modules/config');

// importing routers.
const pageRouter = require('./public/modules/pages');

// creating app
const app = express();

// using static files path
app.use(express.static(__dirname + 'public'));

// setting view engine & views
app.set('view engine', 'pug');
app.set('views', 'views');

// routers.
app.use('/', pageRouter);

// errors
app.use((req, res, next) =>{
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
});

//handling error
app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    res.send(err.message);
});
// listning on port
app.listen(3000);