const router = require('express').Router()
const Controller = require('../controllers')

router.get('/', Controller.getAllPosts)
router.get('/:id', Controller.getPostById)
router.delete('/:id', Controller.deletePostById)
router.put('/:id', Controller.editPostById)
router.post('/', Controller.addPostWithTag)


module.exports = router;