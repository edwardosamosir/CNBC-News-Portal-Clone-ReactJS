const router = require('express').Router()
const Controller = require('../controllers')


router.get('/', Controller.getAllCategories)
router.post('/', Controller.addCategory)
router.get('/:id', Controller.getCategoryById)
router.put('/:id', Controller.editCategoryById)
router.delete('/:id', Controller.deleteCategoryId)

module.exports = router;