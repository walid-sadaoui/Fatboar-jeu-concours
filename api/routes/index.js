const express = require('express');
const router  = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../db/models/index')

router.use(cors())
process.env.SECRET_KEY = 'secret'

router.get('/', function(req, res) {
    res.send('SUCCESS')
});

router.post('/register', (req, res) => {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.passord
    }
    models.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    models.User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + 'est enregistré' })
                        })
                        .catch(err => {
                            res.send('error:' + err)
                        })

                })
            } else {
                res.json({ error: 'Utilisateur existe déjà' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

router.post('/login', (req, res) => {
    models.User.findOne({
            where: {
                email: res.body.email
            }
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: `Utilisateur n'existe pas` })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})
module.exports = router;
