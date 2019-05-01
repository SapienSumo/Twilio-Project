const router = require('express').Router()
const textController = require('../controllers/texts')

router.get('/', (req, res) => res.json({ message: 'Welcome to our text translator!'}))
router.post('/sendtext', textController.sendText)

module.exports = router
