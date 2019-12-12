const express = require('express');
const router  = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../db/models/index')

router.use(cors())

router.get('/register', function(req, res) {
    
});

router.get('/login', function(req, res) {
    
});

router.get('/logout', function(req, res) {
    
});

module.exports = router;