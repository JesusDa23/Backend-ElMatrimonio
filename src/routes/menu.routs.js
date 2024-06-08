const { Router } = require('express');
const { getOneMenu, getOneMenuById, createOneMenu, removeOneMenuById, updateMenuOneById } = require('../controllers/menu.controller');

const router = Router();

router.get('/', getOneMenu)
router.get('/:id',getOneMenuById)
router.post('/', createOneMenu)
router.delete('/:id', removeOneMenuById)
router.put('/:id', updateMenuOneById)


module.exports = router;