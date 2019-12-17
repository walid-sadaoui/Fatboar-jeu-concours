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
    if (emailExist) return res.status(409).json({
        status: 409,
        msg: 'Email already exists'
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const userData = {
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword,
        email: email,
        phone: phone,
    };

    try {
        const userSaved = await models.user.create(userData);
        return res.status(200).json({
            status: 200,
            userSaved
        });
    } catch (err) {
        return res.status(500).json({
            status: 500,
            err
        });
    }
})

// User login
router.post('/login', async (req, res) => {
    let { email , password } = req.body

    // Checking if user exists in db
    const user = await models.user.findOne({ where: { email: email }});
    if (!user) return res.json({
        status: 400,
        msg: 'Email is wrong'  
    });

    // Checking if password is correct
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(404).send('Password is wrong');

    // Set token for user
    const token = jwt.sign({ 
        user: user,
        exp: parseInt(Date.now() / 1000 + 60 * 60)
     }, jwtSecret);

    // Send a header
    res.header('Authorization', 'Bearer ' + token);

    // Send a json 
    return res.status(200).json({
        status: 200,
        msg: 'User is logged',
        user,
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