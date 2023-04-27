const router = require('express').Router()
const Controller = require('../controllers')

router.get('/', Controller.getTags)

module.exports = router;