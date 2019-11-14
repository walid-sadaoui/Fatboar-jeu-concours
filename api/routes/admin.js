const express = require('express');
const router  = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../db/models/index')

router.use(cors())

router.get("/tickets/all", async (req, res) => {
    let { user } = req.user;
    console.log(user.role);
    if (user.role != 'ADMIN') {
        return res.status(400).send('Access denied');
    }
    try {
        const ticket = await models.ticket.findAll({ limit: 10 });
        res.status(200).json({
            msg: 'All tickets',
            ticket
        });
    } catch (error) {
        return res.status(400).send('Server Error');
    }
});

router.get('/draw', function(req, res) {
    // tickets status utilisé --> random -> iduser --> nom prénom
    // si déjà fait, msg tirage au sort déjà réalisé
    res.send('SUCCESS')
});

module.exports = router;