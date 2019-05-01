// require ('dotenv').config()

require('dotenv').config()
// const rp = require('request-promise')
const twilio = require('twilio')

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_SECRET_KEY)

client.messages.create({
  body: 'Hi',
  to: '+447496045540',
  from: '+447723444712'
})
  .then(message => console.log(message.sid))



// rp({
// method: 'GET',
// url: `https:///forecast/${process.env.DARKSKY_SECRET_KEY}/37.8267,-122.4233`,
// json: true
// })
// .then(res => console.log(res))
