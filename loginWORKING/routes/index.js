const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const Animals = require('../models/animals')
// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  Animals.find()
    .exec((err, animals) => {
      res.render('dashboard', {
        user: req.user,
        animals
      })
    })
  

});

  


module.exports = router;
