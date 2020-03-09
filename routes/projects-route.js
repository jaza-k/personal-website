// routing for projects page

const express = require('express');
const router = express.Router();

/* GET projects page */
router.get('/', (request, response) => {
  response.render('projects/main', {title: 'Jaza K.', author: 'Jaza K.'});
});

module.exports = router;