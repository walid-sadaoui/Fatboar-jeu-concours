// const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/', function(req, res) {
    res.send('SUCCESS')
});

module.exports = router;