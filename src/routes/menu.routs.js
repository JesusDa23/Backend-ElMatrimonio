const { Router } = require('express');
const { getOneMenu, getOneMenuById, createOneMenu, removeOneMenuById, updateMenuOneById } = require('../controllers/menu.controller');

const router = Router();

router.get('/menu', getOneMenu)
router.get('/menu/:id',getOneMenuById)
router.post('/menu', createOneMenu)
router.delete('/menu/:id', removeOneMenuById)
router.put('/menu/:id', updateMenuOneById)


module.exports = router;