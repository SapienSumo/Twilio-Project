require('dotenv').config()
const twilio = require('twilio')
const translate = require('yandex-translate')(process.env.YANDEX_TRANSLATE_KEY)
const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_SECRET_KEY)

translate.translate('Hello', { to: 'ru' }, function(err, res){
  client.messages.create({
    body: res.text,
    to: '+447496045540',
    from: '+447723444712'
  })
    .then(message => console.log(message.sid, 'Translation successful. Message sent.'))
})
