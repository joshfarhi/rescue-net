const express = require ('express');
const router = express.Router();

//LOGIN 
router.get('/login', (req, res) => res.render('login'));

//REGISTER
router.get('/register', (req, res) => res.render('register'));

// DASHBOARD 
router.get('/admindb', (req, res) => res.render('admindb'));

module.exports = router;