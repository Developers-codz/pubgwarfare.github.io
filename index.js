const express = require('express')
const bodyParser = require('body-parser')

// creating and connecting mysql
var mysql = require('mysql')
var db;
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'arjun',
  password: 'Arjun@13102000',
  database: 'pubg'
})

connection.connect((err) =>{
    if (err) throw err
    console.log('You are now connected...')
})


// creating app
const app = express()
const formParser = bodyParser.urlencoded({extended:false})

// setting view engine & views
app.set('view engine', 'pug')
app.set('views', 'views')

// using static files path
app.use(express.static(__dirname + 'public'))

//rout of homepage
app.get('/', (req, res) =>{
    res.render('index', {title: 'homepage'})
})

//making payment page.
app.get('/payment', (req, res) =>{
    res.render('payment',{title: 'payment'})
})

//get data from client & inserting into databse
app.post('/payment', formParser, (req, res) =>{
    var data = req.body
    db = 'INSERT INTO players SET ?'
    connection.query(db, data, (err, result) =>{
        if(err) throw err;
        console.log("one row affected")
    })
    res.redirect('/payment')
})



// listning on port
app.listen(8080)