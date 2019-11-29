const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

// connection of mysql
const connection = require('./public/modules/config');


// creating app
const app = express();
const formParser = bodyParser.urlencoded({extended:false});

// using static files path
app.use(express.static(__dirname + 'public'));

// setting view engine & views
app.set('view engine', 'pug');
app.set('views', 'views');


//rout of homepage
app.get('/', (req, res) =>{
    res.render('index', {title: 'Step : 1'});
});

//making payment page.
// app.get('/payment', (req, res) =>{
//     res.render('payment',{title: 'Step : 2'});
// });

//get data from client & inserting into databse
app.put('/payment', formParser, (req, res) =>{
    var data = req.body;
    console.log(data);
    res.send({msg: 'this is working'});
    // db = 'INSERT INTO players SET ?';
    // connection.query(db, data, (err, result) =>{
    //     if(err) throw err;
    //     console.log("one row affected");
    // })
})



// listning on port
app.listen(8000);