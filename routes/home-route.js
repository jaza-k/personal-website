// routing for home page

const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Jaza K.', author: 'Jaza K.' });
});

module.exports = router;
