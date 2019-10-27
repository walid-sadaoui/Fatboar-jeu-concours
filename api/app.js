const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const Users = require('./routes/users')
const app = express()

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)

app.use('/users', Users)

app.use('/', indexRouter)

module.exports = app;
