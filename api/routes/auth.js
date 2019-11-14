const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const models = require('../db/models/index');
const { jwtSecret } = require('../config/config');


router.post('/register', async(req, res) => {
    let { firstName, lastName, password, email, phone } = req.body;

    // console.log(User);
    // Checking if email exists in db
    const emailExist = await models.user.findOne({ where: { email: email }});
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const userData = {
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword,
        email: email,
        phone: phone
    };

    try {
        const userSaved = await models.user.create(userData);
        res.send(userSaved);
    } catch (err) {
        return res.status(400).send(err);
    }
})

// User login
router.post('/login', async (req, res) => {
    let { email , password } = req.body

    // Checking if user exists in db
    const user = await models.user.findOne({ where: { email: email }});
    if (!user) return res.status(400).send('Email is wrong');

    // Checking if password is correct
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send('Password is wrong');

    // Set token for user
    const token = jwt.sign({ user: user }, jwtSecret);

    // Send a header
    res.header('Authorization', 'Bearer ' + token);

    // Send a json 
    res.status(201).json({
        msg: 'User is logged',
        email: email,
        password: user.password,
        token
    });
});

router.post('/logout', async (req, res) => {

});

router.post('register-facebook', async (req, res) => {
    
})

router.post('register-google', async (req, res) => {

})

router.post('login-facebook', async (req, res) => {
    
})

router.post('login-google', async (req, res) => {

})

module.exports = router;