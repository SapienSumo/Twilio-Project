require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const twilio = require('twilio')
const translate = require('yandex-translate')(process.env.YANDEX_TRANSLATE_KEY)
const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_SECRET_KEY)

const app = express()

mongoose.connect('mongodb://localhost:27017/twilio-translate')

app.use(bodyParser.json())

app.get('/', (req, res) => res.json({ message: 'Welcome to our text translator!'}))
app.post('/message', (req, res) => {
  const message = req.body.message
  const language = req.body.lang

  translate.translate(message, { to: language }, function(err, response){
    return client.messages.create({
      body: response.text,
      to: req.body.toNumber,
      from: req.body.fromNumber
    })
      .then(() => res.json({ message: 'Translation successful. Message sent.' }))
  })

})

app.listen(4000, () => console.log('Translating on port 4000'))
