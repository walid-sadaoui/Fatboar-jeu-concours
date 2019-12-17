const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const Users = require('./routes/users')
const verifyToken = require('./verifyToken.js');
const app = express()
const dotenv = require('dotenv');
const proxy = require('http-proxy-middleware');

dotenv.config();
const API_URL=process.env.API_URL || 'http://localhost:3000'
const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
// app.use(
//     '/',
//     proxy({ target: API_URL, changeOrigin: true })
//   );
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)
  
app.use('/users', verifyToken, Users)

app.use('/', indexRouter)
app.use('/auth', require('./routes/auth'));
app.use('/tickets', verifyToken, require('./routes/tickets'));

module.exports = app;
