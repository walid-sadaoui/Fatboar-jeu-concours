const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./config/config');

// Format of token
// Authorization: Bearer <access_token>

//Verify Token
module.exports = function auth(req,res,next){
    const authorizationParts = req.header('Authorization').split(' ');
    let token = authorizationParts[1];
    if(!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, jwtSecret);
        req.user = verified;
        console.log(verified);
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}
