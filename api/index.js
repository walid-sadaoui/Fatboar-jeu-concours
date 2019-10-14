const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)
var Users = require('./routes/Users')
app.use('/users', Users)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API pour FATBOAR JEU CONCOURS' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})