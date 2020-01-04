// routing for projects page

const express = require('express');
const router = express.Router();

/* GET projects page */
router.get('/', (req, res) => {
  res.render('/projects/projects-page', { title: 'Jaza K.', author: 'Jaza K.' });
});

module.exports = router;