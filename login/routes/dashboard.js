const express = require('express');
const router = express.Router();


// Register Page
    // router.get('/register', (req, res) => res.render('register'));

// Dashbord
    router.get('/', (req, res) => res.render('dashboard'));

module.exports = router;