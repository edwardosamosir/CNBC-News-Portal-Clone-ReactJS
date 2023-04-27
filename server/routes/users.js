const router = require('express').Router()
const Controller = require('../controllers');
const authentication = require('../middleware/authentication')

// Home Page Register and Login
router.post('/register', authentication, Controller.registerUserAdmin)
router.post('/login', Controller.loginUser)

module.exports = router;