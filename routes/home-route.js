const express = require('express');
const router = express.Router();
const fs = require('fs'); // allows node to interact with the file system

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

module.exports = router;
