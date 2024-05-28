const { Router } = require('express');
const { getCategories, getCategoriesById, createNewCategory, removeCategoriaPorId, updateCategoryById } = require('../controllers/category.controller');
const router = Router();

// definir las rutas para la entidad categoria


router.get('/', getCategories)
router.get('/:id',getCategoriesById)
router.post('/', createNewCategory)
router.delete('/:id', removeCategoriaPorId)
router.put('/:id', updateCategoryById)

module.exports = router;