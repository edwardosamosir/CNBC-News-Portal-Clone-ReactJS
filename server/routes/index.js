const router = require('express').Router()
const usersRouter = require('./users')
const customersRouter = require('./customers')
const postsRouter =  require('./posts')
const categoriesRouter = require('./categories')
const tagsRouter = require('./tags')
const errorHandler = require('../middleware/errorHandler')
const authentication = require('../middleware/authentication')


router.use('/users', usersRouter)
router.use('/customers', customersRouter)

router.use(authentication)
router.use('/posts', postsRouter)
router.use('/categories', categoriesRouter)
router.use('/tags', tagsRouter)


router.use(errorHandler)

module.exports = router;