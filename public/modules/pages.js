const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const conn = require('./config');
const formParser = bodyParser.urlencoded({extended:false});


//rout of homepage
router.get('/', (req, res) =>{
    res.render('home');
});

router.get('/registration', (req, res) =>{
    res.render('registration');
});

router.post('/registration',(req, res) =>{
    console.log(req.body)
})




module.exports = router;