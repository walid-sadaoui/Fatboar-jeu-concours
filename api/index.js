const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(helmet())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API pour FATBOAR' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
