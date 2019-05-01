require('dotenv').config()
const rp = require('request-promise')
const twilio = require('twilio')

rp({
  method: 'POST',
  url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
  'json': true,
  'qs': {
    key: process.env.YANDEX_TRANSLATE_KEY,
    text: 'Hello',
    lang: 'de'
  }
})
  .then(res => {
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_SECRET_KEY)
    client.messages.create({
      body: res.text,
      to: '+447496045540',
      from: '+447723444712'
    })
      .then(message => console.log(message.sid))
  })
