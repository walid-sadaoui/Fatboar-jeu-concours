const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const app = express()

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

app.use(helmet())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/', indexRouter)

module.exports = app;
