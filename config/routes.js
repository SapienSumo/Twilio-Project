const router = require('express').Router()

router.get('/', (req, res) => res.json({ message: 'Welcome to our text translator!'}))

module.exports = router
