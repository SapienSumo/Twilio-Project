const express = require('express')
const mongoose = require('mongoose')
const routes = require('./config/routes')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost:27017/twilio-translate')

app.use(bodyParser.json())
app.use(routes)

app.listen(4000, () => console.log('Translating on port 4K'))
