const router = require('express').Router()
const Controller = require('../controllers');

router.get('/posts', Controller.getAllPosts)
router.get('/posts/:id', Controller.getPostById)


module.exports = router;