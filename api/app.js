const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const Users = require('./routes/users')
const verifyToken = require('./verifyToken.js');
const app = express()
const dotenv = require('dotenv');


dotenv.config();

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

app.use(helmet())
app.use(bodyParser.json())
app.options('*', cors())
// app.use(cors())
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
