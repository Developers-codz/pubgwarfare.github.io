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
    res.redirect('/');
})

router.get('/tournaments', (req, res) =>{
    res.render('tournaments');
})

router.get('/history', (req, res) =>{
    res.render('history');
})

router.get('/login', (req, res) =>{
    res.render('login');
})

router.post('/login', (req, res) =>{
    res.redirect('/home');
})




module.exports = router;