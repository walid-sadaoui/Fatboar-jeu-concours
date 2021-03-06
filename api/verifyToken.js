const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./config/config');

// Format of token
// Authorization: Bearer <access_token>

//Verify Token
module.exports = function auth(req,res,next){
    const authorizationParts = req.header('Authorization').split(' ');
    let token = authorizationParts[1];
    if(!token) return res.status(403).send('Access Denied');

    try {
        const verified = jwt.verify(token, jwtSecret);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).send('Invalid Token');
    }
}
