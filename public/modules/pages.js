const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const conn = require('./config');
const formParser = bodyParser.urlencoded({extended:false});


//rout of homepage
router.get('/', (req, res, next) =>{
    res.render('index', {title: 'Step : 1'});
});

//get data from client & inserting into databse
router.put('/payment', formParser, (req, res, next) =>{
    var data = req.body;
    console.log(data);
    res.send({msg: 'this is working'});
    db = 'INSERT INTO players SET ?';
    conn.query(db, data, (err, result) =>{
        if(err) throw err;
        console.log("one row affected");
    })
    res.redirect('/payment');
})
//making payment page.
router.get('/payment', (req, res, next) =>{
    res.render('payment',{title: 'Step : 2'});
});


module.exports = router;